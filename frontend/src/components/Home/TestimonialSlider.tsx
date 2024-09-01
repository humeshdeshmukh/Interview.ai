import React from 'react';
import Slider from 'react-slick';
import './TestimonialSlider.css'; // Ensure you have modern styles in this file

const testimonials = [
  "This platform transformed my interview preparation. Highly recommended!",
  "Amazing resources and tools that made my job search so much easier.",
  "The resume builder is top-notch and helped me land my dream job.",
];

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <p>{testimonial}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
