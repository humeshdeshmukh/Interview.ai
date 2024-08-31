import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

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
const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMore />}>
      <Typography>{faq.question}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{faq.answer}</Typography>
    </AccordionDetails>
  </Accordion>
);

// FAQs component to render the list of FAQs
const FAQs: React.FC = () => (
  <div className="container mt-4">
    <h1 className="mb-4">Frequently Asked Questions</h1>
    {faqs.map((faq, index) => (
      <FAQItem key={index} faq={faq} />
    ))}
  </div>
);

export default FAQs;
