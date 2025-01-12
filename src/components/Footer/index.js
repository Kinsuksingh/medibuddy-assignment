import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              MyApp is dedicated to providing top-quality services and ensuring a seamless experience for our users. Join us in building a better future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-blue-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-blue-500">
                <FiFacebook size={24} aria-label="Facebook" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-blue-500">
                <FiTwitter size={24} aria-label="Twitter" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-blue-500">
                <FiLinkedin size={24} aria-label="LinkedIn" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-blue-500">
                <FiInstagram size={24} aria-label="Instagram" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-blue-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
