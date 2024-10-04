import User from '../models/User';

export const getUser = async (id: string) => {
    const user = await User.findById(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};
