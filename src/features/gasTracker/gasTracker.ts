import fetch from 'node-fetch';
import { ethers } from 'ethers';

interface UserResponse {
    todayGasUsed:    number;
    weekGasUsed:     number;
    monthGasUsed:    number;
    totalTransactionGasUsed: number;

    totalTransaction: number;
    succssTransaction: number;
    failTransaction: number;
    eachTransactionData: EachTransactionData[];
}

interface EachTransactionData {
    txHashLink: string;
    from:   string;
    to:     string;
    gasFee: string;

    transactionDescript: string;

    depositValue: string;
    deductedValue: string;
    createAt:   string;
}

interface TransactionResponse {
    blockNumber:    string;
    timeStamp:      string;
    hash:           string;
    from:           string;
    to:             string;
    value:          string;
    gasUsed:        string;
    gasPrice:       string;
    isError:        string;
    functionName:   string;
}

// fetch url function
const fetcher = async <T>(...args: Parameters<typeof fetch>): Promise<T> => {
    const res = await fetch(...args);
    return res.json() as Promise<T>;
};

export class GasTracker {

    public readonly Api: string;
    public readonly ApiKeys: string[];
    public readonly Provider: ethers.providers.JsonRpcProvider;
    public readonly ApiCoinPrice: string;

    constructor() {
        this.Api = 'https://api.etherscan.io/api';
        this.ApiKeys = [
            'XGDR33WTXYGKMP3HSCXWR7QBQAF2KP2AIJ', 
            'WQPUG453DZCXNKMABD4TST3C5X7Y2GIA14', 
            'ISUR68P67SY564Y3MK4SJMQEQF7YGNQ773'
        ];
        this.Provider = new ethers.providers.JsonRpcBatchProvider('https://eth.llamarpc.com');
        this.ApiCoinPrice = 'https://api.coingecko.com/api/v3/simple/price';
    }

    public async getUserAllTransactionGasDetail(userAddress: string): Promise<UserResponse> {
        return this.fetchTransaction(userAddress);
    }

    private async fetchTransaction(userAddress: string): Promise<UserResponse> {
        const apiUrl = `${this.Api}?module=account&action=txlist&address=${userAddress}&apikey=${this.ApiKeys[this._getRandomIndex(this.ApiKeys)]}`;
        const data = await fetcher<{ status: string, message: string, result: TransactionResponse[] }>(apiUrl);
        const currentPrice: string = await this.getCurrentPrice(null, null);

        let userResponse: UserResponse = {
            todayGasUsed: 0,
            weekGasUsed: 0,
            monthGasUsed: 0,
            totalTransactionGasUsed: 0,
            totalTransaction: 0,
            succssTransaction: 0,
            failTransaction: 0,
            eachTransactionData: [],
        };

        for (const txData of data.result) {
            const isTimeRange: [boolean, boolean, boolean] =  [
                this.isToday(Number(txData.timeStamp)),
                this.isWithInOneMonth(Number(txData.timeStamp)),
                this.isWithinOneWeek(Number(txData.timeStamp)),
            ];
            
            if (isTimeRange[0]) userResponse.todayGasUsed += Number(this.convertGasWeiToEth(Number(txData.gasPrice) * Number(txData.gasUsed)));
            if (isTimeRange[1]) userResponse.monthGasUsed += Number(this.convertGasWeiToEth(Number(txData.gasPrice) * Number(txData.gasUsed)));
            if (isTimeRange[2]) userResponse.weekGasUsed  += Number(this.convertGasWeiToEth(Number(txData.gasPrice) * Number(txData.gasUsed)));
            
            userResponse.totalTransactionGasUsed += Number(this.convertGasWeiToEth(Number(txData.gasPrice) * Number(txData.gasUsed)));
            if (txData.isError === '1') { userResponse.failTransaction += 1; }
            else { userResponse.succssTransaction += 1; }
            userResponse.totalTransaction += 1;

            let depositValueWithUser: string = '';
            let deductedValueWithUser: string = '';
            if (txData.to === userAddress.toLowerCase() && txData.value !== '0') depositValueWithUser = this.formatNumberWithDecimals(
                Number(this.convertGasWeiToEth(Number(txData.value))), 
                4,
            );

            if (txData.from === userAddress.toLowerCase() && txData.value !== '0') deductedValueWithUser = this.formatNumberWithDecimals(
                Number(this.convertGasWeiToEth(Number(txData.value))), 
                4,
            );

            const gasFee: string = this.convertGasWeiToEth(Number(txData.gasPrice) * Number(txData.gasUsed));
            const gasFeePrice: string = this.formatNumberWithDecimals(Number(gasFee) * Number(currentPrice), 5);
            userResponse.eachTransactionData.push({
                txHashLink:`https://etherscan.io/tx/${txData.hash}`,
                from:   `${txData.from}(Send)`,
                to:     `${txData.to}(Receiver)`,
                gasFee: `${gasFee}ETH($${gasFeePrice})`,
                transactionDescript: this.extractFunctionName(txData.functionName),
                depositValue: depositValueWithUser === '' ? '' : `+${depositValueWithUser} ETH`,
                deductedValue: deductedValueWithUser === '' ? '' : `-${deductedValueWithUser} ETH`,
                createAt: this.formatTimestamp(Number(txData.timeStamp)),
            });
        }
        return userResponse;
    }

