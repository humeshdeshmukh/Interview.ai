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

const ResumeBuilder: React.FC = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('1');
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Consolidate section data state into a single object for easier management
  const [resumeData, setResumeData] = useState({
    personalDetails: {},
    education: [],
    experience: [],
    skills: [],
    certifications: [],
    projects: [],
    languageSkills: [],
    summary: '',
    references: [],
    declaration: '',
  });

  const templates = [
    { id: '1', name: 'Template A', previewImage: 'https://th.bing.com/th/id/OIP.Afs-ZLNXhcQUI6cfEMVTewHaKe?rs=1&pid=ImgDetMain' },
    { id: '2', name: 'Template B', previewImage: 'https://www.cakeresume.com/cdn-cgi/image/fit=scale-down,format=auto,w=1200/https://images.cakeresume.com/images/7fc033e0-5121-4af9-9fa6-87633e154af7.png' },
  ];

  // Save data to localStorage on change
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const handleReset = () => {
    setResumeData({
      personalDetails: {},
      education: [],
      experience: [],
      skills: [],
      certifications: [],
      projects: [],
      languageSkills: [],
      summary: '',
      references: [],
      declaration: '',
    });
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < 10) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="resume-builder container mx-auto p-4">
      <Header />

      <TemplateSelector 
        templates={templates} 
        selectedTemplateId={selectedTemplateId} 
        onTemplateSelect={setSelectedTemplateId} 
      />

      {/* Progress bar */}
      <div className="progress-bar w-full bg-gray-200 rounded-full h-1.5 mb-6">
        <div
          className="bg-blue-500 h-1.5 rounded-full"
          style={{ width: `${(currentStep / 10) * 100}%` }}
        />
      </div>

      {/* Dynamic section rendering */}
      <div className="resume-sections">
        {currentStep === 0 && <PersonalDetails onChange={(data) => setResumeData({ ...resumeData, personalDetails: data })} />}
        {currentStep === 1 && <EducationSection onChange={(data) => setResumeData({ ...resumeData, education: data })} />}
        {currentStep === 2 && <ExperienceSection onChange={(data) => setResumeData({ ...resumeData, experience: data })} />}
        {currentStep === 3 && <SkillsSection onChange={(data) => setResumeData({ ...resumeData, skills: data })} />}
        {currentStep === 4 && <CertificationsSection onChange={(data) => setResumeData({ ...resumeData, certifications: data })} />}
        {currentStep === 5 && <ProjectsSection onChange={(data) => setResumeData({ ...resumeData, projects: data })} />}
        {currentStep === 6 && <LanguageSkillsSection onChange={(data) => setResumeData({ ...resumeData, languageSkills: data })} />}
        {currentStep === 7 && <SummarySection onChange={(data) => setResumeData({ ...resumeData, summary: data })} />}
        {currentStep === 8 && <ReferencesSection onChange={(data) => setResumeData({ ...resumeData, references: data })} />}
        {currentStep === 9 && <DeclarationSection onChange={(data) => setResumeData({ ...resumeData, declaration: data })} />}
        {currentStep === 10 && (
          <ResumePreview 
            templateId={selectedTemplateId}
            {...resumeData} // Spread the resume data
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === 10}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Download and Reset Buttons */}
      <div className="flex justify-between mt-4">
        <DownloadButton templateId={selectedTemplateId} />
        <button onClick={handleReset} className="bg-red-500 text-white px-4 py-2 rounded">
          Reset All
        </button>
      </div>
      
    
    </div>
  );
};

export default ResumeBuilder;
