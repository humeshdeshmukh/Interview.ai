// ResumeBuilder.tsx
import React, { useState, useEffect } from 'react';
import TemplateSelector from './TemplateSelector';
import PersonalDetails from './PersonalDetails';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import CertificationsSection from './CertificationsSection';
import ProjectsSection from './ProjectsSection';
import LanguageSkillsSection from './LanguageSkillsSection';
import SummarySection from './SummarySection';
import ReferencesSection from './ReferencesSection';
import DeclarationSection from './DeclarationSection';
import DownloadButton from './DownloadButton';
import ResumePreview from './ResumePreview';
import Header from './Header';
import Footer from './Footer';
import './ResumeBuilder.css';

const ResumeBuilder: React.FC = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('1');
  const [currentStep, setCurrentStep] = useState<number>(0);
  
  // State management for resume sections
  const [personalDetails, setPersonalDetails] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [projects, setProjects] = useState([]);
  const [languageSkills, setLanguageSkills] = useState([]);
  const [summary, setSummary] = useState('');
  const [references, setReferences] = useState([]);
  const [declaration, setDeclaration] = useState('');

  const templates = [
    { id: '1', name: 'Template A', previewImage: '/path/to/template-a-preview.png' },
    { id: '2', name: 'Template B', previewImage: '/path/to/template-b-preview.png' },
    // More templates can be added here
  ];

  useEffect(() => {
    const resumeData = {
      personalDetails,
      education,
      experience,
      skills,
      certifications,
      projects,
      languageSkills,
      summary,
      references,
      declaration,
    };
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [personalDetails, education, experience, skills, certifications, projects, languageSkills, summary, references, declaration]);

  const handleReset = () => {
    setPersonalDetails({});
    setEducation([]);
    setExperience([]);
    setSkills([]);
    setCertifications([]);
    setProjects([]);
    setLanguageSkills([]);
    setSummary('');
    setReferences([]);
    setDeclaration('');
    setCurrentStep(0); // Reset the current step
  };

  const nextStep = () => {
    if (currentStep < 10) { // Adjusted to include preview step
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="resume-builder">
      <Header /> {/* Header component */}

      <TemplateSelector 
        templates={templates} 
        selectedTemplateId={selectedTemplateId} 
        onTemplateSelect={setSelectedTemplateId} 
      />

      <div className="resume-sections">
        <div id="personal-details">{currentStep === 0 && <PersonalDetails onChange={setPersonalDetails} />}</div>
        <div id="education">{currentStep === 1 && <EducationSection onChange={setEducation} />}</div>
        <div id="experience">{currentStep === 2 && <ExperienceSection onChange={setExperience} />}</div>
        <div id="skills">{currentStep === 3 && <SkillsSection onChange={setSkills} />}</div>
        <div id="certifications">{currentStep === 4 && <CertificationsSection onChange={setCertifications} />}</div>
        <div id="projects">{currentStep === 5 && <ProjectsSection onChange={setProjects} />}</div>
        <div id="languages">{currentStep === 6 && <LanguageSkillsSection onChange={setLanguageSkills} />}</div>
        <div id="summary">{currentStep === 7 && <SummarySection onChange={setSummary} />}</div>
        <div id="references">{currentStep === 8 && <ReferencesSection onChange={setReferences} />}</div>
        <div id="declaration">{currentStep === 9 && <DeclarationSection onChange={setDeclaration} />}</div>
        {currentStep === 10 && (
          <ResumePreview 
            templateId={selectedTemplateId}
            personalDetails={personalDetails}
            education={education}
            experience={experience}
            skills={skills}
            certifications={certifications}
            projects={projects}
            languageSkills={languageSkills}
            summary={summary}
            references={references}
            declaration={declaration}
          />
        )}
      </div>

      <div className="navigation-buttons">
        <button onClick={prevStep} disabled={currentStep === 0}>Previous</button>
        <button onClick={nextStep} disabled={currentStep === 10}>Next</button>
      </div>

      <DownloadButton templateId={selectedTemplateId} /> {/* Updated Download Button with multiple options */}
      <button className="reset-button" onClick={handleReset}>Reset All</button>
    </div>
  );
};

export default ResumeBuilder;
