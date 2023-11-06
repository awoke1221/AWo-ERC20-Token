// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0 <0.9.0 ;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DEX {

    // creating a state varible for what token is in the sell, who can sell it and 
    //at what price can those tokens sell
    IERC20 public associatedtoken;

    address public owner;
    uint256 public price;
  // insde the constractor we need to know what token address is
  // in a sell and the price of the token 
    constructor (IERC20 _token, uint256 _price){
        associatedtoken = _token;
        owner = msg.sender;
        price = _price;
    }
    

    // creating a modifire only owner can do it like sell the token
    modifier onlyOwner {
        require(msg.sender==owner, "You are not the owner of this contract");
        _;
        
    }
    

    // creating a function to sell the tokens 
    function sell()  external  onlyOwner {
        uint256 allowance = associatedtoken.allowance(msg.sender, address(this));
        require(allowance > 0, "You must allow at list one token to acess this contract");
        bool sent = associatedtoken.transferFrom(msg.sender, address(this), allowance);

        require(sent, " failed to sent token to the contract");
    }
    

    // creating the function to withdrow the tokens from this contract to the address 
    function withddrowTokens() external onlyOwner{
        uint256 balance = associatedtoken.balanceOf(address(this));
        associatedtoken.transfer(msg.sender, balance);

    }
    

    // creating a function to withdrow the entaire balance from the contract address to the
    // contract owner address
    function withdrowFunds() external onlyOwner{
        (bool sent,) = payable(msg.sender).call{value: address(this).balance}("");
        require(sent);
    }

    // creating a function to get the price of the token to buy the token
    function getPrice(uint256 _numOfTokens) public view returns(uint256){
        return _numOfTokens*price;
    }

    // greating a function to buy a token
    function buy(uint256 _numOfTokens) external payable{
        require(_numOfTokens <= getTokenBalance(), "No enough of tokens");
        uint256 pricetoPay = getPrice(_numOfTokens);
        require(msg.value == pricetoPay, " no enough price to pay");
        
        associatedtoken.transfer(msg.sender, _numOfTokens);
    }

    // creating the function to get the balance of the address 
    function getTokenBalance() public view returns(uint256){
        return associatedtoken.balanceOf(address(this));
    }
}