    private async getCurrentPrice(ids: string | null, coin: string | null): Promise<string> {
        if (!ids && !coin) ids = 'ethereum'; coin = 'usd';
        try {
            console.log(`${this.ApiCoinPrice}?ids=${ids}&vs_currencies=${coin}`);
            const data = await (await fetch(`${this.ApiCoinPrice}?ids=${ids}&vs_currencies=${coin}`)).json();
            const price = (data as any).ethereum.usd;
            return price;
        } catch (error) {
            throw new Error('fetch current coin price error');
        }
    }

    private extractFunctionName(inputString: string): string {
        const regex = /([a-zA-Z_$][0-9a-zA-Z_$]*)\s*\([^)]*\)/;

        const match = inputString.match(regex);
        if (match && match.length > 1) {
          return match[1].trim();
        }
        return '';
      }

    private isToday(timestamp: number): boolean {
        const today = new Date();
        const date = new Date(timestamp * 1000);
      
        return (
          date.getDate() === today.getDate() &&
          date.getMonth() === today.getMonth() &&
          date.getFullYear() === today.getFullYear()
        );
      }

    private isWithInOneMonth(timestamp: number): boolean {
        const today = new Date();
        const date = new Date(timestamp * 1000);

        return (
            date.getMonth() >= today.getMonth() - 1 &&
            date.getFullYear() === today.getFullYear()
        )
    }

    private isWithinOneWeek(timestamp: number): boolean {
        const today = new Date();
        const date = new Date(timestamp * 1000);
        const timeDiff = today.getTime() - date.getTime();
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      
        return daysDiff <= 7;
    }

    private _getRandomIndex(array: string[]): number {
        const randomIndex = Math.floor(Math.random() * array.length);
        return randomIndex;
      }

    public formatTimestamp(timestamp: number): string {
        const date = new Date(timestamp * 1000); 
      
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
      
        const formattedDate = `${year}-${month}-${day}`;
        const formattedTime = `${hours}:${minutes}:${seconds}`;
      
        return `${formattedDate} ${formattedTime}`;
    }

    public convertGasWeiToEth(gasWei: number): string {
        const ethValue = gasWei / 10 ** 18;
        return this.formatNumberWithDecimals(Number(ethValue.toString()), 3);
    }

    public formatNumberWithDecimals(num: number, decimal: number): string {
        return num.toFixed(decimal);
    }
}

export const getGasTracker = (): GasTracker => {
    return new GasTracker();
}
