import User from '../schemas/userSchema';
import { InterfaceUser, CreateUserDTO } from '../../types/user';

export class UserModel {
  async findByEmail(email: string): Promise<InterfaceUser | null> {
    const user = await User.findOne({ email, deleted_at: null });
    return user;
  }
  async create(createUserDTO: CreateUserDTO): Promise<InterfaceUser> {
    const createdNewUser = await User.create(createUserDTO);
    return createdNewUser;
  }
}

const userModel = new UserModel();
export { userModel };
