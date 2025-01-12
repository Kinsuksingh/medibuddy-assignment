import { useState } from 'react';

const CategoriesSection = ({ healthCheckUps }) => {
  const itemsPerPage = 6; // Number of categories per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(Object.keys(healthCheckUps.categories).length / itemsPerPage);

  // Get categories for the current page
  const currentCategories = Object.keys(healthCheckUps.categories).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Pagination handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-700 mb-6">Categories</h3>
      <ul className="flex flex-wrap justify-center gap-6">
        {currentCategories.map((key) => (
          <li
            key={key}
            className="px-6 py-3 bg-white rounded-lg shadow-md text-gray-700 hover:shadow-lg hover:bg-gray-100 transition-all"
          >
            <span className="font-bold text-gray-800">{healthCheckUps.categories[key]}</span> 
          </li>
        ))}
      </ul>
      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center items-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg bg-gray-200 text-gray-700 ${
            currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-300'
          }`}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg bg-gray-200 text-gray-700 ${
            currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-300'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CategoriesSection;
