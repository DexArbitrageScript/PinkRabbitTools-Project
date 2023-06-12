import { BasicWalletImplementation, VanityWalletGenerator, SolanaWalletImplementation } from "./generatorWallet";

export function CreateBasicWallet(): BasicWalletImplementation {
    return new BasicWalletImplementation();
}

export function CreateVanityWallet(prefix = '', suffix = ''): VanityWalletGenerator {
    return new VanityWalletGenerator(prefix, suffix);
} 

export function CreateSolanaWallet(): SolanaWalletImplementation {
    return new SolanaWalletImplementation();
}
