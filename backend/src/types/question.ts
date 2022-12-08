import { Document, Schema } from 'mongoose';

enum Direction {
  '쉼',
  '상상',
  '성취',
  '나',
  '우리',
}

export interface InterfaceQuestion extends Document {
  user_id: Schema.Types.ObjectId;
  category: Direction;
  question: String;
}
