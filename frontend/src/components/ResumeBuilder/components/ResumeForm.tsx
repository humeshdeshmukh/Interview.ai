import React, { useState } from 'react';
import './ResumeForm.css';
import PersonalDetails from './PersonalDetails';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import CertificationsSection from './CertificationsSection';
import LanguageSkillsSection from './LanguageSkillsSection';
import ProjectsSection from './ProjectsSection';
import ReferencesSection from './ReferencesSection';
import DeclarationSection from './DeclarationSection';
import DownloadButton from './DownloadButton';
import PrintButton from './PrintButton';

const ResumeForm: React.FC = () => {
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  return (
    <div className="resume-form">
      <h1>Resume Builder</h1>
      <PersonalDetails personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />
      <EducationSection />
      <ExperienceSection />
      <CertificationsSection />
      <LanguageSkillsSection />
      <ProjectsSection />
      <ReferencesSection />
      <DeclarationSection />
      <div className="buttons">
        <DownloadButton />
        <PrintButton />
      </div>
    </div>
  );
};

export default ResumeForm;
