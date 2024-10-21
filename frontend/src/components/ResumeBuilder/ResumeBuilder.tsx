import React, { useState } from 'react';
import { Button, Col, Row, Alert, Spinner, ListGroup } from 'react-bootstrap';
import { TextField, Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton, MenuItem, Select, InputLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import './ResumeBuilder.css';

// Simulate GPT-based templates
const gptTemplates = [
  { id: '1', name: 'Professional', description: 'A formal template suitable for corporate positions.' },
  { id: '2', name: 'Modern', description: 'A sleek, contemporary design ideal for tech roles.' },
  { id: '3', name: 'Creative', description: 'A visually appealing template for creative industries.' },
  { id: '4', name: 'Minimalist', description: 'A clean and simple design focusing on content.' },
  { id: '5', name: 'Executive', description: 'A sophisticated template for senior-level positions.' }
];

// Default Resume Frame
const defaultResumeFrame = {
  summary: 'Dynamic and accomplished professional with extensive experience in the industry.',
  experience: 'Experienced professional with a track record of success in various roles. Proven ability to drive results and lead teams effectively.',
  education: 'Bachelor\'s or Master\'s degree in relevant field from a recognized institution.',
  skills: 'Proficient in essential skills relevant to the industry. Experienced in working with various tools and technologies.',
  projects: 'Significant projects undertaken that showcase skills and achievements.',
  certifications: 'Relevant certifications and credentials that highlight professional qualifications.'
};

// Mock AI function (replace with actual API call)
const fetchAIResumeSuggestions = async (formData) => {
  await new Promise(resolve => setTimeout(resolve, 3000));

  return {
    summary: formData.summary || defaultResumeFrame.summary,
    experience: formData.experience || defaultResumeFrame.experience,
    education: formData.education || defaultResumeFrame.education,
    skills: formData.skills || defaultResumeFrame.skills,
    projects: formData.projects || defaultResumeFrame.projects,
    certifications: formData.certifications || defaultResumeFrame.certifications
  };
};

// Mock ATS scoring (replace with actual implementation)
const calculateATSScore = (resumeContent) => Math.floor(Math.random() * 100);

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', linkedin: '', github: '', additionalLinks: '', summary: '', experience: '', education: '', skills: '', projects: '', certifications: ''
  });
  const [atsScore, setAtsScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('1');
  const [aiLoading, setAiLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // Step control

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const resumeContent = `${formData.name}\n${formData.summary}\n${formData.experience}\n${formData.education}\n${formData.skills}\n${formData.projects}\n${formData.certifications}`;
      const score = calculateATSScore(resumeContent);
      setAtsScore(score);
    } catch {
      setError('An error occurred while calculating the ATS score.');
    } finally {
      setLoading(false);
    }
  };

  const handleAIEnhancement = async () => {
    setAiLoading(true);
    setError(null);
    try {
      const aiSuggestions = await fetchAIResumeSuggestions(formData);
      setFormData(prev => ({ ...prev, ...aiSuggestions }));
    } catch {
      setError('An error occurred while fetching AI suggestions.');
    } finally {
      setAiLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    const doc = new jsPDF();
    const canvas = await html2canvas(document.getElementById('resume-preview'));
    const imgData = canvas.toDataURL('image/png');
    doc.addImage(imgData, 'PNG', 10, 10);
    doc.save('resume.pdf');
  };

  const handleDownloadDOCX = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({ text: formData.name, heading: HeadingLevel.HEADING_1 }),
            new Paragraph({ text: `Email: ${formData.email}` }),
            new Paragraph({ text: `Phone: ${formData.phone}` }),
            new Paragraph({ text: `LinkedIn: ${formData.linkedin}` }),
            new Paragraph({ text: `GitHub: ${formData.github}` }),
            new Paragraph({ text: `Additional Links: ${formData.additionalLinks}` }),
            new Paragraph({ text: 'Summary', heading: HeadingLevel.HEADING_2 }),
            new Paragraph(formData.summary),
            new Paragraph({ text: 'Experience', heading: HeadingLevel.HEADING_2 }),
            new Paragraph(formData.experience),
            new Paragraph({ text: 'Education', heading: HeadingLevel.HEADING_2 }),
            new Paragraph(formData.education),
            new Paragraph({ text: 'Skills', heading: HeadingLevel.HEADING_2 }),
            new Paragraph(formData.skills),
            new Paragraph({ text: 'Projects', heading: HeadingLevel.HEADING_2 }),
            new Paragraph(formData.projects),
            new Paragraph({ text: 'Certifications', heading: HeadingLevel.HEADING_2 }),
            new Paragraph(formData.certifications),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.docx';
    link.click();
    URL.revokeObjectURL(url);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            loading={loading} 
            atsScore={atsScore} 
            error={error} 
            handleAIEnhancement={handleAIEnhancement} 
            aiLoading={aiLoading} 
          />
        );
      case 2:
        return (
          <Step2 
            selectedTemplate={selectedTemplate} 
            setSelectedTemplate={setSelectedTemplate} 
          />
        );
      case 3:
        return (
          <Step3 
            formData={formData} 
            selectedTemplate={selectedTemplate} 
            handleDownloadPDF={handleDownloadPDF} 
            handleDownloadDOCX={handleDownloadDOCX} 
            previewOpen={previewOpen} 
            setPreviewOpen={setPreviewOpen} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Advanced Resume Builder</h2>
      {renderStep()}
      <div className="d-flex justify-content-between mt-4">
        {currentStep > 1 && (
          <Button variant="secondary" onClick={() => setCurrentStep(currentStep - 1)}>Previous</Button>
        )}
        {currentStep < 3 && (
          <Button variant="primary" onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
        )}
        {currentStep === 3 && (
          <Button variant="primary" onClick={() => setCurrentStep(1)}>Restart</Button>
        )}
      </div>
    </div>
  );
};

