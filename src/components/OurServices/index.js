import React, { useEffect } from "react";
import { FaStethoscope, FaVial, FaMicroscope, FaPills, FaPhoneAlt } from "react-icons/fa";

const OurServices = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      id: 1,
      name: "General Consultation",
      description: "Expert consultations with our experienced doctors.",
      icon: <FaStethoscope className="text-blue-500 text-4xl mb-4" />,
    },
    {
      id: 2,
      name: "Health Checkups",
      description: "Comprehensive checkups tailored to your health needs.",
      icon: <FaVial className="text-green-500 text-4xl mb-4" />,
    },
    {
      id: 3,
      name: "Diagnostics",
      description: "Accurate lab tests including blood tests, X-rays, and more.",
      icon: <FaMicroscope className="text-purple-500 text-4xl mb-4" />,
    },
    {
      id: 4,
      name: "Pharmacy",
      description: "Seamless prescription and over-the-counter medicine delivery.",
      icon: <FaPills className="text-yellow-500 text-4xl mb-4" />,
    },
    {
      id: 5,
      name: "Telemedicine",
      description: "Access to medical advice anytime, anywhere.",
      icon: <FaPhoneAlt className="text-red-500 text-4xl mb-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl p-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            <span className="text-green-600">Our</span> Services
          </h1>
          <p className="text-gray-600 mt-2">Explore the wide range of services we offer to meet your healthcare needs.</p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
            >
              <div className="flex items-center justify-center">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4 text-center">{service.name}</h2>
              <p className="text-gray-600 mt-2 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
