import { Document } from 'mongoose';

export interface InterfaceUser extends Document {
  email: string;
  password: string;
  nickname: string;
}

export interface CreateUserDTO {
  email: string;
  password: string;
  nickname: string;
}

export interface UserWithoutPassword {
  email: string;
  nickname: string;
}
