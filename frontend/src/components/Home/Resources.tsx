import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Resources.css'; // Import custom CSS

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
    {
      title: 'Salary Negotiation Tips',
      description: 'Strategies and tips to help you successfully negotiate your salary.',
    },
    {
      title: 'Job Search Strategies',
      description: 'Effective strategies to help you find and secure the job you want.',
    },
    {
      title: 'Career Development Resources',
      description: 'Tools and resources to help you grow and advance in your career.',
    },
    {
      title: 'Networking Best Practices',
      description: 'Best practices for building and maintaining a professional network.',
    },
    {
      title: 'Cover Letter Writing Tips',
      description: 'Guidance on writing compelling cover letters that make a strong impression.',
    },
  ];

  // Duplicate resources for continuous scroll effect
  const duplicatedResources = [...resources, ...resources];

  return (
    <section className="resources-section">
      <Container>
        <h2 className="resources-heading">Resources</h2>
        <div className="resources-slider">
          <div className="resources-slide-inner">
            {duplicatedResources.map((resource, index) => (
              <Card className="resource-card" key={index}>
                <Card.Body>
                  <Card.Title className="resource-title">{resource.title}</Card.Title>
                  <Card.Text className="resource-description">
                    {resource.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Resources;
