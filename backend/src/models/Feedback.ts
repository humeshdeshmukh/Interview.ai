import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    interviewId: mongoose.Schema.Types.ObjectId,
    feedbackText: String,
    givenBy: String,
});

export default mongoose.model('Feedback', feedbackSchema);
