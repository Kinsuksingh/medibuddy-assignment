import React from 'react';

const Wallet = () => {
  const walletBalance = 5000;
  const transactions = [
    { id: 1, description: 'Added to Wallet', amount: 2000, date: '2025-01-01' },
    { id: 2, description: 'Payment for Health Checkup', amount: -1200, date: '2025-01-05' },
    { id: 3, description: 'Referral Bonus', amount: 1000, date: '2025-01-08' },
    { id: 4, description: 'Medicine Purchase', amount: -500, date: '2025-01-10' },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-6 flex justify-center items-center"
    >
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Your Wallet
        </h1>

        {/* Wallet Balance */}
        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-lg font-medium">Wallet Balance</h2>
          <div className="text-3xl font-bold mt-2">₹{walletBalance}</div>
        </div>

        {/* Recent Transactions */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
        <ul className="divide-y divide-gray-300">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="py-4 flex justify-between items-center"
            >
              <div>
                <p className="text-gray-700 font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <span
                className={`text-lg font-semibold ${
                  transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {transaction.amount > 0 ? `+₹${transaction.amount}` : `-₹${Math.abs(transaction.amount)}`}
              </span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:opacity-90 transition duration-200"
        >
          Add Funds
        </button>
      </div>
    </div>
  );
};

export default Wallet;
