import mongoose from 'mongoose';
import winston from 'winston';

export const connectWithRetry = async (logger: winston.Logger, retries = 5) => {
    const dbConnectionString = process.env.DB_CONNECTION_STRING;

    // Ensure that the DB connection string is defined
    if (!dbConnectionString) {
        logger.error('DB_CONNECTION_STRING is not defined in the environment variables');
        throw new Error('DB_CONNECTION_STRING is not defined');
    }

    try {
        await mongoose.connect(dbConnectionString); // Now this is guaranteed to be a string
        logger.info('Connected to MongoDB');
    } catch (err) {
        if (retries === 0) {
            logger.error('Failed to connect to MongoDB after multiple attempts');
            throw new Error('Failed to connect to MongoDB');
        }
        logger.warn(`Failed to connect to MongoDB, retrying... (${retries} retries left)`);
        setTimeout(() => connectWithRetry(logger, retries - 1), 5000);
    }
};

// Export the function as default
export default connectWithRetry;
