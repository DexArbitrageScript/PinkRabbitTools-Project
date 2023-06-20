import { ethers } from "ethers";

export interface gasPrices {
  slowGasGwei:      string;
  standardGasGwei:  string;
  fastGasGwei:      string;
}

// default provider rpc;
const httpProviders = {
  ////////////////////////
  // Eth
  '1':      new ethers.providers.JsonRpcProvider('https://eth.llamarpc.com'),

  ////////////////////////
  // Goerli
  '5':      new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth_goerli'),

  ////////////////////////
  // Bsc
  '56':     new ethers.providers.JsonRpcProvider('https://bsc-dataseed3.binance.org'),

  //////////////////////// 
  // Polygon
  '137':    new ethers.providers.JsonRpcProvider('https://polygon-rpc.com'),

  ////////////////////////
  // Arbitrum
  '42161':  new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/arbitrum'),

  ////////////////////////
  // Optimism
  '10':     new ethers.providers.JsonRpcProvider('https://mainnet.optimism.io/'),

  ////////////////////////
  // Zksync
  '324':    new ethers.providers.JsonRpcProvider('https://mainnet.era.zksync.io'),
}

// @ts-ignore
async function httpGetGasPrice(chainId: string): Promise<gasPrices> {
  try {
      const slow      =  await httpProviders[chainId].getGasPrice();
      const standard  =  await httpProviders[chainId].getGasPrice();
      const fast      =  await httpProviders[chainId].getGasPrice();

      const slowGwei = ethers.utils.formatUnits(slow, 'gwei');
      const standardGwei = ethers.utils.formatUnits(standard, 'gwei');
      const fastGwei = ethers.utils.formatUnits(fast, 'gwei');

      const prices: gasPrices = {
        slowGasGwei:      Math.floor(Number(slowGwei)).toString(),
        standardGasGwei:  Math.floor(Number(standardGwei)).toString(),
        fastGasGwei:      Math.floor(Number(fastGwei)).toString(),
      }
      return prices;
  } catch (error) {
    throw new Error("Failed to fetch the gasPrice data");
  }
}
