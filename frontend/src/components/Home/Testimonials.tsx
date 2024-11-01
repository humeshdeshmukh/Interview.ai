import React, { useEffect, useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import './testimonials.css'; // Ensure this file contains the relevant CSS

const testimonials = [
  {
    name: 'John Doe',
    position: 'Software Engineer',
    feedback:
      'Interviewmaster helped me prepare for my technical interviews. The AI chatbot simulated real scenarios, and I felt much more confident going into my interviews.',
  },
  {
    name: 'Jane Smith',
    position: 'Product Manager',
    feedback:
      'The resource library provided me with invaluable tips and strategies. I landed my dream job thanks to the mock interviews!',
  },
  {
    name: 'Alice Johnson',
    position: 'Data Scientist',
    feedback:
      'I loved the question database! It covered a wide range of topics, which helped me feel prepared for any question thrown my way.',
  },
  {
    name: 'Bob Williams',
    position: 'UX Designer',
    feedback:
      'The performance analytics were a game changer for me. I could easily track my progress and focus on areas that needed improvement.',
  },
];

const Testimonials: React.FC = () => {
  const testimonialRef = useRef<HTMLDivElement | null>(null);
  let currentIndex = 0;

  const moveToNextTestimonial = () => {
    if (testimonialRef.current) {
      currentIndex = (currentIndex + 1) % testimonials.length;
      testimonialRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  useEffect(() => {
    const interval = setInterval(moveToNextTestimonial, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10 bg-black text-white overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="relative max-w-6xl mx-auto">
        <div
          className="flex transition-transform duration-500"
          ref={testimonialRef}
          style={{ width: `${testimonials.length * 100}%` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-none bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-md mx-2"
            >
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="text-gray-400 text-3xl mr-2" />
                <p className="text-gray-300 italic">"{testimonial.feedback}"</p>
              </div>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-gray-400">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
