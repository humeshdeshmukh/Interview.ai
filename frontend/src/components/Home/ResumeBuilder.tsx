import React, { useState } from 'react';
import { Button, Col, Row, Alert, Spinner, Modal, Card, ListGroup } from 'react-bootstrap';
import { TextField, Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './ResumeBuilder.css';

// Mock function for ATS scoring (replace with actual implementation)
const calculateATSScore = (resumeContent: string) => {
  // Example ATS scoring algorithm (replace with actual algorithm)
  const score = Math.floor(Math.random() * 100);
  return score;
};

// Mock templates (replace with actual template rendering logic)
const templates = [
  { id: '1', name: 'Professional' },
  { id: '2', name: 'Modern' },
  { id: '3', name: 'Classic' }
];

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
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('1');

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

  const handlePreviewOpen = () => {
    setPreviewOpen(true);
  };

  const handlePreviewClose = () => {
    setPreviewOpen(false);
  };

  const handleDownload = async () => {
    const doc = new jsPDF();
    const resumeContent = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      
      Professional Summary:
      ${formData.summary}
      
      Work Experience:
      ${formData.experience}
      
      Education:
      ${formData.education}
      
      Skills:
      ${formData.skills}
    `;

    // Use html2canvas to capture the HTML content for PDF
    const canvas = await html2canvas(document.getElementById('resume-preview')!);
    const imgData = canvas.toDataURL('image/png');
    doc.addImage(imgData, 'PNG', 10, 10);
    doc.save('resume.pdf');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Resume Builder</h2>

      <form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>

        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mb-3"
          required
        />

        <TextField
          label="Professional Summary"
          variant="outlined"
          fullWidth
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          multiline
          rows={3}
          className="mb-3"
        />

        <TextField
          label="Work Experience"
          variant="outlined"
          fullWidth
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          multiline
          rows={3}
          className="mb-3"
        />

        <TextField
          label="Education"
          variant="outlined"
          fullWidth
          name="education"
          value={formData.education}
          onChange={handleChange}
          multiline
          rows={3}
          className="mb-3"
        />

        <TextField
          label="Skills"
          variant="outlined"
          fullWidth
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          multiline
          rows={2}
          className="mb-3"
        />

        <TextField
          select
          label="Select Template"
          value={selectedTemplate}
          onChange={e => setSelectedTemplate(e.target.value)}
          fullWidth
          className="mb-3"
          SelectProps={{ native: true }}
        >
          {templates.map(template => (
            <option key={template.id} value={template.id}>
              {template.name}
            </option>
          ))}
        </TextField>

        <Button variant="primary" type="submit" className="w-100" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Generate Resume'}
        </Button>
      </form>

      {atsScore !== null && !loading && (
        <div className="mt-4">
          <Alert variant="info">
            Your ATS score is: <strong>{atsScore}</strong>%
          </Alert>
          <ListGroup className="mt-3">
            <ListGroup.Item variant="info">Consider adding more specific keywords related to the job you are applying for.</ListGroup.Item>
            <ListGroup.Item variant="info">Ensure that your skills and experience align with the job description.</ListGroup.Item>
          </ListGroup>
        </div>
      )}

      {error && (
        <div className="mt-4">
          <Alert variant="danger">{error}</Alert>
        </div>
      )}

      <Button variant="outline-secondary" className="mt-3" onClick={handlePreviewOpen}>
        Preview Resume
      </Button>

      <Dialog open={previewOpen} onClose={handlePreviewClose} maxWidth="lg" fullWidth>
        <DialogTitle>
          Resume Preview
          <IconButton
            edge="end"
            color="inherit"
            onClick={handlePreviewClose}
            aria-label="close"
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Card id="resume-preview">
            <Card.Body>
              <Card.Title>{formData.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{formData.email} | {formData.phone}</Card.Subtitle>
              <Card.Text>
                <Typography variant="h6">Summary:</Typography> {formData.summary}
                <Typography variant="h6">Experience:</Typography> {formData.experience}
                <Typography variant="h6">Education:</Typography> {formData.education}
                <Typography variant="h6">Skills:</Typography> {formData.skills}
              </Card.Text>
            </Card.Body>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handlePreviewClose}>
            Close
          </Button>
          <Button variant="contained" color="primary" onClick={handleDownload}>
            Download Resume
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ResumeBuilder;
