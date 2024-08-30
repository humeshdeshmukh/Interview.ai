// src/services/authService.ts

import jwt from 'jsonwebtoken';
import { User, IUser } from '../models/user';

export class AuthService {
  private jwtSecret = process.env.JWT_SECRET || 'supersecretkey';

  public async login(email: string, password: string): Promise<string> {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid email or password');
    }

    return this.generateToken(user);
  }

  public async register(email: string, password: string): Promise<IUser> {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }

    const newUser = new User({ email, password });
    return newUser.save();
  }

  public async validateToken(token: string): Promise<boolean> {
    try {
      jwt.verify(token, this.jwtSecret);
      return true;
    } catch (error) {
      return false;
    }
  }

  private generateToken(user: IUser): string {
    return jwt.sign({ id: user._id, email: user.email }, this.jwtSecret, { expiresIn: '1h' });
  }
}
