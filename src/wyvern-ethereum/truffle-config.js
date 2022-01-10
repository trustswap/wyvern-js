const HDWalletProvider = require("@truffle/hdwallet-provider");

require('dotenv').config()  // Store environment-specific variable from '.env' to process.env

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.PK, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY),
      port: 8545,
      network_id: "4",
      //gas: 7000000,
      //gasPrice: 40000000000,
      skipDryRun: true
    },
    main: {
      provider: () => new HDWalletProvider(process.env.PK, "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY),
      port: 8545,
      network_id: "1",
      gas: 6700000,
      gasPrice: 40000000000,
      confirmations: 2
    },
    main_fork: {
      host: "localhost",
      port: 8545,
      gas: 6700000,
      gasPrice: 54000000000,
      network_id: "*",
      skipDryRun: true
    },
    mumbai: {
      provider: () => new HDWalletProvider(process.env.PK, "https://rpc-mumbai.maticvigil.com"),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    matic: {
      provider: () => new HDWalletProvider(process.env.PK, "https://rpc-mainnet.maticvigil.com"),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
       version: "0.8.7",    // Fetch exact version from solc-bin (default: truffle's version)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  }
}
