/* global artifacts: false */

const WyvernExchange = artifacts.require('./WyvernExchange.sol')
const WyvernProxyRegistry = artifacts.require('./WyvernProxyRegistry.sol')
const WyvernTokenTransferProxy = artifacts.require('./WyvernTokenTransferProxy.sol')

const { setConfig } = require('./config.js')

const protocolFeeAddress = "0x5869D1eE6D0917B786188547788566B25283Ff6B"
const devWalletAddress = "0x934fe588c9b6956162d7bccaea37c4924c85752f"

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
                                    protocolFeeAddress,
                                    devWalletAddress
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
                                      (network === 'mumbai') ? '0xDf68aD003175883C97c10F37681613Dc6A9B278A' : '0x3809dcDd5dDe24B37AbE64A5a339784c3323c44F', 
                                      protocolFeeAddress,
                                      devWalletAddress
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
