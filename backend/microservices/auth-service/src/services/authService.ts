import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User, IUser } from '../models/user'; // Ensure this path is correct

export class AuthService {
  /**
   * Authenticate a user and generate a JWT token
   * @param email - The email of the user
   * @param password - The password of the user
   * @returns A JWT token
   * @throws Error if email or password is incorrect
   */
  public async login(email: string, password: string): Promise<string> {
    // Find the user by email
    const user = await User.findOne({ email }).exec(); // Use .exec() for Mongoose query

    // If no user is found or password is incorrect, throw an error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password');
    }

    // Generate a JWT token
    return jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
  }

  /**
   * Create a new user with a hashed password
   * @param email - The email of the new user
   * @param password - The password of the new user
   * @returns The created user
   */
  public async register(email: string, password: string): Promise<IUser> {
    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });

    // Save the user to the database
    return await user.save();
  }

  /**
   * Validate a JWT token to check if it's valid
   * @param token - The JWT token to validate
   * @returns True if the token is valid, otherwise false
   */
  public async validateToken(token: string): Promise<boolean> {
    try {
      // Verify the token using the JWT secret
      jwt.verify(token, process.env.JWT_SECRET as string);
      return true;
    } catch (error) {
      // Log the error if needed
      console.error('Token validation error:', error);
      return false;
    }
  }
}
