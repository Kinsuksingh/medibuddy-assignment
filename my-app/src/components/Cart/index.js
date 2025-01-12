import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Full Body Health Checkup', price: 2500 },
    { id: 2, name: 'Complete Blood Count (CBC)', price: 900 },
    { id: 3, name: 'Chest X-Ray', price: 1500 },
    { id: 4, name: 'Diabetes Screening', price: 700 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-6 flex justify-center items-center"
    >
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Your Cart
        </h1>
        <ul className="divide-y divide-gray-300">
          {cartItems.map((item) => (
            <li key={item.id} className="py-4 flex justify-between items-center">
              <span className="text-gray-700 font-medium">{item.name}</span>
              <span className="text-gray-900 font-semibold">₹{item.price}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 border-t border-gray-300 pt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-800">Total</span>
          <span className="text-xl font-extrabold text-indigo-600">₹{total}</span>
        </div>
        <button className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-semibold py-3 rounded-lg hover:opacity-90 transition duration-200">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
