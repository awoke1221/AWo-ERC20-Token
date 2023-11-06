import React, { useEffect, useState } from 'react';

const TokenBalance = ({ dexContract }) => {
  const [tokenBalance, setTokenBalance] = useState('');

  useEffect(() => {
    const fetchTokenBalance = async () => {
      try {
        const balance = await dexContract.getTokenBalance();
        setTokenBalance(balance.toString());
      } catch (error) {
        console.log(error);
      }
    };

    fetchTokenBalance();
  }, [dexContract]);

  return (
    <div>
      <h2>Token Balance</h2>
      <p>Your Token Balance: {tokenBalance}</p>
    </div>
  );
};

export default TokenBalance;