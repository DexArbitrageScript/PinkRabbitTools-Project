//import { IMixPayRequire } from "./modules";
import axios, { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';
 
export const fetcher = <T>(...args: Parameters<typeof fetch>) => fetch(...args).then((res: Response) => res.json() as Promise<T>);

export namespace IMixPayRequire {
    export const BASIC_PAY_URL = 'https://mixpay.me/';
    export const BASIC_API_URL = 'https://api.mixpay.me/';

    // @ts-ignore
    export interface MixPayParams {
        // Account ID for receiving crypto, 
        payeeId?: string;
        
        // Corresponding to the amount of quoteAssetId. 
        // For example, the current feature fee is 10 USDT
        readonly quoteAmount: string;
    
        // AssetId of quote cryptocurrency.
        quoteAssetId?: string;
    
        // Unique in your system. String lengths between 6-36 must be letters, 
        // numbers, dashes and underscores and NOT space. 
        // orderId and payeeId make a payment unique.
        readonly orderId:    string;
    
        // assetId of settlement cryptocurrency.
        // Settlement assets you prefer. 
        // But you need to pay attention to the strictMode.
        settlementAssetId?:  string;

        // UUID, used to prevent double payment and to check the payment result. 
        traceId?:   string;
        expireSeconds?:  number;
    };

    export interface QuoteParams {
        symbol: string;
        iconUrl: string;
        minQuoteAmount: string;
        maxQuoteAmount: string,
        decimalDigit: number,
        isAsset: number,
        assetId: string,
    };

    interface QuoteResponse {
        code: number;
        success: boolean;
        message: string;
        data: QuoteParams[];
        timestampMs: number;
    }

    export const getQuoteAssetId = async (symbol: string): Promise<QuoteParams> => {
        const quotes = await getQuote();
        for (const quote of quotes.data) if (symbol == quote.symbol) return quote;
        throw new Error(`Quote asset with symbol "${symbol}" not found.`);
    }

    export const getQuote = async (): Promise<QuoteResponse> => {
        const headers = { 'Content-Type': 'application/json' };
        const suffix = 'v1/setting/quote_assets';
        const queryURL = `${BASIC_API_URL}${suffix}`;
        const quotes = await fetcher<QuoteResponse>(queryURL, { headers });
        return quotes;
    }
}




interface OrderResponse {
    code: number;
    success: boolean;
    message: string;
    data: {
      code: string;
    };
    timestampMs: number;
}

// @ts-ignore
abstract class MixPayManager {
    protected readonly UUID = 'ede1a472-c3a4-3f3b-83ed-29db7ed88a95';

    protected async createOrder(mixPayData: IMixPayRequire.MixPayParams): Promise<string> {
        console.log(mixPayData);
        const suffix = 'v1/one_time_payment';
        const orderURL = `${IMixPayRequire.BASIC_API_URL}${suffix}`;
        try {
            const response: AxiosResponse<OrderResponse> = await axios.post(orderURL, mixPayData);
            const payCode: string = response.data.data.code;
            const payURL = `${IMixPayRequire.BASIC_PAY_URL}code/${payCode}`;
            return payURL;
        } catch (error) {
            throw error;
        }
    }
}

export class ExtraMixPay extends MixPayManager {
    public async createMixPayOrder(params: IMixPayRequire.MixPayParams, receiveToken: string): Promise<string> {
        const requireParams: IMixPayRequire.MixPayParams = { ...params };
        try {
            const data = await IMixPayRequire.getQuoteAssetId(receiveToken);
            requireParams.payeeId = this.UUID;
            requireParams.quoteAssetId = data.assetId;
            requireParams.settlementAssetId = data.assetId;
        } catch (error) {
            throw error;
        }
        const payURL = await this.createOrder(requireParams);
        return payURL;
    }

    public generatorOrderId(): string { return uuidv4(); }
}
