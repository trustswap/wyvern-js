/*

  << Test Token (for use with the Test DAO) >>

*/

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

/**
  * @title TestToken
  * @author Project Wyvern Developers
  */
contract TestToken is ERC20 {

    uint constant public decimals     = 18;
    string constant public name       = "Test Token";
    string constant public symbol     = "TST";

    uint constant public MINT_AMOUNT  = 20000000 * (10 ** decimals);

    /**
      * @dev Initialize the test token
      */
    constructor () public {
        super.ERC20(name, symbol);
        _mint(msg.sender, MINT_AMOUNT);
    }

}
