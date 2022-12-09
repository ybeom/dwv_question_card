import bcrypt from 'bcrypt';

import { userModel, UserModel } from '../db';
import { UserDoc, CreateUserDTO, UserWithoutPassword, UserDocLean } from '../types/user';

class UserService {
  userModel: UserModel;

  constructor(userModel: UserModel) {
    this.userModel = userModel;
  }
  async addUser(signupUserDTO: CreateUserDTO): Promise<UserWithoutPassword> {
    const user = await this.userModel.findByEmail(signupUserDTO.email);
    if (user) {
      throw new Error('이미 사용중인 이메일입니다. 다른 이메일을 입력하세요.');
    }
    const salt: number = parseInt(process.env.HASH_SALT || '10');
    const hashedPassword: string = await bcrypt.hash(signupUserDTO.password, salt);
    const createUserDTO = {
      email: signupUserDTO.email,
      password: hashedPassword,
      nickname: signupUserDTO.nickname,
    };
    const createdNewUser: UserWithoutPassword = await this.userModel.create(createUserDTO);
    return createdNewUser;
  }
}

const userService = new UserService(userModel);

export { userService };
