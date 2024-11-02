import React, { useState } from 'react';
import './ResumePreview.css';

interface PersonalDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface ResumePreviewProps {
  personalDetails: PersonalDetails;
  education: Array<{ degree: string; institution: string; year: string }>;
  experience: Array<{ jobTitle: string; company: string; year: string; description: string }>;
  certifications: string[];
  languages: string[];
  projects: Array<{ title: string; description: string }>;
  references: Array<{ name: string; relationship: string; contact: string }>;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({
  personalDetails,
  education,
  experience,
  certifications,
  languages,
  projects,
  references,
}) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    education: false,
    experience: false,
    certifications: false,
    languages: false,
    projects: false,
    references: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="resume-preview">
      <h2>{personalDetails.name}</h2>
      <p>{personalDetails.email} | {personalDetails.phone}</p>
      <p>{personalDetails.address}</p>

      <div className="section">
        <h3 onClick={() => toggleSection('education')} className="section-title">
          Education {openSections.education ? '-' : '+'}
        </h3>
        {openSections.education && (
          <ul>
            {education.map((edu, index) => (
              <li key={index}>{edu.degree} from {edu.institution} ({edu.year})</li>
            ))}
          </ul>
        )}
      </div>

      <div className="section">
        <h3 onClick={() => toggleSection('experience')} className="section-title">
          Experience {openSections.experience ? '-' : '+'}
        </h3>
        {openSections.experience && (
          <ul>
            {experience.map((exp, index) => (
              <li key={index}>
                <strong>{exp.jobTitle}</strong> at {exp.company} ({exp.year})<br />
                {exp.description}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="section">
        <h3 onClick={() => toggleSection('certifications')} className="section-title">
          Certifications {openSections.certifications ? '-' : '+'}
        </h3>
        {openSections.certifications && (
          <ul>
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="section">
        <h3 onClick={() => toggleSection('languages')} className="section-title">
          Languages {openSections.languages ? '-' : '+'}
        </h3>
        {openSections.languages && (
          <ul>
            {languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="section">
        <h3 onClick={() => toggleSection('projects')} className="section-title">
          Projects {openSections.projects ? '-' : '+'}
        </h3>
        {openSections.projects && (
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <strong>{project.title}</strong><br />
                {project.description}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="section">
        <h3 onClick={() => toggleSection('references')} className="section-title">
          References {openSections.references ? '-' : '+'}
        </h3>
        {openSections.references && (
          <ul>
            {references.map((ref, index) => (
              <li key={index}>
                {ref.name} - {ref.relationship} | Contact: {ref.contact}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
