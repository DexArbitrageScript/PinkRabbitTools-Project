//import { IMixPayRequire } from "./modules";
import axios, { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { IMixPayRequire } from './modules';

export const fetcher = <T>(...args: Parameters<typeof fetch>) => fetch(...args).then((res: Response) => res.json() as Promise<T>);

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
