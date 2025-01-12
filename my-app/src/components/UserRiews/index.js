import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const UserReviews = ({ title, reviews }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="container mx-auto text-center max-w-4xl px-4">
      {/* Section Title */}
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
        {title}
      </h2>

      {/* Slider */}
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-md rounded-xl p-8 mx-0 hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {/* Rating */}
            <div className="text-yellow-500 text-2xl font-semibold mb-4">
              {'⭐'.repeat(review.rating)}
            </div>

            {/* Review Content */}
            <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
              "{review.content}"
            </p>

            {/* Reviewer Info */}
            <div className="mt-auto">
              <p className="text-gray-800 font-semibold text-lg">
                - {review.name}
              </p>
              <p className="text-gray-500 text-sm">{review.days} ago</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UserReviews;
