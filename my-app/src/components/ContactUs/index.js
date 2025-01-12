import React, { useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        {/* Header Section */}
        <div className="flex items-center mb-6">
          <FaEnvelope className="text-indigo-600 text-4xl mr-4" />
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        </div>

        {/* Form Section */}
        <form>
          {/* Name Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <FaUserAlt className="text-gray-500 mr-3" />
              <input
                type="text"
                id="name"
                className="w-full outline-none"
                placeholder="Your Name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                id="email"
                className="w-full outline-none"
                placeholder="Your Email"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <div className="border border-gray-300 rounded-lg p-3">
              <textarea
                id="message"
                className="w-full outline-none resize-none"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Submit
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaPhone className="text-indigo-600 text-xl mr-4" />
              <span className="text-gray-700">+1 234 567 890</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-indigo-600 text-xl mr-4" />
              <span className="text-gray-700">support@medibuddy.com</span>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-indigo-600 text-xl mr-4" />
              <span className="text-gray-700">123 MediBuddy Street, Healthcare City</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
