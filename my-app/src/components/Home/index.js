import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMapPin } from 'react-icons/fi';
import './home.css';
import LabTestComponent from "../LabTestComponent";
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
  
  return (
    <>
    
    {
      loading ? (
        // Loader Component
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div> {/* Add CSS for the loader */}
        </div>
      ):

      (

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

      <section className="py-16 px-8 bg-gray-50">
        <div className="container mx-auto text-center">
          {/* Heading Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-extrabold text-gray-800">{healthCheckUps.heading}</h2>
            <Link
              to="/checkup"
              className="text-blue-600 font-medium hover:underline hover:text-blue-800"
            >
              View All
            </Link>
          </div>
      
          {/* Categories Section */}
          <CategoriesSection healthCheckUps={healthCheckUps} />

          {/* Health Checkup Packages */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <HealthCheckup packages={healthCheckUps.packages} />
          </div>
        </div>
      </section>


      {/* Your Active Bookings Section */}
      <section className="bg-gray-100 py-16 px-8">
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


      {/* Labs Visited Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold mb-4">Labs Visited</h2>
            <Link to="/labs" className="text-blue-500">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Apollo Diagnostics</h3>
              <p className="text-gray-600">Koramangala, Bangalore</p>
              <p className="text-gray-600">Rating: 4.5</p>
              <p className="text-gray-600">Next Slot: 07:30 AM, Tomorrow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Users Section */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Trusted by 20,00,000+ Users Every Month</h2>
          <UserReviews title={usersSay.title} reviews={usersSay.props} />
        </div>
      </section>
      



      {/* Lifestyle Health Checkup Packages Section */}
      <section className=" py-16 px-8">
        <div className="container mx-auto text-center">
          <LifeStyleHealth data={lifeStyleHealth} />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="container mx-auto text-center">
          <HealthCheck data={healthCheck} />
        </div>
      </section>

      {/* 100% Safe and Secure Lab Tests Section */}
      <section className=" py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">100% Safe and Secure Lab Tests</h2>
          <p className="text-gray-600 mb-5">Your health is our priority. We ensure the highest safety standards.</p>
          <IconsSection data={icons} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
            {faq.title}
          </h2>
          {faq.props.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md p-6 rounded-lg mb-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleExpand(item.id)}
              >
                <div className="flex items-center">
                  <img
                    src="https://th.bing.com/th/id/OIP.utU73Qb3DDESN2lpkJJ9EQHaEw?rs=1&pid=ImgDetMain"
                    alt="icon"
                    className="w-6 h-6 mr-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.question}
                  </h3>
                </div>
                <span className="text-gray-500 text-lg">
                  {item.isExpanded ? "▲" : "▼"}
                </span>
              </div>
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
                            <img
                              src="https://img.freepik.com/premium-vector/hospital-concept-with-people-scene-flat-cartoon-design-doctor-prepares-his-workplace_198565-6708.jpg"
                              alt="point icon"
                              className="w-15 h-10 mr-4"
                            />
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
      )




    }
    
    </>
  );
};

export default Home;
