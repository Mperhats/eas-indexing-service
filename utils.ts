import { prisma } from "./db.server";
import { ethers } from "ethers";
import pLimit from "p-limit";

const batchSize = process.env.BATCH_SIZE ? Number(process.env.BATCH_SIZE) : 9500;
const requestDelay = process.env.REQUEST_DELAY ? Number(process.env.REQUEST_DELAY) : 0;
const limit = pLimit(5);

export const CHAIN_ID = Number(process.env.CHAIN_ID);
if (!CHAIN_ID) {
  throw new Error("No chain ID specified");
}

// Simplified chain config for Sepolia
export const activeChainConfig = {
  chainId: 11155111,
  chainName: "sepolia",
  contractAddress: "0xC2679fBD37d54388Ce493F1DB75320D236e1815e",
  rpcProvider: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
  contractStartBlock: 2958570,
};

export const provider = new ethers.providers.StaticJsonRpcProvider(
  activeChainConfig.rpcProvider,
  activeChainConfig.chainId
);

// Assuming you have already defined this based on your contract's event
export const registeredEventSignature = ethers.utils.id("Registered(bytes32,address)");
export const CONTRACT_START_BLOCK = activeChainConfig.contractStartBlock;

// Timeout Promise
function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getAndUpdateAllRelevantLogs() {
  const serviceStatPropertyName = "latestNodeEntryBlockNum";
  const { fromBlock } = await getStartData(serviceStatPropertyName);
  let currentBlock = fromBlock + 1;
  const latestBlock = await provider.getBlockNumber();

  while (currentBlock <= latestBlock) {
    const toBlock = Math.min(currentBlock + batchSize - 1, latestBlock);

    console.log(`Fetching 'Registered' events from block ${currentBlock} to ${toBlock}`);

    const registeredLogs = await provider.getLogs({
      fromBlock: currentBlock,
      toBlock,
      address: activeChainConfig.contractAddress,
      topics: [registeredEventSignature],
    });

    for (const log of registeredLogs) {
      await processRegisteredLog(log);
      await timeout(requestDelay);
    }

    await updateServiceStatToLastBlock(false, serviceStatPropertyName, toBlock);
    currentBlock += batchSize;
    await timeout(requestDelay);
  }

  console.log("Finished updating all relevant logs.");
}

// Example processing function for 'Registered' logs
async function processRegisteredLog(log: ethers.providers.Log) {
  // Decode log data (this requires knowing the data structure)
  console.log("Processing 'Registered' log:", log);

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
