/* global artifacts: false */

const WyvernExchange = artifacts.require('./WyvernExchange.sol')
const WyvernProxyRegistry = artifacts.require('./WyvernProxyRegistry.sol')
const WyvernTokenTransferProxy = artifacts.require('./WyvernTokenTransferProxy.sol')

const { setConfig } = require('./config.js')

module.exports = (deployer, network) => {
  if (network === 'development' || network === 'rinkeby' || network === 'coverage' || network === 'main') {
    return deployer.deploy(WyvernProxyRegistry)
      .then(() => {
        setConfig('deployed.' + network + '.WyvernProxyRegistry', WyvernProxyRegistry.address)
          return deployer.deploy(WyvernTokenTransferProxy, WyvernProxyRegistry.address).then(() => {
            setConfig('deployed.' + network + '.WyvernTokenTransferProxy', WyvernTokenTransferProxy.address)
            return deployer.deploy(WyvernExchange, 
                                    WyvernProxyRegistry.address, 
                                    WyvernTokenTransferProxy.address, 
                                    (network === 'development' || network === 'rinkeby' || network === 'coverage') ? '0xF77EC971b04cb13Ba20fCdE023Be3E7617A3eB8E' : '0xCC4304A31d09258b0029eA7FE63d032f52e44EFe', 
                                    (network === 'development' || network === 'rinkeby' || network === 'coverage') ? '0x71DFF38eDa9F7b90C45C5c009B131300E9bd7f6F' : 'PROTOCOL_FEE_MAINNET_ADDRESS',
                                    (network === 'development' || network === 'rinkeby' || network === 'coverage') ? '0xf90Da19051f25f29aC2B94570B8880207539D51E' : 'DEV_WALLET_MAINNET_ADDRESS'
                                  )
              .then(() => {
                setConfig('deployed.' + network + '.WyvernExchange', WyvernExchange.address)
                return WyvernProxyRegistry.deployed().then(proxyRegistry => {
                  return WyvernExchange.deployed().then(exchange => {
                    return proxyRegistry.grantInitialAuthentication(exchange.address)
                  })
                })
              })
          })
      })
  }
}
