import fetch, { Response }from 'node-fetch';
import axios from "axios";
import extraRpcs from "./extraRpcs";

const CHAIN_API: Record<string, string>[] = [
    { "chain_rpc": "https://chainid.network/chains.json" },
    { "chain_id": "https://api.llama.fi/chains" },
]

type ScoreStatus = "red" | "green" | "orange";

export type RpcData = {
  [key: string]: {
    rpcs: string[];
  };
};

export type ChainsData = {
  chain:    string;
  chainId:  number;
  rpc:      string[];
}

export interface ChainSortList {
    rpc:      string;
    height:   string;

    latency:  string; 
    score:    ScoreStatus;
}

// fetch url function
export const fetcher = <T>(...args: Parameters<typeof fetch>) => fetch(...args).then((res: Response) => res.json() as Promise<T>);

export const rpcBody = JSON.stringify({
  jsonrpc: "2.0",
  method: "eth_getBlockByNumber",
  params: ["latest", false],
  id: 1,
});

export const getChainList = (chainId: number, callback: (chainSort: ChainSortList) => void): void => {
  try {
    generateChainData().then(chains => {
      Object.entries(chains).forEach(([id, chain]) => {
        if (Number(id) === chainId) {
          if (chain.rpcs.length === 0) {
            throw new Error("cannot find the rpc");
          }
  
          chain.rpcs.forEach(async (rpc) => {
            const heightAndLatency = await getNodesHeightAndLatency(removeEndingSlash(rpc));
            const chainsSort: ChainSortList = {
              rpc: removeEndingSlash(rpc),
              height: parseInt(String(heightAndLatency[0]), 16).toString(),
              latency: formatResponseTime(heightAndLatency[1]),
              score: getRpcScore(heightAndLatency[0], heightAndLatency[1]),
            };
            callback(chainsSort);
          });
        }
      });
    }).catch(error => {
      throw error;
    });
  } catch (error) {
    throw new Error("fetch chains data failed");
  }
};

export const generateChainData = async (): Promise<RpcData> => {
  let allExtraRpcs: RpcData = extraRpcs;
  try {
    const chains = await fetcher<ChainsData[]>(CHAIN_API[0]['chain_rpc']);
    Object.entries(allExtraRpcs).forEach(([chainId, extraRpc]) => {
      if (extraRpc.rpcs.length === 0) {
        const matchingChain = chains.find((chain) => chain.chainId === Number(chainId));
        if (matchingChain) {
          allExtraRpcs[chainId].rpcs.push(...matchingChain.rpc);
        }
      }
    });
  } catch (error) {
    // TODO: Handle error
    throw error;
  }
  return allExtraRpcs;
};

export const getNodesHeightAndLatency = async (rpcURL: string): Promise<[number, number]> => {
    try {
        const API = axios.create({
            baseURL: rpcURL,
            headers: { "Content-Type": "application/json" },
        });

        let start: number;
        API.interceptors.request.use(function (request) {
            start = Date.now();
            return request;
        });

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let latency: number = 0;
        API.interceptors.response.use(
            (response) => {
                latency = Date.now() - start;
                return response;
            },
            (error) => {
                if (error.response) return Promise.reject(error);
            }
        );

        const { data } = await API.post("", rpcBody);
        return [data.result.number, latency];
    } catch (error) {
        return [0, 0];
    }
};

const getRpcScore = (height: number | null, latency: number | null): ScoreStatus => {
  if (!height || !latency) { 
    return "red"
  } else if (height && latency && latency < 300) { 
    return "green"
  } else { 
    return "orange" 
  }
}

const removeEndingSlash = (rpc: string): string => {
  return rpc.endsWith("/") ? rpc.substr(0, rpc.length - 1) : rpc;
}

const formatResponseTime = (latency: number): string => {
  // Convert the latency time from milliseconds to seconds
  const seconds = latency / 1000;
  // Keep three decimal places
  const formattedTime = seconds.toFixed(3); 
  return `${formattedTime}s`;
}
