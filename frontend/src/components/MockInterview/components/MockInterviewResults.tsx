import React from 'react';
import '../styles/MockInterviewResults.css'; // Import custom styling

// Example result data type
interface Result {
  question: string;
  userAnswer: string;
  feedback: string;
  score: number;
}

const MockInterviewResults: React.FC = () => {
  // Example data, replace with actual data from props or state
  const results: Result[] = [
    {
      question: 'What is the capital of France?',
      userAnswer: 'Paris',
      feedback: 'Correct answer!',
      score: 10
    },
    {
      question: 'Explain closures in JavaScript.',
      userAnswer: 'Closures are...',
      feedback: 'Good explanation, but could be more detailed.',
      score: 7
    }
  ];

  // Calculate total score
  const totalScore = results.reduce((acc, result) => acc + result.score, 0);

  return (
    <div className="mock-interview-results">
      <h2>Interview Results</h2>
      <div className="results-summary">
        <h3>Summary</h3>
        <p>Total Score: {totalScore}</p>
      </div>
      <div className="results-details">
        <h3>Details</h3>
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index} className="result-item">
                <h4>Question: {result.question}</h4>
                <p><strong>Your Answer:</strong> {result.userAnswer}</p>
                <p><strong>Feedback:</strong> {result.feedback}</p>
                <p><strong>Score:</strong> {result.score}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results available.</p>
        )}
      </div>
      <div className="action-buttons">
        <button className="btn btn-primary">Retry Interview</button>
        <button className="btn btn-secondary">Review Feedback</button>
      </div>
    </div>
  );
};

export default MockInterviewResults;
