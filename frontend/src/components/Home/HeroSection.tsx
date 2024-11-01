import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TypingEffect from 'react-typing-effect';
import TestimonialSlider from './TestimonialSlider'; // Adjust path as needed
import './HeroSection.css'; // Ensure you have modern styles in this file

const HeroSection: React.FC = () => {
  const handleLearnMoreClick = () => {
    const resourcesSection = document.getElementById('resources-section');
    if (resourcesSection) {
      resourcesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center text-white position-relative overflow-hidden"
      style={{
        backgroundImage: `url('/path/to/your/background-image.jpg')`, // Set the path to your image
        backgroundSize: 'cover', // Make the background image cover the entire section
        backgroundPosition: 'center', // Center the background image
      }}
    >
      <div className="hero-background position-absolute top-0 start-0 w-100 h-100">
        <div className="gradient-animation"></div>
        <div className="circle-animation"></div>
        <div className="triangle-animation"></div>
      </div>

      <Container className="position-relative z-index-3 text-center">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
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
              Master interviews and build a standout resume with our expert resources.
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
                onClick={handleLearnMoreClick}
                aria-label="Learn More"
              >
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Testimonial Slider */}
      <div className="position-absolute bottom-0 end-0 p-3 z-index-4">
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default HeroSection;
