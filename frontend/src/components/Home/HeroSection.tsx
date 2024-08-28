import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TypingEffect from 'react-typing-effect'; // Import TypingEffect for typing effect
import './HeroSection.css'; // Import your custom CSS if needed

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section text-white text-center d-flex align-items-center position-relative overflow-hidden">
      {/* Background Image */}
      <div className="hero-background position-absolute top-0 start-0 w-100 h-100"></div>
      {/* Overlay */}
      <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1 className="display-4 font-weight-bold mb-4">
              <TypingEffect
                text={[
                  'Welcome to InterviewMaster.ai',
                  'Your Ultimate Resource for Interviews',
                  'Build Resumes & Ace Your Interviews'
                ]}
                speed={50}
                eraseSpeed={25}
                eraseDelay={1000}
                typingDelay={500}
                cursorRenderer={(cursor: string) => <span>{cursor}</span>}
              />
            </h1>
            <p className="lead mb-4">
              Your ultimate resource for mastering interviews, building resumes, and landing your dream job.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button
                variant="primary"
                size="lg"
                className="px-5 py-3"
                href="#get-started"
                aria-label="Get Started"
              >
                Get Started
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                className="px-5 py-3"
                href="#learn-more"
                aria-label="Learn More"
              >
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
