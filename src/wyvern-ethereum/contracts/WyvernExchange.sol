/*

  << Project Wyvern Exchange >>

*/

// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./exchange/Exchange.sol";

/**
 * @title WyvernExchange
 * @author Project Wyvern Developers
 */
contract WyvernExchange is Exchange {

    string public constant name = "Project Wyvern Exchange";

    string public constant version = "2.2";

    string public constant codename = "Lambton Worm";

    function initialize(
      ProxyRegistry registryAddress, 
      TokenTransferProxy tokenTransferProxyAddress, 
      ERC20Upgradeable tokenAddress, 
      address protocolFeeAddress, 
      address devWalletAddress
    )
      external
      virtual
      initializer
    {
        __Exchange_init();
        __WyvernExchange_init(registryAddress, tokenTransferProxyAddress, tokenAddress, protocolFeeAddress, devWalletAddress);
    }

    function __WyvernExchange_init(
      ProxyRegistry registryAddress, 
      TokenTransferProxy tokenTransferProxyAddress, 
      ERC20Upgradeable tokenAddress, 
      address protocolFeeAddress, 
      address devWalletAddress
    )
      internal
      onlyInitializing
    {
        __WyvernExchange_init_unchained(registryAddress, tokenTransferProxyAddress, tokenAddress, protocolFeeAddress, devWalletAddress);
    }

    function __WyvernExchange_init_unchained(
      ProxyRegistry registryAddress, 
      TokenTransferProxy tokenTransferProxyAddress, 
      ERC20Upgradeable tokenAddress, 
      address protocolFeeAddress, 
      address devWalletAddress
    )
      internal
      onlyInitializing
    {
      registry = registryAddress;
      tokenTransferProxy = tokenTransferProxyAddress;
      exchangeToken = tokenAddress;
      protocolFeeRecipient = protocolFeeAddress;
      devWallet = devWalletAddress;
    }

}
