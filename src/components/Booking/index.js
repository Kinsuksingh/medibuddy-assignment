import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUser, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Booking() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('User Details:', formData); // Log the form data
    alert('Booking submitted successfully! Check the console for details.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        {/* Back Button */}
        <Link to="/" className="text-blue-500 flex items-center mb-6 hover:text-blue-700 transition">
          <FaArrowLeft className="mr-2" />
          Back to Tests
        </Link>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Booking Details
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400 text-base" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400 text-base" />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <div className="relative">
              <FaPhoneAlt className="absolute left-3 top-3 text-gray-400 text-base" />
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-sm rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}
