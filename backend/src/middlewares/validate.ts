import { Request, Response, NextFunction } from 'express';
import { validationResult, body } from 'express-validator'; // Ensure this import is correct

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next(); // Proceed to the next middleware or route
};

export default validateRequest;
