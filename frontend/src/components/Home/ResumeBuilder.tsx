import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
//import './ResumeBuilder.css'; // Import custom styles if needed

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission, e.g., sending data to an API or generating a PDF
  };

  return (
    <div className="resume-builder-container">
      <h2 className="text-center">Resume Builder</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
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

        <Form.Group controlId="formPhone">
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

        <Form.Group controlId="formSummary">
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

        <Form.Group controlId="formExperience">
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

        <Form.Group controlId="formEducation">
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

        <Form.Group controlId="formSkills">
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

        <Button variant="primary" type="submit" className="mt-3">
          Generate Resume
        </Button>
      </Form>
    </div>
  );
};

export default ResumeBuilder;
