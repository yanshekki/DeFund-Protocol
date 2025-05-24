// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FlowToken is ERC20 {
    address public owner;
    uint8 private tokenDecimals;

    constructor(string memory name, string memory symbol, address _owner, uint8 _decimals) 
        ERC20(name, symbol) 
    {
        require(_owner != address(0), "Owner cannot be zero address");
        owner = _owner;
        tokenDecimals = _decimals;
    }

    function decimals() public view override returns (uint8) {
        return tokenDecimals;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external onlyOwner {
        _burn(from, amount);
    }
}