import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const UserReviews = ({ title, reviews }) => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true,
    speed: 600,
    slidesToShow: 1, // Show one review at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Disable previous and next buttons
  };

  return (
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-xl font-bold text-gray-900 mb-8 tracking-wide">{title}</h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-200 shadow-lg rounded-xl p-8 mx-0 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex flex-col justify-between h-full">
                {/* Rating */}
                <span className="text-yellow-500 text-2xl font-semibold">
                  {'⭐'.repeat(review.rating)}
                  </span>

                {/* Content */}
                <p className="text-gray-700 italic text-lg leading-relaxed flex-grow mb-6">
                  "{review.content}"
                </p>

                {/* Reviewer Info */}
                <div>
                  <p className="text-gray-800 font-medium text-lg">
                    - {review.name}
                  </p>
                  <p className="text-gray-500 text-sm">{review.days} ago</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  );
};

export default UserReviews;
