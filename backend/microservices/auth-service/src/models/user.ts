import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

// Define the interface for a User document, extending Mongoose's Document
export interface IUser extends Document {
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Define the schema for the User model
const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Middleware to hash the password before saving it to the database
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Only hash if password is modified
  
  try {
    // Hash the password using bcrypt with a salt rounds of 10
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error); // Pass error to next middleware or error handler
  }
});

// Method to compare a given password with the hashed password in the database
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  try {
    // Compare the candidate password with the hashed password
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
};

// Create and export the User model based on the schema
export const User = model<IUser>('User', UserSchema);
