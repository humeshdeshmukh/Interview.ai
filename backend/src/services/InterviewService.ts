import Interview from '../models/Interview';

export const createInterview = async (data: any) => {
    const interview = await Interview.create(data);
    return interview;
};

export const getInterview = async (id: string) => {
    const interview = await Interview.findById(id);
    if (!interview) {
        throw new Error('Interview not found');
    }
    return interview;
};
