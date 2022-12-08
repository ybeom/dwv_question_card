import bcrypt from 'bcrypt';

import { userModel, UserModel } from '../db';
import { InterfaceUser, CreateUserDTO, UserWithoutPassword } from '../types/user';

class UserService {
  userModel: UserModel;

  constructor(userModel: UserModel) {
    this.userModel = userModel;
  }
  async addUser(signupUserDTO: CreateUserDTO): Promise<UserWithoutPassword> {
    const user = await this.userModel.findByEmail(signupUserDTO.email);
    if (user) {
      throw new Error('이미 사용중인 이메일입니다. 다른 이멩리을 입려하세요.');
    }
    const hashSalt: number = process.env.HASH_SALT;
    const hashedPassword: string = await bcrypt.hash(signupUserDTO.password, hashSalt);
    const createUserDTO = {
      email: signupUserDTO.email,
      password: hashedPassword,
      nickname: signupUserDTO.nickname,
    };
    const createdNewUser: InterfaceUser = await this.userModel.create(createUserDTO);
    const { password, ...newUserWithoutPassword } = createdNewUser;
    return newUserWithoutPassword;
  }
}

const userService = new UserService(userModel);

export { userService };
