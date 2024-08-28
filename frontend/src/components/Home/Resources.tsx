import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Resources.css'; // Import custom CSS if needed

const Resources: React.FC = () => {
  // Sample resources data
  const resources = [
    {
      title: 'Interview Preparation Guide',
      description: 'A comprehensive guide to help you prepare for various types of interviews.',
    },
    {
      title: 'Resume Writing Tips',
      description: 'Tips and tricks for writing a standout resume that gets noticed.',
    },
    {
      title: 'Mock Interview Platform',
      description: 'An interactive platform to practice mock interviews with real-time feedback.',
    },
    {
      title: 'Interview Questions Database',
      description: 'A collection of common and challenging interview questions across different industries.',
    },
    // Add more resources as needed
  ];

  return (
    <section className="resources-section py-5">
      <Container>
        <h2 className="text-center mb-4 text-dark">Resources</h2>
        <Row>
          {resources.map((resource, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="resource-card">
                <Card.Body>
                  <Card.Title>{resource.title}</Card.Title>
                  <Card.Text>{resource.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Resources;
