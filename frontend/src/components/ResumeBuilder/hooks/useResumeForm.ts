// D:\dowunload\Interview master.ai\frontend\src\components\ResumeBuilder\hooks\useResumeForm.ts

import { useState } from 'react';

// Define the shape of the resume form data
interface ResumeFormData {
  personalDetails: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  experience: Array<{
    jobTitle: string;
    company: string;
    startYear: string;
    endYear: string;
  }>;
  skills: string[];
  certifications: string[];
  summary: string;
}

// Custom hook for managing the resume form
const useResumeForm = () => {
  const [formData, setFormData] = useState<ResumeFormData>({
    personalDetails: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    education: [],
    experience: [],
    skills: [],
    certifications: [],
    summary: '',
  });

  // Handle input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add education
  const addEducation = (degree: string, institution: string, year: string) => {
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, { degree, institution, year }],
    }));
  };

  // Add experience
  const addExperience = (jobTitle: string, company: string, startYear: string, endYear: string) => {
    setFormData((prev) => ({
      ...prev,
      experience: [...prev.experience, { jobTitle, company, startYear, endYear }],
    }));
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      personalDetails: {
        name: '',
        email: '',
        phone: '',
        address: '',
      },
      education: [],
      experience: [],
      skills: [],
      certifications: [],
      summary: '',
    });
  };

  return { formData, handleChange, addEducation, addExperience, resetForm };
};

export default useResumeForm;
