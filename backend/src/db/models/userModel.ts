import User from '../schemas/userSchema';
import { UserDoc, CreateUserDTO, UserDocLean, UserWithoutPassword } from '../../types/user';

export class UserModel {
  async findByEmail(email: string): Promise<UserDoc | null> {
    const user = await User.findOne({ email, deleted_at: null });
    return user;
  }
  async create(createUserDTO: CreateUserDTO): Promise<UserWithoutPassword> {
    const createdNewUser: UserDocLean = await (await User.create(createUserDTO)).toObject();
    const { password, ...rest } = createdNewUser;
    return rest;
  }
}

const userModel = new UserModel();
export { userModel };
