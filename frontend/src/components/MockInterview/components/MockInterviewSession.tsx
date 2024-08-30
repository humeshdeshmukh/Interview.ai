import React, { useState } from 'react';
import '../styles/MockInterviewSession.css'; // Import custom styling

interface Props {
  onComplete: () => void;
}

const MockInterviewSession: React.FC<Props> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [responses, setResponses] = useState<string[]>([]);

  const questions = [
    "What is your greatest strength?",
    "Describe a challenging situation you faced at work and how you handled it.",
    "Why do you want to work at this company?",
  ];

  const handleResponseChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestionIndex] = event.target.value;
    setResponses(updatedResponses);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div className="mock-interview-session">
      <h2>Interview Session</h2>
      <div className="question-container">
        <h3>Question {currentQuestionIndex + 1}</h3>
        <p>{questions[currentQuestionIndex]}</p>
        <textarea
          value={responses[currentQuestionIndex] || ''}
          onChange={handleResponseChange}
          placeholder="Type your response here..."
        />
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
          Next
        </button>
        <button onClick={onComplete} className="btn-complete">
          Complete Session
        </button>
      </div>
    </div>
  );
};

export default MockInterviewSession;
