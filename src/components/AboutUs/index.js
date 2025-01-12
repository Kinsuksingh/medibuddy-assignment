import React, { useEffect } from "react";
import { FaHeartbeat, FaUserMd, FaHandHoldingHeart } from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl p-8">
        {/* Header Section */}
        <div className="flex items-center mb-8">
          <FaHeartbeat className="text-blue-500 text-5xl mr-4" />
          <h1 className="text-4xl font-extrabold text-gray-800">About Us</h1>
        </div>

        {/* Main Content */}
        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to <span className="font-bold text-blue-600">MediBuddy</span>, your trusted partner in healthcare services.
          We are dedicated to providing quality and accessible healthcare solutions to individuals and families worldwide.
          Our mission is to revolutionize the way people approach healthcare through cutting-edge technology, professional
          expertise, and compassionate care.
        </p>

        {/* Icon Sections */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <FaUserMd className="text-blue-500 text-6xl mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">Expert Professionals</h2>
            <p className="text-gray-600 text-sm mt-2">
              Our team of highly skilled medical professionals ensures you receive the best care possible.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaHandHoldingHeart className="text-blue-500 text-6xl mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">Compassionate Care</h2>
            <p className="text-gray-600 text-sm mt-2">
              We are committed to treating every patient with compassion and empathy.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaHeartbeat className="text-blue-500 text-6xl mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">Advanced Technology</h2>
            <p className="text-gray-600 text-sm mt-2">
              Leveraging cutting-edge technology for a seamless healthcare experience.
            </p>
          </div>
        </div>

        {/* Closing Section */}
        <p className="mt-8 text-gray-600 text-lg leading-relaxed">
          We are proud to serve millions of patients and work tirelessly to improve the healthcare experience for everyone.
          Join us in building a healthier, happier future!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
