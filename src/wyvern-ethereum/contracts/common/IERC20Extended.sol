// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

interface IERC20Extended {
    function decimals() external view returns (uint8);
    function burnFrom(address account, uint256 amount) external;
}