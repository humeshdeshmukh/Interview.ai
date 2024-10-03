// src/controllers/authController.ts

import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  // Login Method
  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      // Validate the request body
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
      }

      const token = await this.authService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      console.error('Login error:', error); // Log the error details for debugging
      res.status(401).json({ message: 'Authentication failed', error: error.message });
    }
  }

  // Register Method
  public async register(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      // Validate the request body
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
      }

      const newUser = await this.authService.register(email, password);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Registration error:', error); // Log the error details for debugging
      res.status(400).json({ message: 'Registration failed', error: error.message });
    }
  }

  // Validate Token Method
  public async validateToken(req: Request, res: Response): Promise<void> {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Token is required.' });
      }

      const isValid = await this.authService.validateToken(token);
      res.status(200).json({ isValid });
    } catch (error) {
      console.error('Token validation error:', error); // Log the error details for debugging
      res.status(401).json({ message: 'Invalid token', error: error.message });
    }
  }
}
