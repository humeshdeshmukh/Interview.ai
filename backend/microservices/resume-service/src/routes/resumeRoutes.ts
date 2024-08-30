import { Router } from 'express';
import { IDatabase } from 'pg-promise';

const router = Router();

export default (db: IDatabase<any>) => {
  
  // Create a new resume
  router.post('/resumes', async (req, res) => {
    try {
      const { userId, content } = req.body;
      const result = await db.one(
        'INSERT INTO resumes(user_id, content) VALUES($1, $2) RETURNING *',
        [userId, content]
      );
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get all resumes
  router.get('/resumes', async (req, res) => {
    try {
      const resumes = await db.any('SELECT * FROM resumes');
      res.json(resumes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get a specific resume
  router.get('/resumes/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const resume = await db.oneOrNone('SELECT * FROM resumes WHERE id = $1', [id]);
      if (resume) {
        res.json(resume);
      } else {
        res.status(404).json({ error: 'Resume not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Update a resume
  router.put('/resumes/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { content } = req.body;
      const result = await db.one(
        'UPDATE resumes SET content = $1 WHERE id = $2 RETURNING *',
        [content, id]
      );
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Delete a resume
  router.delete('/resumes/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await db.none('DELETE FROM resumes WHERE id = $1', [id]);
      res.json({ message: 'Resume deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return router;
};
