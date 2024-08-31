import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel'; // Make sure this path is correct

export class AuthService {
  public async login(email: string, password: string): Promise<string> {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password');
    }
    return jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
  }

  public async register(email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = User.create({ email, password: hashedPassword });
    return await user.save();
  }

  public async validateToken(token: string): Promise<boolean> {
    try {
      jwt.verify(token, process.env.JWT_SECRET as string);
      return true;
    } catch (error) {
      return false;
    }
  }
}
