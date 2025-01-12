import React from 'react';

const HealthCheckup = ({ packages }) => {
  return (
    <div className="health-checkup-container">
      <div
        className="flex space-x-4 p-4 overflow-x-auto"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none', 
        }}
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="min-w-[300px] flex-shrink-0 bg-white p-4 border rounded-lg shadow-lg relative"
          >
            {pkg.isSponsored && (
              <div className="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-bl">
                Sponsored
              </div>
            )}
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {pkg.packageDisplayName}
            </h3>
            <p className="text-blue-500 text-sm mb-4">
              📄 Reports in {pkg.reportTime || 'N/A'}
            </p>
            <div className="text-sm text-gray-700">
              <p className="mb-2">
                <strong>{pkg.testCount} Tests</strong>
              </p>
              <ul className="list-none pl-4 mb-2">
                {pkg.testsSummary.slice(0, 2).map((test, i) => (
                  <li key={i}>{test}</li>
                ))}
                {pkg.testCount - pkg.testsSummary.length > 0 && (
                  <li>+ {pkg.testCount - pkg.testsSummary.length} more</li>
                )}
              </ul>
              {pkg.isRadiologyIncluded && (
                <p className="flex items-center mb-2">
                  <span className="material-icons text-blue-500 mr-1">science</span>
                  <strong>Includes:</strong> Radiology
                </p>
              )}
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-2 rounded mt-4">
              <div className="text-sm">
                <p>
                  <strong>Fasting:</strong> {pkg.fastingHoursText}
                </p>
                <p>
                  <strong>Available:</strong>{' '}
                  {pkg.isHomeSampleAvailable ? 'at Home' : 'at Center'}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <strong>Discount:</strong>
              <span className="text-lg font-bold text-green-500">
                {pkg.discount}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthCheckup;
