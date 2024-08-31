import React, { useState } from 'react';
import './FAQs.css';  // Import the CSS for styling

// Define the FAQ interface
interface FAQ {
  question: string;
  answer: string;
}

// Sample FAQ data
const faqs: FAQ[] = [
  {
    question: 'What is the purpose of this website?',
    answer: 'This website helps users prepare for job interviews by providing mock interviews, practice tests, and resources to improve their interview skills.'
  },
  {
    question: 'How do I use the resume builder?',
    answer: 'To use the resume builder, go to the Resume Builder section from the menu and follow the prompts to create or edit your resume using the provided templates.'
  },
  {
    question: 'Can I schedule a mock interview?',
    answer: 'Yes, you can schedule a mock interview from the Mock Interview section. Choose the available slots and follow the instructions to book your session.'
  },
  {
    question: 'What resources are available?',
    answer: 'The Resources section includes various guides, tips, and articles related to job interviews and career development.'
  }
];

// FAQItem component to render individual FAQ items
const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the visibility of the answer

  // Function to toggle the visibility of the answer
  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAnswer}>
        <h3>{faq.question}</h3>
        <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
};

// FAQs component to render the list of FAQs
const FAQs: React.FC = () => (
  <div className="faqs-container">
    <h1>Frequently Asked Questions</h1>
    {faqs.map((faq, index) => (
      <FAQItem key={index} faq={faq} />
    ))}
  </div>
);

export default FAQs;
