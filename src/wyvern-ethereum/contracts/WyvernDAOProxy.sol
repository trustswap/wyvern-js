/*

  << Project Wyvern DAO Proxy >>

*/

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./dao/DelegateProxy.sol";

/**
 * @title WyvernDAOProxy
 * @author Project Wyvern Developers
 */
contract WyvernDAOProxy is DelegateProxy {

    constructor ()
        public
    {
        owner = msg.sender;
    }

}
