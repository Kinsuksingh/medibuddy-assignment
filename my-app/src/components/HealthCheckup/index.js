import React from 'react';

const HealthCheckup = ({ packages }) => {
  return (
    <div className="health-checkup-container p-4">
      <div
        className="flex space-x-6 p-6 overflow-x-auto scrollbar-hide"
        style={{ WebkitOverflowScrolling: 'touch' }}
        aria-label="Health Checkup Packages"
      >
        {packages.map((pkg, index) => (
          <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 bg-gradient-to-br from-blue-50 via-white to-gray-100 p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl relative transition-transform transform hover:scale-105"
        >
          {/* Sponsored Label */}
          {pkg.isSponsored && (
            <div
              className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl"
              aria-label="Sponsored Package"
            >
              Sponsored
            </div>
          )}
        
          {/* Package Title */}
          <h3 className="text-xl font-semibold text-gray-800 mb-4 truncate">
            {pkg.packageDisplayName || 'Unnamed Package'}
          </h3>
        
          {/* Reports Info */}
          <p className="text-blue-500 text-sm mb-4">
            📄 Reports in {pkg.reportTime || 'N/A'}
          </p>
        
          {/* Test Summary */}
          <div className="text-sm text-gray-700">
            <p className="mb-2">
              <strong>{pkg.testCount || 0} Tests</strong>
            </p>
            <ul className="list-disc pl-5 mb-2">
              {pkg.testsSummary.slice(0, 2).map((test, i) => (
                <li key={i}>{test}</li>
              ))}
              {pkg.testCount - pkg.testsSummary.length > 0 && (
                <li className="text-gray-500">
                  + {pkg.testCount - pkg.testsSummary.length} more
                </li>
              )}
            </ul>
            {pkg.isRadiologyIncluded && (
              <p className="flex items-center text-sm mb-2 text-blue-600">
                <span className="material-icons text-base mr-1">science</span>
                <strong>Includes:</strong> Radiology
              </p>
            )}
          </div>
        
          {/* Availability & Fasting Info */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-3 rounded-md mt-4 text-sm text-gray-700">
            <p>
              <strong>Fasting:</strong> {pkg.fastingHoursText || 'N/A'}
            </p>
            <p>
              <strong>Available:</strong>{' '}
              {pkg.isHomeSampleAvailable ? 'at Home' : 'at Center'}
            </p>
          </div>
        
          {/* Discount Section */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-700 font-medium">Discount:</span>
            <span className="text-xl font-bold text-green-600">
              {pkg.discount ? `${pkg.discount}%` : 'No Discount'}
            </span>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default HealthCheckup;
