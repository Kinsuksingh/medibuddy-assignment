import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link 
              to="#"
              className="hover:text-blue-400"
              aria-label="Facebook"
            >
              Facebook
            </Link>
            <Link 
              to="#"
              className="hover:text-blue-400"
              aria-label="Twitter"
            >
              Twitter
            </Link>
            <Link 
              to="#"
              className="hover:text-blue-400"
              aria-label="LinkedIn"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
