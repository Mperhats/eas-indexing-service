import { ethers } from 'ethers'
// Set up provider (using Sepolia as an example)
const provider = new ethers.providers.JsonRpcProvider('https://sepolia.base.org');

// Contract details
const contractAddress = '0x56e3B524302Ec60Ec7850aF492D079367E03e5fb';

// Create a contract instance

async function getRegisteredEvents(startBlock: number, endBlock: number, batchSize = 1000) {
    let currentBlock = startBlock;

    while (currentBlock <= endBlock) {
        const toBlock = Math.min(currentBlock + batchSize - 1, endBlock);

        try {
            console.log(`Fetching 'Registered' events from block ${currentBlock} to ${toBlock}`);
            const registeredLogs = await provider.getLogs({
                fromBlock: currentBlock,
                toBlock,
                address: contractAddress,
                topics: [ethers.utils.id("Registered(bytes32,address,tuple)")],
            });

            console.log('Registered logs', registeredLogs.length);

            // Process each registered log
            registeredLogs.forEach((log: any) => {
                // Your logic to handle log here
                console.log(log);
            });

            currentBlock += batchSize + 1; // Move to the next batch
        } catch (error) {
            console.error('Error fetching logs:', error);
            break; // Exit loop on error
        }
    }
}

async function main() {

    // Adjust these values based on your needs
    const startBlock = 5789193; // Block at which the contract was deployed
    const latestBlock = 5798192; //await provider.getBlockNumber(); // Dynamically fetch the latest block number

    getRegisteredEvents(startBlock, latestBlock).catch(console.error);

}


main()
