/*

  << Project Wyvern Atomicizer >>

  Execute multiple transactions, in order, atomically (if any fails, all revert).
  This contract MUST be DELEGATECALLed.

*/

// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

/**
 * @title WyvernAtomicizer
 * @author Project Wyvern Developers
 */
library WyvernAtomicizer {

    function atomicize (address[] calldata addrs, uint[] calldata values, uint[] calldata calldataLengths, bytes calldata calldatas)
        public
    {
        require(addrs.length == values.length && addrs.length == calldataLengths.length, "Addresses, calldata lengths, and values must match in quantity");

        uint j = 0;
        for (uint i = 0; i < addrs.length; i++) {
            bytes memory cd = new bytes(calldataLengths[i]);
            for (uint k = 0; k < calldataLengths[i]; k++) {
                cd[k] = calldatas[j];
                j++;
            }
            (bool success,) = addrs[i].call{value: values[i]}(cd);
            require(success, "Atomicizer subcall failed");
        }
    }

}
