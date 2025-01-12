import React from "react";

const LifeStyleHealth = ({ data }) => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {data.props.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md w-44 text-center p-4 bg-white transform transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <img
              src="https://png.pngtree.com/png-clipart/20190617/original/pngtree-stethoscope-medical-equipment-medical-device-medical-device-png-image_3837080.jpg"
              alt={item.title}
              className="w-14 mb-3 mx-auto"
            />
            <p className="text-base font-medium text-gray-800">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeStyleHealth;
