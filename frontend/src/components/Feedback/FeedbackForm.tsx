import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './FeedbackForm.css'; // Import custom CSS for additional styling

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Simple validation
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    // Here, you would typically send the data to a server
    // For this example, we'll just simulate success
    setSuccess(true);
    setError(null);

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="feedback-form-container">
      <h2 className="text-center mb-4">Feedback Form</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Your feedback has been submitted!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your feedback"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FeedbackForm;
