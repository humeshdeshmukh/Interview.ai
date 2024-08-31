import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Typography, Button } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import './Team.css'; // Import custom CSS for additional styling

const Team: React.FC = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Humesh Deshmukh',
      role: 'Founder',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      github: 'https://github.com/humesh',
      linkedin: 'https://linkedin.com/in/humesh',
      twitter: 'https://twitter.com/humesh'
    },
    {
      name: 'Aditi Lanjewar',
      role: 'Co-Founder',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      github: 'https://github.com/aditi',
      linkedin: 'https://linkedin.com/in/aditi',
      twitter: 'https://twitter.com/aditi'
    }
  ];

  return (
    <Container className="mt-4">
      <Typography variant="h1" component="h1" gutterBottom align="center">
        Meet the Team
      </Typography>
      <Row>
        {teamMembers.map((member, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="team-card">
              <Card.Img variant="top" src={member.imageUrl} className="team-image" />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.role}</Card.Text>
                <div className="team-socials">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<GitHub />}
                    href={member.github}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<LinkedIn />}
                    href={member.linkedin}
                    target="_blank"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Twitter />}
                    href={member.twitter}
                    target="_blank"
                  >
                    Twitter
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
