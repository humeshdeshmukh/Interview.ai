import mongoose, { Document, Schema } from 'mongoose';

// Define an interface for the User document
export interface IUser extends Document {
    username: string;
    password: string;
}

// Create a schema for the User model
const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensure the username is unique
        trim: true, // Trim whitespace from username
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the User model
const User = mongoose.model<IUser>('User', UserSchema);

export default User;
