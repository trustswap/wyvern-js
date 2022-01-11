/*

  << Project Wyvern Token Transfer Proxy >.

*/

// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "./registry/TokenTransferProxy.sol";

contract WyvernTokenTransferProxy is TokenTransferProxy {

    constructor (ProxyRegistry registryAddr)
    {
        registry = registryAddr;
    }

}
