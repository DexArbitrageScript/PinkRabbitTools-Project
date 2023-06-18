import fetch, { Response } from 'node-fetch';

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

export namespace IMixPayOptional {
    export interface MixPayMemo {
        source:  string;
        payee:  string;
        settleementassetId: string;
    }
}
