import { Schema, model } from 'mongoose';
import { questionCategory } from '../../util/questionCategory';
import { InterfaceQuestion } from '../../types/question';

const QuestionSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    category: {
      type: String,
      enum: [
        questionCategory.REST,
        questionCategory.IMAGINATION,
        questionCategory.ACHIEVEMENT,
        questionCategory.ME,
        questionCategory.WE,
      ],
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  {
    collection: 'Questions',
    timestamps: true,
  },
);

export default model<InterfaceQuestion>('Question', QuestionSchema);
