// src/controllers/authController.ts

import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const token = await this.authService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ message: 'Authentication failed', error });
    }
  }

  public async register(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const newUser = await this.authService.register(email, password);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: 'Registration failed', error });
    }
  }

  public async validateToken(req: Request, res: Response): Promise<void> {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      const isValid = await this.authService.validateToken(token as string);
      res.status(200).json({ isValid });
    } catch (error) {
      res.status(401).json({ message: 'Invalid token', error });
    }
  }
}
