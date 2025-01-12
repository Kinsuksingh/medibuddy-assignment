import React from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Theme CSS
import { Link } from "react-router-dom";

const BannerComponent = ({ props }) => {
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

  return (
    <div className="w-full max-w-screen-md mx-auto p-4 rounded-lg overflow-hidden shadow-lg">
      <Slider {...settings}>
        {activeBanners.map((banner, index) => (
          <Link
            to={banner.deeplink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            key={index}
          >
            <div className="relative">
              <img
                src={banner.bannerUrl}
                alt={`Banner ${index + 1}`}
                className="w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default BannerComponent;
