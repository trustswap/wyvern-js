/*

  DELEGATECALL proxy contract.
  Primarily intended to enable easy atomic composition of future transactions (unknown at the time of proxy creation).
  Example: atomically deploying a new contract and changing ENS name resolution to point to it.
  Holds no state and does not capture call results.

*/

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "openzeppelin-solidity/contracts/access/Ownable.sol";

import "../common/TokenRecipient.sol";

/**
 * @title DelegateProxy
 * @author Project Wyvern Developers
 */
contract DelegateProxy is TokenRecipient, Ownable {

    /**
     * Execute a DELEGATECALL from the proxy contract
     *
     * @dev Owner only
     * @param dest Address to which the call will be sent
     * @param data Calldata to send
     * @return Result of the delegatecall (success or failure)
     */
    function delegateProxy(address dest, bytes calldata data)
        public
        onlyOwner
        returns (bool result)
    {
        return dest.delegatecall(data);
    }

    /**
     * Execute a DELEGATECALL and assert success
     *
     * @dev Same functionality as `delegateProxy`, just asserts the return value
     * @param dest Address to which the call will be sent
     * @param data Calldata to send
     */
    function delegateProxyAssert(address dest, bytes calldata data)
        public
    {
        require(delegateProxy(dest, data));
    }

}
