import { Router } from 'express';
import { signupUser } from '../controllers/userController';

const userRouter = Router();

userRouter.post('/signup', signupUser);

export { userRouter };
