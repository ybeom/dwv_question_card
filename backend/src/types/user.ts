import { Document, Model, LeanDocument } from 'mongoose';

export interface UserDoc extends Document {
  email: string;
  password: string;
  nickname: string;
}
export interface UserModel extends Model<UserDoc> {}
export type UserDocLean = LeanDocument<UserDoc>;

export interface CreateUserDTO {
  email: string;
  password: string;
  nickname: string;
}

export interface UserWithoutPassword {
  email: string;
  nickname: string;
}
