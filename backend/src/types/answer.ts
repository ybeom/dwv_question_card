import { Document, Schema } from 'mongoose';

export interface InterfaceAnswer extends Document {
  userId: Schema.Types.ObjectId;
  questionId: Schema.Types.ObjectId;
  content: String;
  deleted_at: Date;
}
