import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

// Define the IUser interface
export interface IUser extends Document {
    identifier: string;
    password: string;
    comparePassword: (password: string) => Promise<boolean>; // Define the comparePassword method
}

// Create the User schema
const UserSchema: Schema = new Schema({
    identifier: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
};

// Create and export the User model
const User = mongoose.model<IUser>('User', UserSchema);
export default User;
