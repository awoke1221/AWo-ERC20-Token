import React from 'react';

const WithdrawFunds = ({ dexContract }) => {
  const handleWithdrawFunds = async () => {
    try {
      await dexContract.withdrawFunds();
      alert('Funds withdrawn successfully!');
    } catch (error) {
      console.log(error);
      alert('Failed to withdraw funds. Please try again.');
    }
  };

  return (
    <div>
      <h2>Withdraw Funds</h2>
      <button onClick={handleWithdrawFunds}>Withdraw Funds</button>
    </div>
  );
};

export default WithdrawFunds;