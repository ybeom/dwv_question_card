import express from 'express';
import { userRouter } from './userRouter';

const v1Router = express.Router();

v1Router.use('/users', userRouter);

export { v1Router };
