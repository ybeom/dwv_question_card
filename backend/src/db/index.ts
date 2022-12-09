import mongoose from 'mongoose';
import { logMessages } from '../util/logMessages';

const connectMongoDB = async () => {
  const DB_URL: string = process.env.MONGODB_URL || `mongoDB 주소가 설정되지 않았습니다.`;
  mongoose.set('strictQuery', false);
  mongoose.connect(DB_URL);
  const db = mongoose.connection;
  db.on('connected', () => {
    console.log(logMessages.DB_CONNECTED);
  });
  db.on('error', (err) => {
    console.error(`\n${logMessages.DB_CONNECTED_ERROR}\n ${DB_URL} ${err}`);
  });
};

export * from './models/userModel';
export { connectMongoDB };
