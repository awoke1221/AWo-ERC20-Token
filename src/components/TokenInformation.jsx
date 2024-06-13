import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const TokenInformation = ({ tokenContract }) => {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [totalSupply, setTotalSupply] = useState('');
  const [tokenBalance, setTokenBalance] = useState('');

  useEffect(() => {
    const fetchTokenInformation = async () => {
      try {
        const name = await tokenContract.name();
        const symbol = await tokenContract.symbol();
        const supply = await tokenContract.totalSupply();
        const balance = await tokenContract.balanceOf(ethers.provider.selectedAddress);

        setTokenName(name);
        setTokenSymbol(symbol);
        setTotalSupply(supply.toString());
        setTokenBalance(balance.toString());
      } catch (error) {
        console.log(error);
      }
    };

    fetchTokenInformation();
  }, [tokenContract]);

  return (
    <div>
      <h2>Token Information</h2>
      <p>Name: {tokenName}</p>
      <p>Symbol: {tokenSymbol}</p>
      <p>Total Supply: {totalSupply}</p>
      <p>Your Balance: {tokenBalance}</p>
    </div>
  );
};

export default TokenInformation;