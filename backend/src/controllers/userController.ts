import { Request, Response, NextFunction } from 'express';
import { userService } from '../services';
import { InterfaceUser, CreateUserDTO, UserWithoutPassword } from '../types/user';

const signupUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password, nickname } = req.body as Pick<
      InterfaceUser,
      'email' | 'password' | 'nickname'
    >;
    const signupUserDTO: CreateUserDTO = { email, password, nickname };
    const signupUser: UserWithoutPassword | null = await userService.addUser(signupUserDTO);
    res.status(201).json({ data: signupUser });
  } catch (err) {
    next(err);
  }
};

export { signupUser };
