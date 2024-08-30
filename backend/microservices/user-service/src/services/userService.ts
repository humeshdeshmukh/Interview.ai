import User from '../models/user';

const getUserProfile = async (userId: string) => {
  return await User.findByPk(userId);
};

const updateUserProfile = async (userId: string, updateData: any) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error('User not found');
  return await user.update(updateData);
};

export default {
  getUserProfile,
  updateUserProfile,
};
