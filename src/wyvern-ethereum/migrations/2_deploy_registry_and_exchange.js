/* global artifacts: false */

const WyvernExchange = artifacts.require('./WyvernExchange.sol')
const WyvernProxyRegistry = artifacts.require('./WyvernProxyRegistry.sol')
const WyvernTokenTransferProxy = artifacts.require('./WyvernTokenTransferProxy.sol')

const { setConfig } = require('./config.js')

module.exports = (deployer, network) => {
  if (network === 'development' || network === 'rinkeby' || network === 'coverage' || network === 'main') {
    return deployer.deploy(WyvernProxyRegistry)
      .then(() => {
        setConfig('deployed.' + network + '.WyvernProxyRegistry', WyvernProxyRegistry.address.toLowerCase())
          return deployer.deploy(WyvernTokenTransferProxy, WyvernProxyRegistry.address).then(() => {
            setConfig('deployed.' + network + '.WyvernTokenTransferProxy', WyvernTokenTransferProxy.address.toLowerCase())
            return deployer.deploy(WyvernExchange, 
                                    WyvernProxyRegistry.address, 
                                    WyvernTokenTransferProxy.address, 
                                    (network === 'development' || network === 'rinkeby' || network === 'coverage') ? '0xF77EC971b04cb13Ba20fCdE023Be3E7617A3eB8E' : '0xCC4304A31d09258b0029eA7FE63d032f52e44EFe', 
                                    (network === 'development' || network === 'rinkeby' || network === 'coverage') ? '0x71DFF38eDa9F7b90C45C5c009B131300E9bd7f6F' : '0x5869D1eE6D0917B786188547788566B25283Ff6B',
                                    (network === 'development' || network === 'rinkeby' || network === 'coverage') ? '0xf90Da19051f25f29aC2B94570B8880207539D51E' : '0x934fe588c9b6956162d7bccaea37c4924c85752f'
                                  )
              .then(() => {
                setConfig('deployed.' + network + '.WyvernExchange', WyvernExchange.address.toLowerCase())
                return WyvernProxyRegistry.deployed().then(proxyRegistry => {
                  return WyvernExchange.deployed().then(exchange => {
                    return proxyRegistry.grantInitialAuthentication(exchange.address)
                  })
                })
              })
          })
      })
  } else if (network === 'mumbai' || network === 'matic') {
      return deployer.deploy(WyvernProxyRegistry)
        .then(() => {
          setConfig('deployed.' + network + '.WyvernProxyRegistry', WyvernProxyRegistry.address.toLowerCase())
            return deployer.deploy(WyvernTokenTransferProxy, WyvernProxyRegistry.address).then(() => {
              setConfig('deployed.' + network + '.WyvernTokenTransferProxy', WyvernTokenTransferProxy.address.toLowerCase())
              return deployer.deploy(WyvernExchange, 
                                      WyvernProxyRegistry.address, 
                                      WyvernTokenTransferProxy.address, 
                                      (network === 'mumbai') ? '0xDf68aD003175883C97c10F37681613Dc6A9B278A' : '', 
                                      (network === 'mumbai') ? '0x71DFF38eDa9F7b90C45C5c009B131300E9bd7f6F' : '',
                                      (network === 'mumbai') ? '0xf90Da19051f25f29aC2B94570B8880207539D51E' : ''
                                    )
                .then(() => {
                  setConfig('deployed.' + network + '.WyvernExchange', WyvernExchange.address.toLowerCase())
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
