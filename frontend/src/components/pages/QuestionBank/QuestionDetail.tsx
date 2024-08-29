import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
// import './QuestionDetail.css'; // Import custom styles if needed

interface QuestionDetailProps {
  question: {
    id: string;
    text: string;
    category: string;
    difficulty: string;
    notes?: string;
    solution?: string;
  };
  onBack: () => void; // Function to handle going back to the previous page or view
}

const QuestionDetail: React.FC<QuestionDetailProps> = ({ question, onBack }) => {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Header as="h3" className="text-center">
          Question Detail
        </Card.Header>
        <Card.Body>
          <Card.Title>{question.text}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <strong>Category:</strong> {question.category}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            <strong>Difficulty:</strong> {question.difficulty}
          </Card.Subtitle>
          {question.notes && (
            <Card.Text>
              <strong>Notes:</strong> {question.notes}
            </Card.Text>
          )}
          {question.solution && (
            <Card.Text>
              <strong>Solution:</strong> {question.solution}
            </Card.Text>
          )}
          <Button variant="secondary" onClick={onBack}>
            Back to Question List
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default QuestionDetail;
