import { Schema, model } from 'mongoose';
import { InterfaceUser } from 'src/types/user';
const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  {
    collection: 'Users',
    timestamps: true,
  },
);

export default model<InterfaceUser>('User', UserSchema);
