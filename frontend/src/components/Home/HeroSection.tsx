import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TypingEffect from 'react-typing-effect';
import './HeroSection.css'; // Ensure you have modern styles in this file

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="hero-section d-flex align-items-center justify-content-center text-white position-relative overflow-hidden">
        {/* Background Image */}
        <div className="hero-background position-absolute top-0 start-0 w-100 h-100"></div>
        {/* Overlay */}
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>

        <Container className="position-relative z-index-3">
          <Row className="text-center">
            <Col md={{ span: 8, offset: 2 }}>
              <h1 className="display-4 font-weight-bold mb-4 hero-title">
                <TypingEffect
                  text={[
                    'Welcome to InterviewMaster.ai',
                    'Your Ultimate Resource for Interviews',
                    'Build Resumes & Ace Your Interviews',
                  ]}
                  speed={50}
                  eraseSpeed={25}
                  eraseDelay={1000}
                  typingDelay={500}
                  cursorRenderer={(cursor: string) => <span>{cursor}</span>}
                />
              </h1>
              <p className="lead mb-4 hero-subtitle">
                Your ultimate resource for mastering interviews, building resumes, and landing your dream job.
              </p>
              <div className="d-flex justify-content-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="px-5 py-3 hero-button"
                  href="/register"
                  aria-label="Get Started"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="px-5 py-3 hero-button"
                  href="#learn-more"
                  aria-label="Learn More"
                >
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      
    </>
  );
};

export default HeroSection;
