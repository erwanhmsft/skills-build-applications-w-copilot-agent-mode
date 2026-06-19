import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const databaseName = 'octofit_db';
export const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

export const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  return mongoose.connect(mongoUri, { dbName: databaseName });
};
