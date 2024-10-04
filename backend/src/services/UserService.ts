import User from '../models/User';

// Function to get a user by ID
export const getUser = async (id: string) => {
    const user = await User.findById(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

// You can add more user-related functions here if needed

// Default export object to allow easier import
const UserService = {
    getUser,
    // Add other functions here
};

export default UserService; // Default export
