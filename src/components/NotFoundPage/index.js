import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div style={{ height: '87.6vh' }} className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full sm:w-96 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">404</h2>
        <p className="text-lg text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
