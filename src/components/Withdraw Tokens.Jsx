import React from 'react';

const WithdrawTokens = ({ dexContract }) => {
  const handleWithdrawTokens = async () => {
    try {
      await dexContract.withdrawTokens();
      alert('Tokens withdrawn successfully!');
    } catch (error) {
      console.log(error);
      alert('Failed to withdraw tokens. Please try again.');
    }
  };

  return (
    <div>
      <h2>Withdraw Tokens</h2>
      <button onClick={handleWithdrawTokens}>Withdraw Tokens</button>
    </div>
  );
};

export default WithdrawTokens;