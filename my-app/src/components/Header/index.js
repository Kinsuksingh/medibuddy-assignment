import {
  HomeIcon,
  ShoppingCartIcon,
  WalletIcon,
} from '@heroicons/react/24/outline'
import { FiLogIn } from "react-icons/fi";
// Assuming you have the appropriate components for routing
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header style={{ height: "var(--header-height)" }} className="bg-white fixed top-0 w-full shadow-md z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Medi buddy</span>
            <img
              alt="MediBuddy Logo"
              src="https://www.medibuddy.in/assets/logos/medibuddyWithName.svg"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Menu for Mobile and Web */}
        <div className="flex lg:flex-1 justify-end space-x-4">
          {/* Home Icon */}
          <Link to="/" className="text-sm/6 font-semibold text-gray-900">
            <HomeIcon className="h-6 w-6 text-gray-600 hover:text-indigo-600" />
          </Link>
          
          {/* Cart Icon */}
          <Link to="/cart" className="text-sm/6 font-semibold text-gray-900">
            <ShoppingCartIcon className="h-6 w-6 text-gray-600 hover:text-indigo-600" />
          </Link>

          {/* Wallet Icon */}
          <Link to="/wallet" className="text-sm/6 font-semibold text-gray-900">
            <WalletIcon className="h-6 w-6 text-gray-600 hover:text-indigo-600" />
          </Link>

          {/* Login Icon */}
          <Link to="/login" className="text-sm/6 font-semibold text-gray-900">
            <FiLogIn className="h-6 w-6 text-gray-600 hover:text-indigo-600" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
