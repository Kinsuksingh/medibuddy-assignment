import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMapPin } from 'react-icons/fi';
import './home.css';
import LabTestComponent from "../LabTestComponent";
import BannerComponent from "../BannerComponent";
import HealthCheckup from "../HealthCheckup";

const Home = () => {
  const [labTestData, setlabTestData] = useState([])
  const [banners, serBanners] = useState([])
  const [healthCheckUps, setHealthCheckUps] = useState({id:'',heading:'',categories:{}, packages:[]})
  const [lifeStyleHealth, setLifeStyleHealth] = useState({id:'',title:'', props:[]})
  const [healthCheck, setHealthCheck] = useState({id:'', title:'', props:[]})
  const [icons, setIcons] = useState({id:'', props:[]})
  const [usersSay,setUsersSay] = useState({id:'',title:'',props:[]})
  const [faq, setFaq] = useState({id:'',title:'',props:[]})
  



  useEffect(() => {
    const url = "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setlabTestData(data[0].page_config[0].props)
        serBanners(data[0].page_config[1].props)
        setHealthCheckUps({
          id: data[0].page_config[2].id,
          heading: data[0].page_config[2].heading,
          categories: data[0].page_config[2].categories,
          packages: data[0].page_config[2].props[0].packages,
        })
        setLifeStyleHealth({
          id: data[0].page_config[3].id,
          title: data[0].page_config[3].title,
          props: data[0].page_config[3].props,
        })
        setHealthCheck({
          id: data[0].page_config[4].id,
          title: data[0].page_config[4].title,
          props: data[0].page_config[4].props,
        })

        setUsersSay({
          id: data[0].page_config[5].id,
          title: data[0].page_config[5].title,
          props: data[0].page_config[5].props,
        })

        setFaq({
          id: data[0].page_config[6].id,
          title: data[0].page_config[6].title,
          props: data[0].page_config[6].props,
        })

        setIcons({
          id: data[0].page_config[7].id,
          props: data[0].page_config[7].props,
        })

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
          <div className="flex justify-center items-center text-lg text-gray-200">
            <FiMapPin className="mr-2" />
            <span><strong>Billekahalli</strong> Saravabhoumanagar Billekahall...</span>
          </div>
        </div>
      </section>

      {/* Tests Section */}
      <section className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {labTestData.map((data, index) => (
          <LabTestComponent key={index} labTest={data} />
        ))}
      </div>
    </section>

      {/* Banners Section */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <BannerComponent props={banners} />
        </div>
      </section>

      {/* Featured Health Check-ups Section */}
      <section className="bg-blue-100 py-16 px-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold mb-4">{healthCheckUps.heading}</h2>
            <Link to="/checkup" className="text-blue-500">View All</Link>
          </div>
          <HealthCheckup packages={healthCheckUps.packages} />
        </div>
      </section>

      {/* Your Active Bookings Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Your Active Bookings</h2>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Mr. Suresh Gaikwad</h3>
            <Link to="/bookings" className="text-blue-500">View All</Link>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-gray-600">03 Nov 22 - 09:30-10:30AM</p>
            <p className="text-gray-600">3 Lab Tests</p>
            <p className="text-gray-600">Home Sample Collection</p>
          </div>
        </div>
      </section>

      {/* Book Popular Lab Tests Section */}
      <section className="bg-blue-100 py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Book Popular Lab Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Complete Blood Count (CBC)</h3>
              <p className="text-gray-600">Reports in 10-12 hrs</p>
              <p className="text-lg font-semibold">
                <span className="text-red-500">₹800</span> <span className="text-green-500">55% OFF</span>
              </p>
              <p className="text-gray-600">₹360 Onwards</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Add</button>
            </div>
          </div>
          <button className="mt-4 text-blue-500">View More</button>
        </div>
      </section>

      {/* Labs Visited Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Labs Visited</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Apollo Diagnostics</h3>
              <p className="text-gray-600">Koramangala, Bangalore</p>
              <p className="text-gray-600">Rating: 4.5</p>
              <p className="text-gray-600">Next Slot: 07:30 AM, Tomorrow</p>
            </div>
          </div>
          <button className="mt-4 text-blue-500">See All</button>
        </div>
      </section>

      {/* Trusted by Users Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Trusted by 20,00,000+ Users Every Month</h2>
          <div className="flex justify-around">
            <div>
              <h3 className="text-xl font-semibold">200+ Diagnostic Centres</h3>
            </div>
            <div>
              <h3 className="text-xl font-semibold">1200+ Lab Tests Offered</h3>
            </div>
            <div>
              <h3 className="text-xl font-semibold">1200+ Pincodes Covered</h3>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Users Say Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">What Our Users Say</h2>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-gray-600">"Good app and very helpful for customers."</p>
            <p className="text-gray-600">- Vikrant Kishore</p>
          </div>
        </div>
      </section>

      {/* Lifestyle Health Checkup Packages Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Lifestyle Health Check-up Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Basic Health Package</h3>
              <p className="text-gray-600">Ideal for routine check-ups</p>
              <p className="text-lg font-semibold text-green-500">₹999</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Book Now</button>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Advanced Health Package</h3>
              <p className="text-gray-600">Comprehensive tests for overall health</p>
              <p className="text-lg font-semibold text-green-500">₹1999</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Book Now</button>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Premium Health Package</h3>
              <p className="text-gray-600">Detailed tests for critical parameters</p>
              <p className="text-lg font-semibold text-green-500">₹2999</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Step 1</h3>
              <p className="text-gray-600">Select your test package</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Step 2</h3>
              <p className="text-gray-600">Schedule a convenient slot</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Step 3</h3>
              <p className="text-gray-600">Get tested and receive reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* 100% Safe and Secure Lab Tests Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">100% Safe and Secure Lab Tests</h2>
          <p className="text-gray-600">Your health is our priority. We ensure the highest safety standards.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="bg-white shadow-md p-6 rounded-lg mb-4">
            <h3 className="text-lg font-semibold">What is MediBuddy?</h3>
            <p className="text-gray-600">MediBuddy is a platform for booking lab tests and health check-ups.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg mb-4">
            <h3 className="text-lg font-semibold">How can I book a test?</h3>
            <p className="text-gray-600">Simply browse through the available tests, select one, and book it.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
