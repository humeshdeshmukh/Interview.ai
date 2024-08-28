import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import './FeedbackList.css'; // Import custom CSS if needed

interface Feedback {
  id: number;
  name: string;
  message: string;
  timestamp: string; // Assuming timestamp is a string in ISO format
}

interface FeedbackListProps {
  feedbacks: Feedback[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbacks }) => {
  return (
    <div className="feedback-list-container">
      <h2 className="text-center mb-4">Feedback List</h2>
      {feedbacks.length > 0 ? (
        <ListGroup>
          {feedbacks.map((feedback) => (
            <ListGroup.Item key={feedback.id} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>{feedback.name}</Card.Title>
                  <Card.Text>{feedback.message}</Card.Text>
                  <Card.Footer className="text-muted">
                    <small>{new Date(feedback.timestamp).toLocaleString()}</small>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p className="text-center">No feedback available.</p>
      )}
    </div>
  );
};

export default FeedbackList;
