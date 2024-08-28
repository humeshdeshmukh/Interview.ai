import React from 'react';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';
import './MockInterviewResults.css'; // Ensure you have corresponding CSS for styling

interface Result {
  question: string;
  score: number;
  feedback: string;
}

const MockInterviewResults: React.FC = () => {
  // Sample results data; you can replace this with real data from an API or state
  const results: Result[] = [
    { question: 'Question 1', score: 8, feedback: 'Good job! Your answer was concise and relevant.' },
    { question: 'Question 2', score: 6, feedback: 'You missed some key points. Review the topic again.' },
    { question: 'Question 3', score: 9, feedback: 'Excellent response. You covered all aspects comprehensively.' },
    // Add more results as needed
  ];

  const totalScore = results.reduce((acc, result) => acc + result.score, 0);
  const averageScore = totalScore / results.length;

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Mock Interview Results</h1>
      <Card>
        <Card.Header as="h5">Overall Performance</Card.Header>
        <Card.Body>
          <Card.Title>Total Score: {totalScore}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Average Score: {averageScore.toFixed(2)}</Card.Subtitle>
          <ListGroup variant="flush">
            {results.map((result, index) => (
              <ListGroup.Item key={index}>
                <h5>{result.question}</h5>
                <p>Score: {result.score}</p>
                <p>{result.feedback}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
      <div className="text-center mt-4">
        <Button variant="primary" href="/mock-interview">Retake Interview</Button>
      </div>
    </Container>
  );
};

export default MockInterviewResults;
