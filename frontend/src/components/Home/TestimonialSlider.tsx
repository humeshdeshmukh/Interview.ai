import React from 'react';
import Slider from 'react-slick';
import './TestimonialSlider.css'; // Ensure you have modern styles in this file

const testimonials = [
  "This platform transformed my interview preparation. Highly recommended!",
  "Amazing resources and tools that made my job search so much easier.",
  "The resume builder is top-notch and helped me land my dream job.",
  "The interview practice tests were incredibly helpful in boosting my confidence.",
  "I love how easy it was to navigate the site and find exactly what I needed.",
  "The customer support team is fantastic. They helped me with all my queries promptly.",
  "I’ve tried other platforms, but this one is by far the best for interview preparation.",
  "The AI-driven tools are a game changer. They provide personalized feedback that really helps.",
  "The resources section is packed with valuable information that I didn’t find anywhere else.",
  "I’m so glad I found this site. It’s been an essential part of my job search strategy.",
  "The detailed interview questions and answers were spot on for my industry.",
  "The resume templates are modern and professional. I received compliments on my resume layout.",
  "The mock interview feature helped me prepare for tough interview questions.",
  "I’ve recommended this platform to all my friends who are job hunting.",
  "The step-by-step guidance through the resume builder was incredibly helpful.",
  "This site offers everything you need to prepare for interviews in one place.",
  "I was able to practice coding questions directly on the platform, which was very convenient.",
  "The tailored job recommendations based on my profile were a nice touch.",
  "I found the tips on how to answer behavioral interview questions particularly useful.",
  "This platform gave me the confidence I needed to succeed in my interviews.",
  "The feedback I received on my mock interviews was invaluable in improving my performance.",
  "I was impressed by the quality and variety of practice questions available.",
  "The ability to customize my resume for different jobs was a major plus.",
  "I felt well-prepared going into my interviews, thanks to the comprehensive resources provided.",
  "The user interface is sleek and intuitive, making the preparation process enjoyable.",
  "The in-depth analysis of my interview performance was extremely helpful.",
  "The mobile-friendly design allowed me to prepare on the go, which was a huge benefit.",
  "The practice tests mirrored real interview scenarios very accurately.",
  "I’ve never felt more prepared for interviews, and I owe it all to this platform.",
  "The site helped me understand what employers are really looking for in candidates.",
];

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="testimonial-slider">
      <h2 className="testimonial-heading">What Our Users Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <p className="testimonial-text">{testimonial}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
