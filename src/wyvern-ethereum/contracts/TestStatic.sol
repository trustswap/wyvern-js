/*

  << Test Static Calls >>

*/

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/**
  * @title TestStatic
  * @author Project Wyvern Developers
  */
contract TestStatic {

    /**
      * @dev Initialize contract
      */
    constructor () public {
    }

    function alwaysSucceed()
        public
        pure
    {
        require(true);
    }

    function alwaysFail()
        public
        pure
    {
        require(false);
    }

    function requireMinimumLength(bytes memory data)
        public
        pure
    {
        require(data.length > 2);
    }

}
