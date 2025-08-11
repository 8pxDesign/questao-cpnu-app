import { Block } from "./Block";
import { Question } from "./Question";
import { Test } from "./Test";
import { Topic } from "./Topic";

export interface TestQuestion {
  id: number;
  testId: number;
  questionId: number;
  questionPosition: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  blockId: number | null;
  topicId: number | null;
  block: Block;
  question: Question;
  test: Test;
  topic: Topic;
}
