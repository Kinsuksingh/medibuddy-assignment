import React from 'react'

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Health Checkup', price: 1200 },
    { id: 2, name: 'Blood Test', price: 800 },
    { id: 3, name: 'X-Ray', price: 500 },
  ]

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <li key={item.id} className="py-4 flex justify-between">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 border-t border-gray-200 pt-4 flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">₹{total}</span>
        </div>
        <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
