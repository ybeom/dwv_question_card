import { Schema, model } from 'mongoose';
import { InterfaceAnswer } from '../../types/answer';

const AnswerSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    questionId: {
      type: Schema.Types.ObjectId,
      ref: 'Question',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  {
    collection: 'Answers',
    timestamps: true,
  },
);

export default model<InterfaceAnswer>('Answer', AnswerSchema);
