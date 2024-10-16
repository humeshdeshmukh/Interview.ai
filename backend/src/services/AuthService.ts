import { User, IUser } from '../models/User';

export interface UserData {
    email: string;
    password: string;
}

export class AuthService {
    async register(data: UserData): Promise<IUser> {
        // Check if the user already exists
        const existingUser = await User.findOne({ email: data.email });
        if (existingUser) {
            throw new Error('User already exists');
        }

        // Create new user
        const user = new User(data);
        await user.save();
        return user;
    }

    async login(data: UserData): Promise<IUser> {
        const user = await User.findOne({ email: data.email });
        if (!user || !(await user.comparePassword(data.password))) {
            throw new Error('Invalid email or password');
        }
        return user;
    }
}
