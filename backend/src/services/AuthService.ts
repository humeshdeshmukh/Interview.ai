import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const register = async (data: any) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await User.create({ ...data, password: hashedPassword });
    return user;
};

export const login = async (data: any) => {
    const user = await User.findOne({ email: data.email });
    if (!user || !(await bcrypt.compare(data.password, user.password))) {
        throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return token;
};
