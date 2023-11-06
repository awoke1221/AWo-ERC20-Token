// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// importing openzeppelin contracts to use the ERC20 tokens satandard
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


// Creating the contract to create a token  called Awoke and symbole AWo
contract Awoke is  ERC20 {
    constructor(uint _intialSuply) ERC20("Awoke", "AWo"){

        // the intiall supply for this token is in the deployment 
        _mint(msg.sender, _intialSuply);
    }
}