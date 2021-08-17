pragma solidity 0.4.23;

interface IERC20Extended {
    function decimals() external view returns (uint8);
    function burnFrom(address account, uint256 amount) external;
}