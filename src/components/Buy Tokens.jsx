import React, { useState } from 'react';

const BuyTokens = ({ dexContract, tokenPrice }) => {
  const [numTokens, setNumTokens] = useState('');

  const handleBuyTokens = async () => {
    try {
      const priceToPay = numTokens * tokenPrice;
      await dexContract.buy(numTokens, { value: priceToPay });
      alert(`Successfully bought ${numTokens} Awoke tokens!`);
      setNumTokens('');
    } catch (error) {
      console.log(error);
      alert('Failed to buy tokens. Please try again.');
    }
  };

  return (
    <div>
      <h2>Buy Tokens</h2>
      <input
        type="number"
        placeholder="Number of Tokens"
        value={numTokens}
        onChange={(e) => setNumTokens(e.target.value)}
      />
      <button onClick={handleBuyTokens}>Buy Tokens</button>
    </div>
  );
};

export default BuyTokens;