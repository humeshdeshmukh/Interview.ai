import { Request, Response } from 'express';
import Resume from '../models/resume';

export const createResume = async (req: Request, res: Response) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();
    res.status(201).json(newResume);
  } catch (error) {
    res.status(500).json({ message: 'Error creating resume', error });
  }
};

export const getResumes = async (req: Request, res: Response) => {
  try {
    const resumes = await Resume.find();
    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resumes', error });
  }
};

export const getResumeById = async (req: Request, res: Response) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resume', error });
  }
};

export const updateResume = async (req: Request, res: Response) => {
  try {
    const resume = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ message: 'Error updating resume', error });
  }
};

export const deleteResume = async (req: Request, res: Response) => {
  try {
    const resume = await Resume.findByIdAndDelete(req.params.id);
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }
    res.status(200).json({ message: 'Resume deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting resume', error });
  }
};
