// D:\dowunload\Interview master.ai\frontend\src\components\ResumeBuilder\index.ts

import ResumeBuilder from './ResumeBuilder';
import { Resume, PersonalDetails, Education, Experience, Skill, Template } from './types/resumeTypes';
import { downloadResumePDF } from './services/downloadService';
import { saveResume, fetchResumes, updateResume, deleteResume } from './services/resumeService';
import { fetchTemplates, getTemplateById } from './services/templateService';

export {
  ResumeBuilder,
  Resume,
  PersonalDetails,
  Education,
  Experience,
  Skill,
  Template,
  downloadResumePDF,
  saveResume,
  fetchResumes,
  updateResume,
  deleteResume,
  fetchTemplates,
  getTemplateById,
};
