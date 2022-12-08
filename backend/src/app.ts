import express, { Express } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import path from 'path';

import { envValidator } from './middlewares/validation/envValidator';
import { connectMongoDB } from './db';
import { v1Router } from './routes';
import { errorHandler } from './middlewares/errorHandler';

class Server {
  app: Express;

  constructor() {
    const app = express();
    this.app = app;
  }
  connectDB() {
    connectMongoDB();
  }
  setMiddleware() {
    dotenv.config({
      path: path.resolve(process.env.NODE_ENV === 'production' ? '.procution.env' : '.env'),
    });
    envValidator();

    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  setRoute() {
    this.app.use('/api/v1', v1Router);
  }
  setErrorHandler() {
    this.app.use(errorHandler);
  }
  init() {
    this.setMiddleware();
    this.connectDB();
    this.setRoute();
    this.setErrorHandler();
  }
  start() {
    this.init();
    this.app.listen(process.env.BACKEND_PORT, () => {
      console.log(`${process.env.BACKEND_PORT}포트에 정상적으로 백엔드 서버를 시작하였습니다.`);
    });
  }
}

const server = new Server();
server.start();
