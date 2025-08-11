import { Question } from "./Question";
import { QuestionAnswered } from "./QuestionAnswered";

export interface Alternative {
  id: number;
  questionId: number;
  position: number;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  correctAnswer: boolean;
  question: Question;
  questionAnswereds: QuestionAnswered[];
}
