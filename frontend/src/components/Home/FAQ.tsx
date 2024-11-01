import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Grid, Typography } from '@mui/material';

const faqs = [
  {
    question: 'What is Interviewmaster?',
    answer: 'Interviewmaster is an online platform designed to help users prepare for job interviews through AI-powered tools, resources, and practice scenarios.',
  },
  {
    question: 'How does the AI chatbot work?',
    answer: 'The AI chatbot simulates real interview questions and provides instant feedback on your responses to help you improve.',
  },
  {
    question: 'Can I access resources for different job roles?',
    answer: 'Yes! Interviewmaster offers a comprehensive database of questions and resources tailored to various industries and job roles.',
  },
  {
    question: 'Is there a subscription fee?',
    answer: 'We offer both free and premium plans. The premium plan provides additional features and resources for more in-depth preparation.',
  },
  {
    question: 'How do I track my progress?',
    answer: 'You can create a user profile that allows you to track your practice sessions, saved questions, and performance analytics.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-10 bg-gradient-to-b from-white to-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex items-center justify-between p-4 focus:outline-none hover:bg-gray-200"
            >
              <Grid container>
                <Grid item xs={10}>
                  <Typography variant="h6" className="text-gray-800 font-semibold">{faq.question}</Typography>
                </Grid>
                <Grid item xs={2} className="flex justify-end">
                  {openIndex === index ? (
                    <AiOutlineMinus className="text-xl text-blue-500" />
                  ) : (
                    <AiOutlinePlus className="text-xl text-blue-500" />
                  )}
                </Grid>
              </Grid>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 bg-blue-50 transition-all duration-300 ease-in-out">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
