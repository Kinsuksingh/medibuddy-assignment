import React from "react";

const HealthCheck = ({ data }) => {
  return (
    <div className="px-5 py-8">

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {data.props.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl shadow-md w-40 text-center p-5 bg-white transform transition-transform duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
          >
            {/* Icon/Image */}
            <img
              src={item.img || "https://png.pngtree.com/png-clipart/20190617/original/pngtree-stethoscope-medical-equipment-medical-device-medical-device-png-image_3837080.jpg"}
              alt={item.label}
              className="w-14 h-14 mb-3 mx-auto"
            />
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

export default HealthCheck;
