require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  networks: {
    matic_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/v1/7d644c71f25131937bc07e8b174a41babed728f9",
      accounts: [`0x${process.env.PK}`],
      network_id: 80001,       // Ropsten's id
      //gas: 8000000,        // Ropsten has a lower block limit than mainnet
      gasPrice: 5000000000,
      confirmations: 10,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 300,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
      timeout: 600000
    },
    matic_mainnet: {
      url: "https://matic-mainnet.chainstacklabs.com",
      accounts: [`0x${process.env.PK}`],
      network_id: 137,       // Ropsten's id
      //gas: 8000000,        // Ropsten has a lower block limit than mainnet
      //gasPrice: toWei('54', 'gwei'),
      confirmations: 1,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 300,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
      timeout: 600000
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY,
      accounts: [`0x${process.env.PK}`],
      network_id: 1,       
      //gas: 8000000,
      //gasPrice: toWei('54', 'gwei'),
      confirmations: 1,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 300,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
      timeout: 600000,
      hardfork: "london"
    }
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  mocha: {
    timeout: 600000
  }
};

