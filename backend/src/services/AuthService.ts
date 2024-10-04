import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

interface UserData {
    email: string;
    password: string;
    // Add other fields if necessary
}

const register = async (data: UserData) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await User.create({ ...data, password: hashedPassword });
    return user;
};

const login = async (data: UserData): Promise<string> => {
    const user = await User.findOne({ email: data.email });

    // Check if user exists and if password is defined before comparison
    if (!user || !user.password || !(await bcrypt.compare(data.password, user.password))) {
        throw new Error('Invalid credentials');
    }

    // Ensure the JWT_SECRET environment variable is defined
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT Secret is not defined');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return token;
};

export default {
    register,
    login,
};
