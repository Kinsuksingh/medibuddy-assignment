const IconsSection = ({ data }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
      {data.props.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-xl p-6 bg-white shadow-md text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-14 h-14 mx-auto mb-4"
          />
          <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-sm font-semibold text-gray-600 mb-1">
            {item.subTitle}
          </p>
          <p className="text-sm text-gray-500">{item.subText}</p>
        </div>
      ))}
    </div>
  );
};

export default IconsSection;
