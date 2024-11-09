import React, { useState } from 'react';
import './ResumePreview.css';

const ResumePreview: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    education: true,
    experience: true,
    certifications: true,
    languages: true,
    projects: true,
    references: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="resume-preview">
      <header className="resume-header">
        <h2>John Doe</h2>
        <p>johndoe@example.com | (123) 456-7890 | 123 Main St, Anytown</p>
      </header>

      <section className="section">
        <h3 onClick={() => toggleSection('education')} className="section-title">
          Education {openSections.education ? '▼' : '▶'}
        </h3>
        {openSections.education && (
          <ul>
            <li>Bachelor of Science in Computer Science, XYZ University, 2022</li>
            <li>Master of Business Administration, ABC University, 2024</li>
          </ul>
        )}
      </section>

      <section className="section">
        <h3 onClick={() => toggleSection('experience')} className="section-title">
          Experience {openSections.experience ? '▼' : '▶'}
        </h3>
        {openSections.experience && (
          <ul>
            <li>
              <strong>Software Engineer</strong> at Tech Solutions, 2023 - Present<br />
              Developing and maintaining scalable web applications.
            </li>
            <li>
              <strong>Intern</strong> at Innovations Inc., 2022 - 2023<br />
              Assisted in data analysis and automation tasks.
            </li>
          </ul>
        )}
      </section>

      <section className="section">
        <h3 onClick={() => toggleSection('certifications')} className="section-title">
          Certifications {openSections.certifications ? '▼' : '▶'}
        </h3>
        {openSections.certifications && (
          <ul>
            <li>Certified Kubernetes Administrator (CKA)</li>
            <li>Professional Scrum Master (PSM I)</li>
          </ul>
        )}
      </section>

      <section className="section">
        <h3 onClick={() => toggleSection('languages')} className="section-title">
          Languages {openSections.languages ? '▼' : '▶'}
        </h3>
        {openSections.languages && (
          <ul>
            <li>English - Fluent</li>
            <li>Spanish - Intermediate</li>
          </ul>
        )}
      </section>

      <section className="section">
        <h3 onClick={() => toggleSection('projects')} className="section-title">
          Projects {openSections.projects ? '▼' : '▶'}
        </h3>
        {openSections.projects && (
          <ul>
            <li>
              <strong>Portfolio Website</strong><br />
              A personal portfolio website showcasing projects and skills.
            </li>
            <li>
              <strong>Machine Learning Model</strong><br />
              Developed a predictive model to analyze customer behavior.
            </li>
          </ul>
        )}
      </section>

      <section className="section">
        <h3 onClick={() => toggleSection('references')} className="section-title">
          References {openSections.references ? '▼' : '▶'}
        </h3>
        {openSections.references && (
          <ul>
            <li>Jane Smith - Mentor | Contact: jane.smith@example.com</li>
            <li>Bob Johnson - Former Supervisor | Contact: bob.johnson@example.com</li>
          </ul>
        )}
      </section>
    </div>
  );
};

export default ResumePreview;
