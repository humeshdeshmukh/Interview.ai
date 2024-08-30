import { Request, Response } from 'express';
import userService from '../services/userService';

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userProfile = await userService.getUserProfile(userId);
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error });
  }
};

export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const updatedProfile = await userService.updateUserProfile(userId, req.body);
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user profile', error });
  }
};
