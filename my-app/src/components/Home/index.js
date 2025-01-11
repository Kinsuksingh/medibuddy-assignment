import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMapPin } from 'react-icons/fi';
import axios from "axios";

const Home = () => {
  const [page_config, setPageConfig] = useState('');
  
  useEffect(() => {
    // Function to fetch data from API
    const url = "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config";
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setPageConfig(response.data[0].page_config);
        console.log("API Response:", response.data[0].page_config);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}

      <section className="bg-gray-500 text-white py-16 px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to MediBuddy</h1>
          <p className="text-lg mb-8">
            Your one-stop destination for managing your health and well-being.
          </p>
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Find lab tests, diagnostics centres"
              className="w-full sm:w-80 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              className="bg-indigo-600 px-4 py-2 rounded-r-lg text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <FiSearch />
            </button>
          </div>
          {/* Recent Location Section */}
          <div className="flex justify-center items-center text-lg text-gray-200">
            <FiMapPin className="mr-2" />
            <span> <strong>Billekahalli</strong> Saravabhoumanagar Billekahall...</span>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section id="features" className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Online Doctor Consultations</h3>
              <p>Consult with top doctors anytime, anywhere.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Order Medicines Online</h3>
              <p>Get medicines delivered to your doorstep with ease.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Health Checkups</h3>
              <p>Book health checkups and diagnostic tests online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-100 py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Take Charge of Your Health?</h2>
          <p className="mb-8">
            Sign up now and start your journey towards better health today.
          </p>
          <Link
            to="/signup"
            className="bg-blue-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-600"
          >
            Sign Up
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
