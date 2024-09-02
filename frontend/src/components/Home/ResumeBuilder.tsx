import React, { useState } from 'react';
import {
  Button,
  Col,
  Row,
  Alert,
  Spinner,
  Card,
  ListGroup,
  Form
} from 'react-bootstrap';
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  MenuItem,
  Select,
  InputLabel
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './ResumeBuilder.css';

// Mock AI function (replace with actual API call)
const fetchAIResumeSuggestions = async (formData: any) => {
  // Simulate a delay for the API call
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Simulate detailed AI-generated content based on the form data
  const { name, summary, experience, education, skills, projects, certifications } = formData;

  // Mock AI response with extended and professional content
  return {
    summary: summary || `Dynamic and accomplished software engineer with over 10 years of experience in designing, developing, and implementing complex software solutions. Proven track record of leading cross-functional teams and driving innovative projects to successful completion. Adept at leveraging deep technical expertise in full-stack development, cloud computing, and data analysis to deliver scalable and high-performance applications. Recognized for strong problem-solving skills, strategic vision, and the ability to thrive in fast-paced environments.`,
    experience: experience || `Lead Software Engineer | Tech Innovations Inc. (2018 - Present) - Spearheaded the development of a cutting-edge cloud-based project management system, resulting in a 50% increase in team productivity and a significant reduction in operational costs. Managed a team of 15 developers, providing mentorship and guidance on best practices in software design and architecture. Implemented advanced machine learning algorithms to enhance data analytics capabilities, driving actionable insights and strategic decision-making.

Senior Software Engineer | FutureTech Solutions (2014 - 2018) - Engineered a highly scalable e-commerce platform, optimizing performance and user experience. Played a pivotal role in migrating legacy systems to microservices architecture, which improved system reliability and scalability. Coordinated with stakeholders to define project requirements and deliver solutions that aligned with business goals. Led agile development sprints and managed project timelines, ensuring successful on-time delivery of key features.

Software Developer | Innovative Systems Ltd. (2010 - 2014) - Developed and maintained robust web applications using React, Node.js, and PostgreSQL. Contributed to the design and implementation of a real-time data processing system that supported high-volume transactions and improved system responsiveness. Collaborated with cross-functional teams to troubleshoot and resolve complex technical issues, ensuring optimal system performance and user satisfaction.`,
    education: education || `Master of Science in Computer Science | Stanford University (2012 - 2014) - Specialized in advanced algorithms, artificial intelligence, and data science. Completed a thesis on "Scalable Machine Learning Models for Big Data Analytics," which received high acclaim for its innovation and impact.

Bachelor of Science in Computer Science | XYZ University (2006 - 2010) - Graduated with honors. Coursework included software engineering principles, database management, and human-computer interaction. Participated in multiple research projects and internships focused on software development and system optimization.`,
    skills: skills || `- Proficient in modern web technologies including JavaScript, TypeScript, React, and Node.js.
- Extensive experience with cloud platforms (AWS, Azure) and containerization tools (Docker, Kubernetes).
- Expertise in designing and implementing scalable software architectures and microservices.
- Strong knowledge of database systems (SQL, PostgreSQL, MongoDB) and data modeling.
- Skilled in Agile and Scrum methodologies, with a focus on continuous integration and delivery.
- Advanced problem-solving abilities and experience in optimizing system performance.
- Effective communicator with experience in collaborating with stakeholders and presenting technical concepts.`,
    projects: projects || `Project Management System Overhaul - Led the redevelopment of a project management tool, incorporating advanced features such as real-time collaboration, task automation, and comprehensive reporting. Achieved a 50% reduction in project turnaround time and improved user satisfaction.

E-commerce Platform Optimization - Directed a major overhaul of an existing e-commerce platform to enhance performance and scalability. Implemented new caching strategies and optimized the front-end code, resulting in a 40% increase in page load speed and a 30% increase in user engagement.

AI-Driven Data Analytics Tool - Developed an AI-powered data analytics tool that provided predictive insights and automated reporting. The tool utilized machine learning algorithms to analyze large datasets and generate actionable insights, significantly improving business intelligence and decision-making processes.`,

    certifications: certifications || `Certified Scrum Master (CSM) - Demonstrated proficiency in Agile project management and team leadership.

AWS Certified Solutions Architect - Validated expertise in designing and deploying secure, scalable, and highly available systems on AWS.

Microsoft Certified: Azure Solutions Architect Expert - Recognized for advanced skills in designing and implementing solutions on the Azure platform.

Certified Data Analyst - Proficient in data analysis, statistical modeling, and visualization techniques, with a focus on deriving actionable insights from complex datasets.

Google Cloud Certified - Professional Data Engineer - Expertise in designing and implementing data processing systems and workflows using Google Cloud technologies.`,
  };
};


// Mock ATS scoring (replace with actual implementation)
const calculateATSScore = (resumeContent: string) => Math.floor(Math.random() * 100);

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
    skills: '',
    projects: '',
    certifications: ''
  });
  const [atsScore, setAtsScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('1');
  const [aiLoading, setAiLoading] = useState(false);
  const [showResumeDetails, setShowResumeDetails] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate an API call to calculate ATS score
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
      setFormData(prev => ({
        ...prev,
        summary: aiSuggestions.summary,
        experience: aiSuggestions.experience,
        education: aiSuggestions.education,
        skills: aiSuggestions.skills,
        projects: aiSuggestions.projects,
        certifications: aiSuggestions.certifications
      }));
    } catch {
      setError('An error occurred while fetching AI suggestions.');
    } finally {
      setAiLoading(false);
    }
  };

  const handleDownload = async () => {
    const doc = new jsPDF();
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
          label="Projects"
          variant="outlined"
          fullWidth
          name="projects"
          value={formData.projects}
          onChange={handleChange}
          multiline
          rows={3}
          className="mb-3"
        />
        <TextField
          label="Certifications"
          variant="outlined"
          fullWidth
          name="certifications"
          value={formData.certifications}
          onChange={handleChange}
          multiline
          rows={2}
          className="mb-3"
        />
        <InputLabel id="template-select-label">Select Template</InputLabel>
        <Select
          labelId="template-select-label"
          value={selectedTemplate}
          onChange={e => setSelectedTemplate(e.target.value as string)}
          fullWidth
          className="mb-3"
        >
          {templates.map(template => (
            <MenuItem key={template.id} value={template.id}>
              {template.name}
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

      <Button variant="outline-secondary" className="mt-3" onClick={() => setPreviewOpen(true)}>
        Preview Resume
      </Button>

      <Dialog open={previewOpen} onClose={() => setPreviewOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          Resume Preview
          <IconButton edge="end" color="inherit" onClick={() => setPreviewOpen(false)} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div id="resume-preview" className={`resume-template-${selectedTemplate}`}>
            <Typography variant="h4">{formData.name}</Typography>
            <Typography variant="h6">{formData.email} | {formData.phone}</Typography>
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
          <Button onClick={() => setPreviewOpen(false)} color="primary">
            Close
          </Button>
          <Button onClick={handleDownload} color="primary">
            Download PDF
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ResumeBuilder;
