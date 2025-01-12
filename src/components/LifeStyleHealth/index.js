import React from "react";
import { FaStethoscope } from "react-icons/fa"; // Import a relevant icon

// Utility function to generate random light gradients
const getRandomGradient = () => {
  const gradients = [
    "bg-gradient-to-r from-blue-200 to-blue-400",     // Light blue gradient
    "bg-gradient-to-r from-green-200 to-green-400",   // Light green gradient
    "bg-gradient-to-r from-teal-200 to-teal-400",     // Light teal gradient
    "bg-gradient-to-r from-purple-200 to-purple-400", // Light purple gradient
    "bg-gradient-to-r from-cyan-200 to-cyan-400",     // Light cyan gradient
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};

const LifeStyleHealth = ({ data }) => {
  return (
    <div className="px-5 py-8">

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {data.props.map((item, index) => (
          <div
            key={index}
            className={`border border-gray-300 rounded-xl shadow-md w-40 text-center p-5 transform transition-transform duration-300 cursor-pointer hover:scale-105 hover:shadow-lg ${getRandomGradient()}`}
          >
            {/* Icon/Image */}
            {item.img ? (
              <img
                src={item.img}
                alt={item.label}
                className="w-14 h-14 mb-3 mx-auto"
              />
            ) : (
              <FaStethoscope className="w-14 h-14 mb-3 mx-auto text-gray-600" />
            )}
            {/* Label */}
            <p className="font-semibold text-gray-700 text-sm">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeStyleHealth;
