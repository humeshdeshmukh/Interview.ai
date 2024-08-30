import Resume from '../models/resume';

export const createResumeService = async (resumeData: any) => {
  try {
    const newResume = new Resume(resumeData);
    return await newResume.save();
  } catch (error) {
    throw new Error('Error creating resume');
  }
};

export const getResumesService = async () => {
  try {
    return await Resume.find();
  } catch (error) {
    throw new Error('Error fetching resumes');
  }
};

export const getResumeByIdService = async (id: string) => {
  try {
    return await Resume.findById(id);
  } catch (error) {
    throw new Error('Error fetching resume');
  }
};

export const updateResumeService = async (id: string, resumeData: any) => {
  try {
    return await Resume.findByIdAndUpdate(id, resumeData, { new: true });
  } catch (error) {
    throw new Error('Error updating resume');
  }
};

export const deleteResumeService = async (id: string) => {
  try {
    return await Resume.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting resume');
  }
};
