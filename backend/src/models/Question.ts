import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    interviewId: mongoose.Schema.Types.ObjectId,
    questionText: String,
    answerText: String,
});

export default mongoose.model('Question', questionSchema);
