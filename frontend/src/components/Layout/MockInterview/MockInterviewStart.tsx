import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import './MockInterviewStart.css'; // Ensure you have corresponding CSS for styling

const MockInterviewStart: React.FC = () => {
  // Handler for starting the mock interview
  const handleStartInterview = () => {
    // Logic to navigate to the interview session or start the interview
    console.log('Mock interview started');
    // You might want to use React Router to navigate to the MockInterview component
    // e.g., useNavigate() or history.push('/mock-interview');
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Start Your Mock Interview</h1>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header className="bg-primary text-white">
              <h2 className="h5 mb-0">Welcome to the Mock Interview</h2>
            </Card.Header>
            <Card.Body>
              <p className="text-center mb-4">
                Get ready to enhance your interview skills with our mock interview session. 
                Follow the instructions and try to answer the questions as if you were in a real interview.
              </p>
              <div className="text-center">
                <Button
                  variant="success"
                  onClick={handleStartInterview}
                  className="btn-start"
                >
                  Start Interview
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MockInterviewStart;
