import {
  HomeIcon,
  ShoppingCartIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling for better UX
    });
  };

  return (
    <header
      style={{ height: 'var(--header-height)' }}
      className="bg-white fixed top-0 w-full shadow-md z-50"
    >
      <nav
        aria-label="Global Navigation"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center -m-1.5 p-1.5">
            <span className="sr-only">MediBuddy</span>
            <img
              onClick={scrollToTop}
              src="https://www.medibuddy.in/assets/logos/medibuddyWithName.svg"
              alt="MediBuddy Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center space-x-6">
          {/* Home */}
          <Link
            onClick={scrollToTop}
            to="/"
            className="flex items-center space-x-2 text-gray-900 hover:text-indigo-600"
            aria-label="Home"
          >
            <HomeIcon className="h-6 w-6" />
            <span className="hidden md:inline text-sm font-medium">Home</span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center space-x-2 text-gray-900 hover:text-indigo-600"
            aria-label="Cart"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="hidden md:inline text-sm font-medium">Cart</span>
          </Link>

          {/* Wallet */}
          <Link
            to="/wallet"
            className="flex items-center space-x-2 text-gray-900 hover:text-indigo-600"
            aria-label="Wallet"
          >
            <WalletIcon className="h-6 w-6" />
            <span className="hidden md:inline text-sm font-medium">Wallet</span>
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="flex items-center space-x-2 text-gray-900 hover:text-indigo-600"
            aria-label="Login"
          >
            <FiLogIn className="h-6 w-6" />
            <span className="hidden md:inline text-sm font-medium">Login</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
