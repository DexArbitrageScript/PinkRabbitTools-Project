import { ethers } from 'ethers';
import { Keypair } from '@solana/web3.js';
import bip39 from 'bip39';

type UniversalWallet = {
  _address: string;
  _mnemonic: string;
  _privateKey: string;
}

// Mnemonic length [12, 15, 18, 21, 24], the amount of mnemonic.
type MnemonicLength = 12 | 15 | 18 | 21 | 24;
type MnemonicBitLength = {
  [K in MnemonicLength]: K extends 12 ? 128 : K extends 15 ? 160 : K extends 18 ? 192 : K extends 21 ? 224 : 256;
} & Record<number, number>;

export interface MultipleChainWallet {
  generateUniversalWalletWithMnemonic(amount: number, bitLength: number | MnemonicLength): UniversalWallet[];
}

// @ts-ignore
export class SolanaWalletImplementation implements MultipleChainWallet {
  protected universalWalletData: UniversalWallet[];

  constructor() { this.universalWalletData = []; }

  /**
   * Bulk generate universal wallets
   * Note: Support chains "solana"
   * 
   * @param   {number}           amount        Generate wallets amount
   * @param   {MnemonicLength}   bitLength     Enter the length of the mnemonic word
   * @returns {Array}                          A array of universalWallet
   */
  public generateUniversalWalletWithMnemonic(amount: number, bitLength: MnemonicLength): UniversalWallet[] {
    let i = 0
    for (; i < amount; ++i) {
      // Generate mnemonics based on digits
      // Calculate the number of entropy bytes of the mnemonic. 
      const entropyBytes = this.getMneonicBitLength(bitLength);
      const mnemonic = bip39.generateMnemonic(entropyBytes);
      const seed = bip39.mnemonicToSeedSync(mnemonic).slice(0, 32);
      const wallet = Keypair.fromSeed(seed);

      // Convert privateKey from Uint8Array to base58
      const convertToBase58 = function (secretKey: Uint8Array): string { return Array.from(secretKey).map(byte => byte.toString(16).padStart(2, '0')).join(''); };
      this.universalWalletData.push({ _address: wallet.publicKey.toBase58(), _mnemonic: mnemonic, _privateKey: convertToBase58(wallet.secretKey)})
    }
    return this.universalWalletData;
  }

  private getMneonicBitLength(bitLength: MnemonicLength): number {
    const mnemonicBitLength: MnemonicBitLength = { 12: 128, 15: 160, 18: 192, 21: 224, 24: 256 };
    return mnemonicBitLength[bitLength];
  }
}

// @ts-ignore
export class BasicWalletImplementation implements MultipleChainWallet {
  protected universalWalletData: UniversalWallet[];

  constructor() { this.universalWalletData = []; }

  /**
   * Bulk generate universal wallets
   * Note: Support chains ["ethereum", "bsc", "polygon", "matic", "optimism", "arbitrum", "fantom"]
   * 
   * @param   {number}           amount        Generate wallets amount
   * @param   {MnemonicLength}   bitLength     Enter the length of the mnemonic
   * @returns {Array}                          A array of universalWallet
   */
  public generateUniversalWalletWithMnemonic(amount: number, bitLength: MnemonicLength): UniversalWallet[] {
    let i = 0
    for (; i < amount; ++i) {
      // Generate mnemonics based on digits
      // Calculate the number of entropy bytes of the mnemonic.
      // 
      // In ethereum and other cryptocurrency wallets, the entropy is usually generated using a certain number of random bytes.
      // according to the specification, the number of bits of the mnemonic should be an integer multiple of the number of bits of entropy. 
      // each byte contains 8 bits, so we divide the number of bits bitLength by 8 to get the number of bytes of entropy bytes. 
      // this way, we can calculate the number of bytes needed to generate the mnemonic based on the specified number of bits.
      //
      // For example, if bitLength is 12, then entropyBytes will be calculated as 1.5, which means that the number of bytes needed to generate the helper word is 1.5 bytes. 
      // in practice, this is usually rounded up, i.e. 1.5 bytes is converted to 2 bytes.
      //
      // Note: that the bitLength here is the number of bits of the mnemonic, not the number of bits of entropy. 
      // entropy is the number of random bytes needed to generate the mnemonic, and its number of bits is a multiple of bitLength.
      const entropyBytes = this.getMneonicBitLength(bitLength) >> 3;
      const entropy = ethers.utils.randomBytes(entropyBytes);
      const mnemonic = ethers.utils.entropyToMnemonic(entropy);
      const wallet = ethers.Wallet.fromMnemonic(mnemonic);
      this.universalWalletData.push({ _address: wallet.address, _mnemonic: mnemonic, _privateKey: wallet.privateKey.slice(2)});
    }
    return this.universalWalletData;
  }

  private getMneonicBitLength(bitLength: MnemonicLength): number {
    const mnemonicBitLength: MnemonicBitLength = { 12: 128, 15: 160, 18: 192, 21: 224, 24: 256 };
    return mnemonicBitLength[bitLength];
  }
}

// @ts-ignore
export class VanityWalletGenerator extends BasicWalletImplementation {
  // eslint-disable-next-line no-unreachable
  private readonly _requiredPrefix: string | undefined;
  private readonly _requiredSuffix: string | undefined;

  public constructor(prefix?: string, suffix?: string) {
    super();
    this._requiredPrefix = prefix;
    this._requiredSuffix = suffix;
  }

  public generateVanityWallets(count: number): { address: string, privateKey: string }[] {
    const results: { address: string, privateKey: string }[] = [];

    while (results.length < count) {
      const randomBytes = ethers.utils.randomBytes(32);
      const wallet = new ethers.Wallet(randomBytes);
      const address = wallet.address;

      if (this._requiredPrefix && !this._hasRequiredPrefix(address)) {
        continue; // Skip if required prefix is provided and address doesn't have it
      }

      if (this._requiredSuffix && !this._hasRequiredSuffix(address)) {
        continue; // Skip if required suffix is provided and address doesn't have it
      }

      const privateKey = wallet.privateKey;
      results.push({ address, privateKey });
    }

    return results;
  }

  private _hasRequiredPrefix(address: string): boolean {
    const addressWithoutPrefix = address.substr(2); // Remove "0x" prefix
    return addressWithoutPrefix.startsWith(this._requiredPrefix as string);
  }

  private _hasRequiredSuffix(address: string): boolean {
    const addressWithoutPrefix = address.substr(2); // Remove "0x..." suffix
    return addressWithoutPrefix.endsWith(this._requiredSuffix as string);
  }
}
