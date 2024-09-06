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
const fetchAIResumeSuggestions = async (formData: any) => {
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
const calculateATSScore = (resumeContent: string) => Math.floor(Math.random() * 100);

const ResumeBuilder: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', linkedin: '', github: '', additionalLinks: '', summary: '', experience: '', education: '', skills: '', projects: '', certifications: ''
  });
  const [atsScore, setAtsScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('1');
  const [aiLoading, setAiLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    const canvas = await html2canvas(document.getElementById('resume-preview')!);
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

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Advanced Resume Builder</h2>
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
        <TextField label="Professional Summary" variant="outlined" fullWidth name="summary" value={formData.summary} onChange={handleChange} multiline rows={3} className="mb-3" />
        <TextField label="Work Experience" variant="outlined" fullWidth name="experience" value={formData.experience} onChange={handleChange} multiline rows={3} className="mb-3" />
        <TextField label="Education" variant="outlined" fullWidth name="education" value={formData.education} onChange={handleChange} multiline rows={3} className="mb-3" />
        <TextField label="Skills" variant="outlined" fullWidth name="skills" value={formData.skills} onChange={handleChange} multiline rows={2} className="mb-3" />
        <TextField label="Projects" variant="outlined" fullWidth name="projects" value={formData.projects} onChange={handleChange} multiline rows={3} className="mb-3" />
        <TextField label="Certifications" variant="outlined" fullWidth name="certifications" value={formData.certifications} onChange={handleChange} multiline rows={2} className="mb-3" />
        <InputLabel id="template-select-label">Select Template</InputLabel>
        <Select labelId="template-select-label" value={selectedTemplate} onChange={e => setSelectedTemplate(e.target.value as string)} fullWidth className="mb-3">
          {gptTemplates.map(template => (
            <MenuItem key={template.id} value={template.id}>
              {template.name} - {template.description}
            </MenuItem>
          ))}
        </Select>
        <Button variant="primary" type="submit" className="w-100" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Generate Resume'}
        </Button>
        <Button variant="secondary" className="mt-3 w-100" onClick={handleAIEnhancement} disabled={aiLoading}>
          {aiLoading ? <Spinner animation="border" size="sm" /> : 'Enhance with AI'}
        </Button>
      </form>

      {atsScore !== null && !loading && (
        <div className="mt-4">
          <Alert variant="info">Your ATS score is: <strong>{atsScore}</strong>%</Alert>
          <ListGroup className="mt-3">
            <ListGroup.Item variant="info">Consider adding more specific keywords related to the job you are applying for.</ListGroup.Item>
            <ListGroup.Item variant="info">Ensure that your skills and experience align with the job description.</ListGroup.Item>
          </ListGroup>
        </div>
      )}

      {error && <div className="mt-4"><Alert variant="danger">{error}</Alert></div>}

      <Button variant="outline-secondary" className="mt-3" onClick={() => setPreviewOpen(true)}>Preview Resume</Button>

      <Dialog open={previewOpen} onClose={() => setPreviewOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          Resume Preview
          <IconButton edge="end" color="inherit" onClick={() => setPreviewOpen(false)} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div id="resume-preview" className={`resume-template-${selectedTemplate}`}>
            <Typography variant="h4" align="center">{formData.name}</Typography>
            <Typography variant="h6" align="center">{formData.email} | {formData.phone}</Typography>
            <Typography variant="h6" align="center">{formData.linkedin} | {formData.github}</Typography>
            <Typography variant="h6" align="center">{formData.additionalLinks}</Typography>
            <Typography variant="h5">Summary</Typography>
            <Typography>{formData.summary}</Typography>
            <Typography variant="h5">Experience</Typography>
            <Typography>{formData.experience}</Typography>
            <Typography variant="h5">Education</Typography>
            <Typography>{formData.education}</Typography>
            <Typography variant="h5">Skills</Typography>
            <Typography>{formData.skills}</Typography>
            <Typography variant="h5">Projects</Typography>
            <Typography>{formData.projects}</Typography>
            <Typography variant="h5">Certifications</Typography>
            <Typography>{formData.certifications}</Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPreviewOpen(false)} color="primary">Close</Button>
          <Button onClick={handleDownloadPDF} color="primary">Download PDF</Button>
          <Button onClick={handleDownloadDOCX} color="primary">Download DOCX</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ResumeBuilder;
