import React from "react";

const HealthCheck = ({ data }) => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {data.props.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md w-36 text-center p-3 bg-white transform transition-transform duration-200 cursor-pointer hover:scale-105"
          >
            <img
              src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-vector-set-of-medical-devices-png-image_5424732.jpg"
              alt={item.label}
              className="w-12 mb-2 mx-auto"
            />
            <p className="font-bold">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthCheck;
