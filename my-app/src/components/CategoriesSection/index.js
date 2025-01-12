import { useState, useEffect } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const CategoriesSection = ({ selectedCategory, filterFun, healthCheckUps }) => {
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default for large screens
  const [activeCategory, setActiveCategory] = useState(selectedCategory || "");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = Object.keys(healthCheckUps.categories || {});
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  // Update itemsPerPage based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerPage(2); // Mobile
      else if (width < 1024) setItemsPerPage(4); // Tablet
      else setItemsPerPage(5); // Laptop and above
    };

    // Initialize on mount and add resize listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get categories for the current page
  const currentCategories = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle category click
  const handleCategoryClick = (key) => {
    setActiveCategory(key);
    filterFun(healthCheckUps.categories[key]);
  };

  // Pagination Handlers
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="mb-12 px-4 md:px-8 lg:px-16">
      {/* Tabs Section */}
      <div className="border-b border-gray-300">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 justify-center">
          {currentCategories.map((key) => (
            <li
              key={key}
              className={`px-4 py-2 md:px-6 md:py-3 cursor-pointer font-medium rounded-t-lg transition-all duration-300 text-center ${
                activeCategory === key
                  ? "bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100 border-b-4 border-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100 hover:shadow-inner"
              }`}
              onClick={() => handleCategoryClick(key)}
              role="tab"
              aria-selected={activeCategory === key}
              aria-label={`Tab for ${healthCheckUps.categories[key]}`}
            >
              {healthCheckUps.categories[key]}
            </li>
          ))}
        </ul>
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-between items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          aria-label="Previous Page"
        >
          <FaAngleDoubleLeft />
        </button>

        {/* Page Indicator */}
        <div className="text-sm font-medium text-gray-700">
          <span aria-live="polite" aria-atomic="true" className="flex items-center gap-1">
            <span className="font-bold text-blue-600">{currentPage}</span>
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          aria-label="Next Page"
        >
          <FaAngleDoubleRight />
        </button>
      </div>

      {/* Content Section */}
      <div
        className="mt-6 p-6 rounded-lg shadow-lg"
        style={{ background: "linear-gradient(135deg, #f0faff, #e0f7fa)" }}
      >
        {activeCategory ? (
          <div className="text-center">
            <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
              Selected Category: {healthCheckUps.categories[activeCategory]}
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Explore our curated health packages under the selected category. Your wellness is our priority.
            </p>
          </div>
        ) : (
          <div className="text-center text-gray-600">
            <strong>Please select a category to explore health packages.</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesSection;
