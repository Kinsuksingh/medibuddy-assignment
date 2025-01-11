import React from "react";
import Slider from "react-slick"; // Import React Slick
import "./BannerComponent.css"; // Custom styles

const BannerComponent = ({ props }) => {
  const activeBanners = props
    .filter((banner) => banner.isActive)
    .sort((a, b) => a.order - b.order); // Filter and sort banners

  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Animation speed
    slidesToShow: 1, // Show one banner at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-scroll banners
    autoplaySpeed: 2000, // Auto-scroll interval
    arrows: false, // Show next/prev arrows
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller devices
        settings: {
          arrows: false, // Hide arrows on smaller screens
          dots: true, // Keep dots for navigation
        },
      },
    ],
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {activeBanners.map((banner, index) => (
          <div className="banner-item" key={index}>
            <a
              href={banner.deeplink}
              target="_blank"
              rel="noopener noreferrer"
              className="banner-link"
            >
              <img
                src={banner.bannerUrl}
                alt={`Banner ${index + 1}`}
                className="banner-image"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerComponent;
