// D:\dowunload\Interview master.ai\frontend\src\components\ResumeBuilder\types\resumeTypes.ts

export interface PersonalDetails {
    name: string;
    email: string;
    phone: string;
    address: string;
  }
  
  export interface Education {
    degree: string;
    institution: string;
    year: string;
  }
  
  export interface Experience {
    jobTitle: string;
    company: string;
    startYear: string;
    endYear: string;
  }
  
  export interface Skill {
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
  }
  
  export interface Resume {
    personalDetails: PersonalDetails;
    education: Education[];
    experience: Experience[];
    skills: Skill[];
    summary: string;
  }
  
  // For template-related types
  export interface Template {
    id: string;
    name: string;
    previewImageUrl: string;
    content: any; // You can define a more specific type based on the template structure
  }
  