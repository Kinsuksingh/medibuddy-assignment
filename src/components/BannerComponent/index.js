import React, { useState } from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Theme CSS
import { 
  FaHeartbeat, 
  FaStethoscope, 
  FaUserMd, 
  FaPills, 
  FaAmbulance, 
  FaProcedures, 
  FaBriefcaseMedical, 
  FaSyringe, 
  FaHospital, 
  FaCapsules 
} from "react-icons/fa"; // Healthcare-related icons

const BannerComponent = ({ props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomMessage, setRandomMessage] = useState("");
  const [randomIcon, setRandomIcon] = useState(null);
  const [randomTitle, setRandomTitle] = useState("");
  const [randomGradient, setRandomGradient] = useState("");
  const [clickCount, setClickCount] = useState(0); // Track number of clicks

  const activeBanners = props
    .filter((banner) => banner.isActive)
    .sort((a, b) => a.order - b.order); // Filter and sort banners

  const settings = {
    dots: false, // Enable dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Animation speed
    slidesToShow: 1, // Show one banner at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval
    arrows: false, // Hide navigation arrows
  };

  const randomMessages = [
    "Cardiology consultation available!",
    "General health checkup package!",
    "Expert pediatricians at your service!",
    "Emergency services 24/7!",
    "Comprehensive pharmacy support!",
    "World-class orthopedic care!",
    "Vaccination drive ongoing!",
    "Specialized cancer treatment services!",
    "Advanced diagnostic lab facilities!",
    "Round-the-clock ambulance service!",
  ];

  const randomIcons = [
    <FaHeartbeat size={60} className="mb-6 text-white bg-opacity-90" />,
    <FaStethoscope size={60} className="mb-6 text-white bg-opacity-90" />,
    <FaUserMd size={60} className="mb-6 text-white bg-opacity-90" />,
    <FaPills size={60} className="mb-6 text-white bg-opacity-90" />,
    <FaAmbulance size={60} className="mb-6 text-white bg-opacity-90" />,
    <FaProcedures size={60} className="mb-6 text-white bg-opacity-90" />,
    <FaBriefcaseMedical size={60} className="mb-6 text-white bg-opacity-90" />,
    <FaSyringe size={60} className="mb-6 text-white bg-opacity-90" />,
    <FaHospital size={60} className="mb-6 text-white bg-opacity-90" />,
    <FaCapsules size={60} className="mb-6 text-white bg-opacity-90" />,
  ];

  const randomTitles = [
    "Cardiology Consultation",
    "General Health Checkup",
    "Pediatric Care",
    "Emergency Services",
    "Pharmacy Support",
    "Orthopedic Care",
    "Vaccination Campaign",
    "Cancer Treatment Services",
    "Diagnostic Lab Facilities",
    "Ambulance Services",
  ];

  const randomGradients = [
    "bg-gradient-to-br from-blue-400 to-green-300",
    "bg-gradient-to-br from-green-400 to-blue-500",
    "bg-gradient-to-br from-lime-400 to-teal-500",
    "bg-gradient-to-br from-purple-500 to-indigo-500",
    "bg-gradient-to-br from-orange-400 to-yellow-500",
    "bg-gradient-to-br from-teal-400 to-cyan-500",
    "bg-gradient-to-br from-red-400 to-yellow-300",
    "bg-gradient-to-br from-purple-400 to-pink-300",
    "bg-gradient-to-br from-gray-400 to-gray-200",
    "bg-gradient-to-br from-pink-500 to-red-500",
  ];

  const handleBannerClick = () => {
    const currentIndex = clickCount % randomMessages.length; // Ensure looping
    setRandomMessage(randomMessages[currentIndex]);
    setRandomIcon(randomIcons[currentIndex]);
    setRandomTitle(randomTitles[currentIndex]);
    setRandomGradient(randomGradients[currentIndex]);

    setClickCount(prevCount => prevCount + 1); // Increment click count

    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-screen-md mx-auto p-4 rounded-lg overflow-hidden shadow-lg">
      <Slider {...settings}>
        {activeBanners.map((banner, index) => (
          <div
            onClick={handleBannerClick}
            className="block cursor-pointer"
            key={index}
          >
            <div className="relative">
              <img
                src={banner.bannerUrl}
                alt={`Banner ${index + 1}`}
                className="w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </Slider>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div
            className={`rounded-xl shadow-2xl max-w-md w-full p-8 relative text-white transition-transform transform scale-95 hover:scale-100 duration-200 ${randomGradient}`}
          >
            <div className="flex flex-col items-center">
              {randomIcon}
              <h2 className="text-3xl font-extrabold text-center mb-4 tracking-wide">
                {randomTitle}
              </h2>
              <p className="text-center text-lg tracking-normal leading-relaxed">
                {randomMessage}
              </p>
            </div>
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-gradient-to-r from-blue-100 via-teal-200 to-green-100 text-teal-700 font-semibold py-3 rounded-lg hover:opacity-95 transition-transform transform hover:scale-105 shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerComponent;
