import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TypingEffect from 'react-typing-effect'; // Import TypingEffect for typing effect
import './HeroSection.css'; // Import your custom CSS if needed

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section bg-hero-pattern text-white text-center d-flex align-items-center position-relative overflow-hidden">
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
            <Button
              variant="primary"
              size="lg"
              className="mt-4 px-5 py-3"
              href="#get-started"
              aria-label="Get Started"
            >
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
