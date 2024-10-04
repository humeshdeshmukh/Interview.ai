import Feedback from '../models/Feedback';

export const giveFeedback = async (data: any) => {
    const feedback = await Feedback.create(data);
    return feedback;
};
