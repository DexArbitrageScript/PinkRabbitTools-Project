import { ethers, providers, utils, Wallet } from 'ethers';

type ContractInstance       = ethers.Contract;

type TransactionResponse    = providers.TransactionResponse; 

type Provider = ethers.providers.Provider;

export type providerChainList = {
    chainList: Record<string, string[]>;
}

interface UserWallet { readonly _private: string; }
export interface ContractParams extends UserWallet {
    gasLimit?: string;
    gasPrice?: string;
    sendValue: string;
    
    hexData: string;

    contractAddress: string;
    contractABI:    any[];
}

export class BulkCallContract {
    public static provider: string;

    constructor(providerURL: string) { BulkCallContract.provider = providerURL; }

    public async batchSendTxWithContract(params: ContractParams[]): Promise<TransactionResponse[]> {
        const txRecivept:TransactionResponse[] = [];

        const provider: Provider = new ethers.providers.JsonRpcProvider(BulkCallContract.provider);
        params.forEach(async (param) => {
            const instance = this.createContractInstance(param.contractAddress, param.contractABI, provider);
            const transactionBody = {
                to:     param.contractAddress,
                data:   utils.hexlify(param.hexData),
                value:  utils.hexlify(param.sendValue),
            };
            const sendTx = await instance.provider.sendTransaction(
                await this.walletSignTransaction(
                    param._private, 
                    provider, 
                    transactionBody)
                );
            txRecivept.push(sendTx);
        });
        return txRecivept;
    }

    public createContractInstance(contractAddress: string, contractABI: any[], provider: Provider): ContractInstance {
        try {
            const instance = new ethers.Contract(contractAddress, contractABI, provider);
            return instance;
        } catch(error) { 
            throw new Error('Failed to create contract instance');
        }
    }

    private async walletSignTransaction(key: string, provider: Provider, txBody: {}): Promise<string> {
        const wallet = new Wallet(key, provider);
        const signedTransaction = await wallet.signTransaction(txBody);
        return signedTransaction;
    }

    static setProviderURL(providerURL: string): void {
        BulkCallContract.provider = providerURL;
    }
}
