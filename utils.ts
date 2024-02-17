import { prisma } from "./db.server";
import { ethers } from "ethers";
import { NodeRegistry__factory } from "./typechain-types";
import { NodeEntry, NodeStatus, NodeType } from "@prisma/client";

const batchSize = process.env.BATCH_SIZE ? Number(process.env.BATCH_SIZE) : 2000;
const requestDelay = process.env.REQUEST_DELAY ? Number(process.env.REQUEST_DELAY) : 0;

export const CHAIN_ID = Number(process.env.CHAIN_ID);
if (!CHAIN_ID) {
  throw new Error("No chain ID specified");
}

export type EASChainConfig = {
  chainId: number;
  chainName: string;
  version: string;
  contractAddress: string;
  etherscanURL: string;
  /** Must contain a trailing dot (unless mainnet). */
  subdomain: string;
  contractStartBlock: number;
  rpcProvider: string;
};


export const EAS_CHAIN_CONFIGS: EASChainConfig[] = [
  {
    chainId: 84532,
    chainName: "base-sepolia",
    subdomain: "base-sepolia.",
    version: "1.2.0",
    contractAddress: "0x56e3B524302Ec60Ec7850aF492D079367E03e5fb",
    contractStartBlock: 5789193,
    etherscanURL: "https://sepolia.basescan.org/",
    rpcProvider: `https://sepolia.base.org`,
  },
]

export const activeChainConfig = EAS_CHAIN_CONFIGS.find(
  (config) => config.chainId === CHAIN_ID
);

if (!activeChainConfig || !activeChainConfig.contractAddress) {
  throw new Error("No chain config found for chain ID");
}

export const provider = new ethers.JsonRpcProvider(
  activeChainConfig.rpcProvider,
  activeChainConfig.chainId
);


export const contractAddress = activeChainConfig.contractAddress;
export const CONTRACT_START_BLOCK = activeChainConfig.contractStartBlock;

// Timeout Promise
function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const nodeRegistry = NodeRegistry__factory.connect(activeChainConfig.contractAddress, provider);

function translateToNodeType(value: number): NodeType | undefined {
  const mapping: { [key: number]: NodeType } = {
      0: NodeType.PSN,
      1: NodeType.BSN,
      2: NodeType.GP
  };

  return mapping[value];
}

// Function to translate raw numeric values to NodeStatus enum strings
function translateToNodeStatus(value: number): keyof typeof NodeStatus | undefined {
  const mapping: { [key: number]: keyof typeof NodeStatus } = {
      0: 'INITIATED',
      1: 'VERIFIED',
      2: 'INVALID'
  };

  return mapping[value];
}


async function fetchAndParseRegisteredEvents(startBlock: number, endBlock: number): Promise<NodeEntry[]> {
  console.log(`Querying from ${startBlock} to ${endBlock}`); // Log the block range for confirmation

  const filter = nodeRegistry.filters.Registered();
  const events = await nodeRegistry.queryFilter(filter, startBlock, endBlock);

  if (events.length === 0) {
      console.log(`No events found in the specified range. ${startBlock}, ${endBlock}`);
      return [];
  }

  return events.map(event => {
      const { uid, name, callbackUrl, location, industryCode, owner, nodeType, status } = event.args[2];
      return {
          uid, name, callbackUrl, location, industryCode, owner,
          nodeType: translateToNodeType(Number(nodeType)) || 'PSN', 
          status: translateToNodeStatus(Number(status)) || 'INITIATED', // TODO: improve logic.
      };
  });
}


export async function getAndUpdateAllRelevantLogs() {
  const serviceStatPropertyName = "latestNodeEntryBlockNum";
  const { fromBlock } = await getStartData(serviceStatPropertyName);
  let currentBlock = fromBlock + 1;
  const latestBlock = await provider.getBlockNumber();

  console.error('latestBlock:',latestBlock);

  while (currentBlock <= latestBlock) {
    const toBlock = Math.min(currentBlock + batchSize - 1, latestBlock);

    const nodeEntries = await fetchAndParseRegisteredEvents(currentBlock, toBlock);

    for (const log of nodeEntries) {
      await processRegisteredNode(log);
      await timeout(requestDelay);
    }

    await updateServiceStatToLastBlock(false, serviceStatPropertyName, toBlock);
    currentBlock += batchSize;
    await timeout(requestDelay);
  }

  console.log("Finished updating all relevant logs.");
}

// Example processing function for 'Registered' logs
async function processRegisteredNode(log: NodeEntry) {
  // Decode log data (this requires knowing the data structure)
  console.log("Processing 'Registered' log:", JSON.stringify(log));

  // You'll need to adapt this part to match the data structure of your event
  // This includes decoding the log data and then updating the database
}

// Update or get service stat for block tracking
async function updateServiceStatToLastBlock(shouldCreate: boolean, propertyName: string, lastBlock: number) {
  // Similar to the previously defined function, adapted for the current logic
}

async function getStartData(serviceStatPropertyName: string) {
    const latestBlockNumServiceStat = await prisma.serviceStat.findFirst({
      where: { name: serviceStatPropertyName },
    });
  
    let fromBlock: number = CONTRACT_START_BLOCK;
  
    if (latestBlockNumServiceStat?.value) {
      fromBlock = Number(latestBlockNumServiceStat.value);
    }
  
    if (fromBlock === 0) {
      fromBlock = CONTRACT_START_BLOCK;
    }
  
    return { latestBlockNumServiceStat, fromBlock };
  }

// Utility functions remain largely unchanged but are focused on the new logic
