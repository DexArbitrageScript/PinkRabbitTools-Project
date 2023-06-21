import fetch from "node-fetch";

interface ContractSecurity {
    // It describes whether this contract is open source.
    is_open_source: string;

    // It describes whether this contract has a proxy contract. 
    is_proxy: string;

    // It describes whether this contract has the function to mint tokens. 
    is_mintable: string;

    // It describes this contract's owner address. 
    // Example: "owner_address": "0x744aF9cBb7606BB040f6FBf1c0a0B0dcBA6385E5"; 
    // No return means unknown; Return empty means there is no ownership or can't find ownership.
    can_take_back_ownership: string;

    // It describes whether the contract owner has the authority to 
    // change the balance of any token holder.
    owner_change_balance: string;

    // It describes whether the contract has hidden owners.
    // For contract with a hidden owner, developer can still manipulate the contract 
    // even if the ownership has been abandoned.
    hidden_owner: string;

    // It describes whether this contract can self destruct.
    selfdestruct: string;

    // It describes whether the contract would call functions of other contracts 
    // when primary methods are executed.
    external_call: string;
}

interface TradingSecurity {
    buy_tax: string;

    // It describes whether the contract has 
    // the function restricting token holder selling all the token. 
    sell_tax: string;

    // It deiscribes whether the Token can be bought.
    cannot_buy: string;

    // It describes whether the contract has the
    // function restricting token holder selling all the token. 
    cannot_sell_all: string;


    slippage_modifiable: string;
    is_honeypot: string;
    transfer_pausable: string;
    is_blacklisted: string;
    is_whitelisted: string;
    is_in_dex: string;
    dex: string;

    is_anti_whale: string;

    // It describes whether the contract has the function to limit the maximum amount 
    // of transactions or the maximum token position that for single address.
    // Warning: When the anti whale value is set to a very small value, 
    // all tradinge would fail.
    anti_whale_modifiable: string;

    trading_cooldown: string;

    personal_slippage_modifiable: string;
}

interface InfoSecurity {
    token_name: string;
    token_symbol: string;
    holder_count: string;
    holders: string[];
    owner_balance: string;
    owner_percent: string;
    creator_address: string;
    creator_balance: string;
    creator_percent: string;
    lp_holder_count: string;
    lp_total_supply: string;
    is_true_token: string;
    is_airdrop_scam: string;
    trust_list: string;
    other_potential_risks: string;
}
/*
type RiskType = "safety" | "normal" | "medium" | "serious";

interface RiskAssessmentReport {
    totalScore: number;
    RiskLevel: RiskType;
}*/

export interface TokenSecurityInfo extends ContractSecurity, TradingSecurity, InfoSecurity { score: number; }

class BasicSecurity {
    public readonly BASIC_API = 'https://api.gopluslabs.io/api';
    public VERSION: string;

    constructor(version: string) {
        this.VERSION = version;
    }

    protected async fetchSecurityInfo<T>(suffix: string): Promise<T> {
        const apiURL = `${this.BASIC_API}${this.VERSION}/${suffix}`;
        const response = await fetch(apiURL);
        const data = response.json();
        return data as T;
    }
}

//////////////////////////////////////////
////////  Erc20 Token Security
//////////////////////////////////////////
export class TokenSecurity extends BasicSecurity {
    constructor() { super('/v1');}

    public async checkTokenSecurity(chainId: string, contractAddress: string) {
        const suffix = `token_security/${chainId}?contract_addresses=${contractAddress}`;
        const result = await this.fetchSecurityInfo(suffix);
        const data: TokenSecurityInfo = (result as any).result[contractAddress.toLowerCase()];


        console.log(data.score);
    }
    private converPercent(num: string): string {
        return Math.round(Number(num) * 100).toFixed(2);
    }
}



//////////////////////////////////////////
////////  NFT Security
//////////////////////////////////////////
export class NftSecurity extends BasicSecurity {
    constructor() { super('/v1');}
}

//////////////////////////////////////////
////////  Phishing WebSite Security
//////////////////////////////////////////
export class PhishingWebSiteSecurity extends BasicSecurity {
    constructor() { super('/v1');}
}


//////////////////////////////////////////
////////  External Feature Support
//////////////////////////////////////////
export class DecodeSignatureData extends BasicSecurity {
    constructor() { super('/v1');}
}

const mock = new ERC20TokenSecurity.TokenSecurity();
mock.checkTokenSecurity('56', '0x9b042a4f9a6639d05d90b90763365782de71fd43');
