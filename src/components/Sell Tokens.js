import React, { useState } from 'react';

const SellTokens = ({ dexContract, tokenPrice }) => {
  const [numTokens, setNumTokens] = useState('');

  const handleSellTokens = async () => {
    try {
      await dexContract.sell(numTokens);
      alert(`Successfully sold ${numTokens} Awoke tokens!`);
      setNumTokens('');
    } catch (error) {
      console.log(error);
      alert('Failed to sell tokens. Please try again.');
    }
  };

  return (
    <div>
      <h2>Sell Tokens</h2>
      <input
        type="number"
        placeholder="Number of Tokens"
        value={numTokens}
        onChange={(e) => setNumTokens(e.target.value)}
      />
      <button onClick={handleSellTokens}>Sell Tokens</button>
    </div>
  );
};

export default SellTokens;