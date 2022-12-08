import { Document } from 'mongoose';

export interface InterfaceUser extends Document {
  email: string;
  password: string;
  nickname: string;
  deleted_at: Date;
}
