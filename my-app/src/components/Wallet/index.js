import React from 'react'

const Wallet = () => {
  const walletBalance = 5000
  const transactions = [
    { id: 1, description: 'Added to Wallet', amount: 2000, date: '2025-01-01' },
    { id: 2, description: 'Payment for Health Checkup', amount: -1200, date: '2025-01-05' },
    { id: 3, description: 'Referral Bonus', amount: 1000, date: '2025-01-08' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Your Wallet</h1>
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Wallet Balance</h2>
          <div className="text-2xl font-bold text-green-600">₹{walletBalance}</div>
        </div>
        <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
        <ul className="divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="py-4 flex justify-between">
              <div>
                <p>{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <span
                className={`${
                  transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                ₹{transaction.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Wallet
