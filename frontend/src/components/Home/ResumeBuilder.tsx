import React, { useState } from 'react';
import { Form, Button, Col, Row, Alert, Spinner } from 'react-bootstrap';
import './ResumeBuilder.css';


// Mock function for ATS scoring (replace with actual implementation)
const calculateATSScore = (resumeContent: string) => {
  // Simple mock implementation for the sake of example
  const score = Math.floor(Math.random() * 100);
  return score;
};

const ResumeBuilder: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: ''
  });
  const [atsScore, setAtsScore] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate an API call to calculate ATS score
      const resumeContent = `${formData.name}\n${formData.summary}\n${formData.experience}\n${formData.education}\n${formData.skills}`;
      const score = calculateATSScore(resumeContent);
      setAtsScore(score);
    } catch (err) {
      setError('An error occurred while calculating the ATS score.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Resume Builder</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSummary">
          <Form.Label>Professional Summary</Form.Label>
          <Form.Control
            as="textarea"
            name="summary"
            placeholder="A brief summary about yourself"
            value={formData.summary}
            onChange={handleChange}
            rows={3}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formExperience">
          <Form.Label>Work Experience</Form.Label>
          <Form.Control
            as="textarea"
            name="experience"
            placeholder="Describe your work experience"
            value={formData.experience}
            onChange={handleChange}
            rows={3}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEducation">
          <Form.Label>Education</Form.Label>
          <Form.Control
            as="textarea"
            name="education"
            placeholder="Describe your educational background"
            value={formData.education}
            onChange={handleChange}
            rows={3}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSkills">
          <Form.Label>Skills</Form.Label>
          <Form.Control
            as="textarea"
            name="skills"
            placeholder="List your skills"
            value={formData.skills}
            onChange={handleChange}
            rows={2}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Generate Resume'}
        </Button>
      </Form>

      {atsScore !== null && !loading && (
        <div className="mt-4">
          <Alert variant="info">
            Your ATS score is: <strong>{atsScore}</strong>%
          </Alert>
        </div>
      )}

      {error && (
        <div className="mt-4">
          <Alert variant="danger">{error}</Alert>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
