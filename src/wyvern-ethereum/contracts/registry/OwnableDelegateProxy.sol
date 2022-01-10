/*

  WyvernOwnableDelegateProxy

*/

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ProxyRegistry.sol";
import "./AuthenticatedProxy.sol";
import "./proxy/OwnedUpgradeabilityProxy.sol";

contract OwnableDelegateProxy is OwnedUpgradeabilityProxy {

    constructor(address owner, address initialImplementation, bytes memory calldatas)
        public
    {
        setUpgradeabilityOwner(owner);
        _upgradeTo(initialImplementation);
        require(initialImplementation.delegatecall(calldatas));
    }

}
