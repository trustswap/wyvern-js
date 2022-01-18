/*
  
  Exchange contract. This is an outer contract with public or convenience functions and includes no state-modifying functions.
 
*/

// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./ExchangeCore.sol";

/**
 * @title Exchange
 * @author Project Wyvern Developers
 */
contract Exchange is ExchangeCore {

    function __Exchange_init(
    )
      internal
      onlyInitializing
    {
        __ExchangeCore_init();
        __Exchange_init_unchained();
    }

    function __Exchange_init_unchained()
        internal
        onlyInitializing
    {
    }
    /**
     * @dev Call guardedArrayReplace - library function exposed for testing.
     */
    function guardedArrayReplace(bytes memory array, bytes memory desired, bytes memory mask)
        public
        pure
        returns (bytes memory)
    {
        ArrayUtils.guardedArrayReplace(array, desired, mask);
        return array;
    }

    /**
     * Test copy byte array
     *
     * @param arrToCopy Array to copy
     * @return byte array
     */
    function testCopy(bytes memory arrToCopy)
        public
        pure
        returns (bytes memory)
    {
        bytes memory arr = new bytes(arrToCopy.length);
        uint index;
        assembly {
            index := add(arr, 0x20)
        }
        ArrayUtils.unsafeWriteBytes(index, arrToCopy);
        return arr;
    }

    /**
     * Test write address to bytes
     *
     * @param addr Address to write
     * @return byte array
     */
    function testCopyAddress(address addr)
        public
        pure
        returns (bytes memory)
    {
        bytes memory arr = new bytes(0x14);
        uint index;
        assembly {
            index := add(arr, 0x20)
        }
        ArrayUtils.unsafeWriteAddress(index, addr);
        return arr;
    }

    /**
     * @dev Call calculateFinalPrice - library function exposed for testing.
     */
    function calculateFinalPrice(SaleKindInterface.Side side, SaleKindInterface.SaleKind saleKind, uint basePrice, uint extra, uint listingTime, uint expirationTime)
        public
        view
        returns (uint)
    {
        return SaleKindInterface.calculateFinalPrice(side, saleKind, basePrice, extra, listingTime, expirationTime);
    }

    /**
     * @dev Return whether or not two orders' calldatas specifications can match
     * @param buyCalldata Buy-side order calldatas
     * @param buyReplacementPattern Buy-side order calldatas replacement mask
     * @param sellCalldata Sell-side order calldatas
     * @param sellReplacementPattern Sell-side order calldatas replacement mask
     * @return Whether the orders' calldatas can be matched
     */
    function orderCalldataCanMatch(bytes memory buyCalldata, bytes memory buyReplacementPattern, bytes memory sellCalldata, bytes memory sellReplacementPattern)
        public
        pure
        returns (bool)
    {
        if (buyReplacementPattern.length > 0) {
          ArrayUtils.guardedArrayReplace(buyCalldata, sellCalldata, buyReplacementPattern);
        }
        if (sellReplacementPattern.length > 0) {
          ArrayUtils.guardedArrayReplace(sellCalldata, buyCalldata, sellReplacementPattern);
        }
        return ArrayUtils.arrayEq(buyCalldata, sellCalldata);
    }

}
