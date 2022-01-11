/*

  Token transfer proxy. Uses the authentication table of a ProxyRegistry contract to grant ERC20 `transferFrom` access.
  This means that users only need to authorize the proxy contract once for all future protocol versions.

*/

// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

import "./ProxyRegistry.sol";
import "../common/IERC20Extended.sol";

contract TokenTransferProxy {

    /* Authentication registry. */
    ProxyRegistry public registry;

    /**
     * Call ERC20 `transferFrom`
     *
     * @dev Authenticated contract only
     * @param token ERC20 token address
     * @param from From address
     * @param to To address
     * @param amount Transfer amount
     */
    function transferFrom(address token, address from, address to, uint amount)
        public
        returns (bool)
    {
        require(registry.contracts(msg.sender));
        return ERC20(token).transferFrom(from, to, amount);
    }

    /**
     * Call ERC20 `burnFrom`
     *
     * @dev Authenticated contract only
     * @param token ERC20 token address
     * @param from From address
     * @param amount Burn amount
     */
    function burnFrom(address token, address from, uint amount)
        public
    {
        require(registry.contracts(msg.sender));
        IERC20Extended(token).burnFrom(from, amount);
    }

}
