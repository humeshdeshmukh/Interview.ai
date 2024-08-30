import { Router } from 'express';
import {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume
} from '../controllers/resumeController';

const router = Router();

router.post('/resumes', createResume);
router.get('/resumes', getResumes);
router.get('/resumes/:id', getResumeById);
router.put('/resumes/:id', updateResume);
router.delete('/resumes/:id', deleteResume);

export default router;