// Step 1: Skills Input
const Step1 = ({ formData, handleChange, handleSubmit, loading, atsScore, error, handleAIEnhancement, aiLoading }) => (
  <form onSubmit={handleSubmit}>
    <Row className="mb-3">
      <Col md={6}>
        <TextField label="Name" variant="outlined" fullWidth name="name" value={formData.name} onChange={handleChange} required />
      </Col>
      <Col md={6}>
        <TextField label="Email" variant="outlined" fullWidth type="email" name="email" value={formData.email} onChange={handleChange} required />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md={6}>
        <TextField label="Phone" variant="outlined" fullWidth type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </Col>
      <Col md={6}>
        <TextField label="LinkedIn" variant="outlined" fullWidth name="linkedin" value={formData.linkedin} onChange={handleChange} />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md={6}>
        <TextField label="GitHub" variant="outlined" fullWidth name="github" value={formData.github} onChange={handleChange} />
      </Col>
      <Col md={6}>
        <TextField label="Additional Links" variant="outlined" fullWidth name="additionalLinks" value={formData.additionalLinks} onChange={handleChange} />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md={12}>
        <TextField label="Professional Summary" variant="outlined" fullWidth name="summary" value={formData.summary} onChange={handleChange} multiline rows={3} required />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md={12}>
        <TextField label="Experience" variant="outlined" fullWidth name="experience" value={formData.experience} onChange={handleChange} multiline rows={3} required />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md={12}>
        <TextField label="Education" variant="outlined" fullWidth name="education" value={formData.education} onChange={handleChange} multiline rows={3} required />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md={12}>
        <TextField label="Skills" variant="outlined" fullWidth name="skills" value={formData.skills} onChange={handleChange} multiline rows={3} required />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md={12}>
        <TextField label="Projects" variant="outlined" fullWidth name="projects" value={formData.projects} onChange={handleChange} multiline rows={3} />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col md={12}>
        <TextField label="Certifications" variant="outlined" fullWidth name="certifications" value={formData.certifications} onChange={handleChange} multiline rows={3} />
      </Col>
    </Row>
    <div className="d-flex justify-content-between">
      <Button variant="primary" type="submit" disabled={loading}>Calculate ATS Score</Button>
      <Button variant="secondary" onClick={handleAIEnhancement} disabled={aiLoading}>
        {aiLoading ? <Spinner animation="border" size="sm" /> : 'Enhance with AI'}
      </Button>
    </div>
    {loading && <Spinner className="mt-3" animation="border" />}
    {atsScore && <Alert variant="success" className="mt-3">Your ATS Score: {atsScore}</Alert>}
    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
  </form>
);

// Step 2: Template Selection
const Step2 = ({ selectedTemplate, setSelectedTemplate }) => (
  <div>
    <h4>Select a Resume Template</h4>
    <InputLabel id="template-label">Template</InputLabel>
    <Select
      labelId="template-label"
      value={selectedTemplate}
      onChange={(e) => setSelectedTemplate(e.target.value)}
      fullWidth
      variant="outlined"
      className="mb-3"
    >
      {gptTemplates.map((template) => (
        <MenuItem key={template.id} value={template.id}>
          {template.name} - {template.description}
        </MenuItem>
      ))}
    </Select>
  </div>
);

// Step 3: Preview & Download
const Step3 = ({ formData, selectedTemplate, handleDownloadPDF, handleDownloadDOCX, previewOpen, setPreviewOpen }) => (
  <div>
    <h4>Resume Preview</h4>
    <div id="resume-preview" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
      <Typography variant="h4">{formData.name}</Typography>
      <Typography variant="body1">Email: {formData.email}</Typography>
      <Typography variant="body1">Phone: {formData.phone}</Typography>
      <Typography variant="body1">LinkedIn: {formData.linkedin}</Typography>
      <Typography variant="body1">GitHub: {formData.github}</Typography>
      <Typography variant="body1">Additional Links: {formData.additionalLinks}</Typography>
      <Typography variant="h6">Summary</Typography>
      <Typography variant="body1">{formData.summary}</Typography>
      <Typography variant="h6">Experience</Typography>
      <Typography variant="body1">{formData.experience}</Typography>
      <Typography variant="h6">Education</Typography>
      <Typography variant="body1">{formData.education}</Typography>
      <Typography variant="h6">Skills</Typography>
      <Typography variant="body1">{formData.skills}</Typography>
      <Typography variant="h6">Projects</Typography>
      <Typography variant="body1">{formData.projects}</Typography>
      <Typography variant="h6">Certifications</Typography>
      <Typography variant="body1">{formData.certifications}</Typography>
    </div>
    <div className="d-flex justify-content-between mt-4">
      <Button variant="success" onClick={handleDownloadPDF}>Download PDF</Button>
      <Button variant="success" onClick={handleDownloadDOCX}>Download DOCX</Button>
    </div>
  </div>
);

export default ResumeBuilder;
