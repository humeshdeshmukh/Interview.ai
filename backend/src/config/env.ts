import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

interface EnvConfig {
  PORT: number;
  MONGO_URI: string;
  JWT_SECRET: string;
  [key: string]: string | number;
}

const envConfig: EnvConfig = {
  PORT: Number(process.env.PORT) || 5000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/interviewmaster',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_here',
};

export default envConfig;
