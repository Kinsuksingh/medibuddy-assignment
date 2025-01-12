const IconsSection = ({ data }) => {
    return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.props.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-5 shadow-sm text-center hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm font-bold text-gray-700 mb-1">{item.subTitle}</p>
              <p className="text-sm text-gray-600">{item.subText}</p>
            </div>
          ))}
        </div>
    );
  };
  
  export default IconsSection;