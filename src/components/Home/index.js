import React, { useEffect, useState } from "react";
import { FcFaq } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FiSearch, FiMapPin } from 'react-icons/fi';
import { FaHospitalUser } from "react-icons/fa";
import BannerComponent from "../BannerComponent";
import HealthCheckup from "../HealthCheckup";
import UserReviews from "../UserRiews";
import HealthCheck from "../HealthCheck";
import LifeStyleHealth from "../LifeStyleHealth";
import IconsSection from "../IconsSection";
import CategoriesSection from "../CategoriesSection";

const Home = () => {
  const [labTestData, setlabTestData] = useState([]);
  const [banners, setBanners] = useState([]);
  const [healthCheckUps, setHealthCheckUps] = useState({ id: '', heading: '', categories: [], packages: [] });
  const [lifeStyleHealth, setLifeStyleHealth] = useState({ id: '', title: '', props: [] });
  const [healthCheck, setHealthCheck] = useState({ id: '', title: '', props: [] });
  const [icons, setIcons] = useState({ id: '', props: [] });
  const [usersSay, setUsersSay] = useState({ id: '', title: '', props: [] });
  const [faq, setFaq] = useState({ id: '', title: '', props: [] });
  const [loading, setLoading] = useState(true); // Loader state
  const [selectedCategory, setCategory] = useState('')
  const [filterPkg, setFilterPkg] = useState([])


  useEffect(() => {
    const url = "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setlabTestData(data[0].page_config[0].props);
        setBanners(data[0].page_config[1].props);
        setHealthCheckUps({
          id: data[0].page_config[2].id,
          heading: data[0].page_config[2].heading,
          categories: data[0].page_config[2].categories["10386"],
          packages: data[0].page_config[2].props[0].packages,
        });
        setFilterPkg(data[0].page_config[2].props[0].packages)
        setLifeStyleHealth({
          id: data[0].page_config[3].id,
          title: data[0].page_config[3].title,
          props: data[0].page_config[3].props,
        });
        setHealthCheck({
          id: data[0].page_config[4].id,
          title: data[0].page_config[4].title,
          props: data[0].page_config[4].props,
        });
        setUsersSay({
          id: data[0].page_config[5].id,
          title: data[0].page_config[5].title,
          props: data[0].page_config[5].props,
        });
        setFaq({
          id: data[0].page_config[6].id,
          title: data[0].page_config[6].title,
          props: data[0].page_config[6].props,
        });
        setIcons({
          id: data[0].page_config[7].id,
          props: data[0].page_config[7].props,
        });
      } catch (err) {
        console.error("Error fetching data:", err.message);
      } finally {
        setLoading(false); // Stop the loader after fetching the data
      }
    };
    fetchData();
  }, []);

  const toggleExpand = (id) => {
    setFaq((prev) => ({
      ...prev,
      props: prev.props.map((item) =>
        item.id === id ? { ...item, isExpanded: !item.isExpanded } : item
      ),
    }));
  };
  
  const filterPackageByCategory = (selectedCategory) => {
    if (!selectedCategory) {
      setFilterPkg(healthCheckUps.packages); // Show all packages if no category selected
    } else {
      const filtered = healthCheckUps.packages.filter((pkg) =>
        pkg.subCategories.includes(selectedCategory.toUpperCase())
      );
      setFilterPkg(filtered);
    }
    setCategory(selectedCategory); // Update the selected category state
  };

  return (
  <>
    {loading ? (
    // Loader Component
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-t-blue-500 border-blue-200 rounded-full animate-spin"></div>
      </div>
    </div>
    
    ):
    (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 via-teal-100 to-blue-200 text-gray-800 py-16 px-6 sm:px-8">
        <div className="container mx-auto text-center">
          {/* Header Section */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-blue-900">
            Welcome to MediBuddy
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-700">
            Your trusted companion for managing your health and well-being.
          </p>
      
          {/* Search Bar */}
          <div className="flex flex-wrap justify-center mb-8 gap-4">
            <div className="flex w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search for lab tests, diagnostic centers"
                className="w-full sm:w-96 px-4 py-3 rounded-l-lg text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-label="Search for lab tests or diagnostic centers"
              />
              <button
                type="button"
                className="bg-teal-500 px-6 py-3 rounded-r-lg text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-label="Search"
              >
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
          </div>
      
          {/* Location Info */}
          <div className="flex justify-center items-center text-lg text-gray-600 space-x-2">
            <FiMapPin className="text-teal-500 w-5 h-5" />
            <span className="truncate max-w-xs sm:max-w-md">
              <strong>Billekahalli</strong>, Saravabhoumanagar, Billekahalli...
            </span>
          </div>
        </div>
      </section>
      
      
      
      
      {/* Tests Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-gray-200">
        <div className="container mx-auto max-w-7xl">
          {/* Section Title */}
          <div className="text-center sm:text-left mb-10">
            <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              Explore Our Lab Tests
            </h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto sm:mx-0">
              Discover a range of lab tests designed to address your health and wellness needs with precision and care.
            </p>
          </div>
      
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {labTestData.map((data, index) => {
              const {
                iconText,
                iconTag,
                iconUrl,
                order,
                isActive,
                eventName,
                serviceName,
                serviceType,
                checkForCorporates,
                enabledCorporates,
                disabledCorporates,
              } = data;
      
              return (
                <div
                  key={index}
                  className={`p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105 ${
                    isActive ? "border-l-4 border-blue-500" : "opacity-90"
                  }`}
                >
                  {/* Header Section */}
                  <div className="flex items-center mb-4">
                    <img
                      src={iconUrl}
                      alt={iconText}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{iconText}</h3>
                      {iconTag && (
                        <span className="text-sm text-blue-500 font-medium">
                          {iconTag}
                        </span>
                      )}
                    </div>
                  </div>
      
                  {/* Details Section */}
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>
                      <strong>Service Name:</strong> {serviceName}
                    </p>
                    <p>
                      <strong>Service Type:</strong> {serviceType}
                    </p>
                    <p>
                      <strong>Order:</strong> {order}
                    </p>
                    <p>
                      <strong>Event Name:</strong> {eventName}
                    </p>
                  </div>
      
                  {/* Action Button */}
                  <Link
                    to="/booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
                  >
                    Book Now
                  </Link>
      
                  {/* Corporate Info */}
                  {checkForCorporates && (
                    <div className="mt-4 text-sm text-gray-600">
                      <p>
                        <strong>Enabled Corporates:</strong>{" "}
                        {enabledCorporates.length
                          ? enabledCorporates.join(", ")
                          : "None listed"}
                      </p>
                      <p>
                        <strong>Disabled Corporates:</strong>{" "}
                        {disabledCorporates.length
                          ? disabledCorporates.join(", ")
                          : "None listed"}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      
      
      
      {/* Banners Section */}
      <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Render BannerComponent */}
          <BannerComponent props={banners} />
        </div>
      </section>
      
      
      
      
      {/* Featured Health Check-ups Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="container mx-auto">
          {/* Heading Section */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-800 tracking-wide">
              {healthCheckUps.heading}
            </h2>
            <Link
              to="/checkup"
              className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-colors"
            >
              View All
            </Link>
          </div>
      
          {/* Categories Section */}
          <div className="mb-8">
            <CategoriesSection
              selectedCategory={selectedCategory}
              filterFun={filterPackageByCategory}
              healthCheckUps={healthCheckUps}
            />
          </div>
      
          {/* Health Checkup Packages */}
          <div>
            {filterPkg && filterPkg.length > 0 ? (
              <HealthCheckup packages={filterPkg} />
            ) : (
              <div className="text-center py-10">
                <img
                  src="https://img.icons8.com/ios/100/empty-box.png"
                  alt="No packages available"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <p className="text-lg text-gray-700 font-medium">
                  No packages available
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      
      
      {/* Your Active Bookings Section */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-extrabold text-gray-800">Your Active Bookings</h2>
            <Link 
              to="/bookings" 
              className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              View All
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-blue-500">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Mr. Suresh Gaikwad</h3>
                <p className="text-gray-500 text-sm">Active Booking Details</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm">03 Nov 22</p>
                <p className="text-gray-500 text-sm">09:30-10:30 AM</p>
              </div>
            </div>
            <div className="mt-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500 text-lg">•</span>
                  <span className="text-gray-700">3 Lab Tests</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500 text-lg">•</span>
                  <span className="text-gray-700">Home Sample Collection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      
      
      {/* Labs Visited Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-800">Labs Visited</h2>
            <Link 
              to="/labs" 
              className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lab Card */}
            <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Apollo Diagnostics</h3>
              <p className="text-gray-500 mb-2">
                <span className="font-semibold text-gray-700">Location:</span> Koramangala, Bangalore
              </p>
              <p className="text-gray-500 mb-2">
                <span className="font-semibold text-gray-700">Rating:</span> 4.5
              </p>
              <p className="text-gray-500">
                <span className="font-semibold text-gray-700">Next Slot:</span> 07:30 AM, Tomorrow
              </p>
            </div>
            {/* Add more lab cards below */}
            <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">PathCare Labs</h3>
              <p className="text-gray-500 mb-2">
                <span className="font-semibold text-gray-700">Location:</span> Indiranagar, Bangalore
              </p>
              <p className="text-gray-500 mb-2">
                <span className="font-semibold text-gray-700">Rating:</span> 4.7
              </p>
              <p className="text-gray-500">
                <span className="font-semibold text-gray-700">Next Slot:</span> 10:00 AM, Tomorrow
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thyrocare</h3>
              <p className="text-gray-500 mb-2">
                <span className="font-semibold text-gray-700">Location:</span> Whitefield, Bangalore
              </p>
              <p className="text-gray-500 mb-2">
                <span className="font-semibold text-gray-700">Rating:</span> 4.8
              </p>
              <p className="text-gray-500">
                <span className="font-semibold text-gray-700">Next Slot:</span> 09:00 AM, Tomorrow
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Trusted by Users Section */}
      <section className="bg-gradient-to-r from-blue-50 via-gray-50 to-blue-50 py-16 px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            Trusted by <span className="text-blue-600">2,000,000+</span> Users Every Month
          </h2>
          <p className="text-gray-600 mb-8">
            Join millions of happy customers who trust our services for their health needs.
          </p>
          <div className="bg-white shadow-lg rounded-xl p-8">
            <UserReviews title={usersSay.title} reviews={usersSay.props} />
          </div>
        </div>
      </section>
      
      
      
      
      {/* Lifestyle Health Checkup Packages Section */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="container mx-auto max-w-6xl text-center">
          {/* Section Header */}
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">{lifeStyleHealth.title}</h2>
          <p className="text-gray-600 mb-10">
            Stay proactive about your health with our comprehensive and affordable packages designed to meet your lifestyle needs.
          </p>
          {/* Health Packages Component */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <LifeStyleHealth data={lifeStyleHealth} />
          </div>
        </div>
      </section>
      
      
      {/* How It Works Section */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-8">
        <div className="container mx-auto max-w-6xl text-center">
          {/* Section Header */}
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            {healthCheck.title}
          </h2>
          {/* Steps Component */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <HealthCheck data={healthCheck} />
          </div>
        </div>
      </section>
      
      
      {/* 100% Safe and Secure Lab Tests Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16 px-8">
        <div className="container mx-auto max-w-6xl text-center">
          {/* Section Header */}
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            100% Safe and Secure Lab Tests
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Your health is our priority. We adhere to the highest safety and hygiene standards to ensure your peace of mind.
          </p>
          {/* Icons Section */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <IconsSection data={icons} />
          </div>
        </div>
      </section>
      
      
      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Section Header */}
          <h2 className="text-3xl font-extrabold mb-10 text-center text-gray-800">
            {faq.title}
          </h2>
      
          {/* FAQ Items */}
          {faq.props.map((item) => (
            <div
              key={item.id}
              className={`bg-white shadow-md p-6 rounded-lg mb-6 transition-all duration-300 ${
                item.isExpanded ? "shadow-lg border-l-4 border-blue-500" : "hover:shadow-lg"
              }`}
            >
              {/* Question Header */}
              <button
                className="flex items-center justify-between w-full text-left cursor-pointer focus:outline-none"
                onClick={() => toggleExpand(item.id)}
                aria-expanded={item.isExpanded}
              >
                <div className="flex items-center">
                  <FcFaq className="w-8 h-8 mr-4" />
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.question}
                  </h3>
                </div>
                <span className="text-gray-500 text-4xl">
                  {item.isExpanded ? "-" : "+"}
                </span>
              </button>
      
              {/* Answer and Points */}
              {item.isExpanded && (
                <div className="mt-4">
                  {item.answer && (
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                  {item.points.length > 0 && (
                    <ul className="list-disc pl-8">
                      {item.points.map((point, index) => (
                        <li key={index} className="flex items-start mb-2">
                          {point.img && (
                            <FaHospitalUser className="w-10 h-10 mr-4 rounded-md" />
                          )}
                          <p className="text-gray-600 text-sm">
                            {point.pnt}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      
    </div>
  )}
  </>
)}

export default Home;
