/* global artifacts: false */

const WyvernAtomicizer = artifacts.require('./WyvernAtomicizer.sol')

const { setConfig } = require('./config.js')

module.exports = (deployer, network) => {
  if (network === 'main') return
  return deployer.deploy(WyvernAtomicizer)
        .then(() => {
          setConfig('deployed.' + network + '.WyvernAtomicizer', WyvernAtomicizer.address)
        })
}