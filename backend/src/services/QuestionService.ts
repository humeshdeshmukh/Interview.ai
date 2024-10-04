import Question from '../models/Question';

export const createQuestion = async (data: any) => {
    const question = await Question.create(data);
    return question;
};
