import mongoose from 'mongoose';

const interviewSchema = new mongoose.Schema({
    title: String,
    date: Date,
    interviewer: String,
    interviewee: String,
});

export default mongoose.model('Interview', interviewSchema);
