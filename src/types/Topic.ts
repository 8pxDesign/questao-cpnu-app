import { Block } from "./Block";
import { Question } from "./Question";
import { Subtopic } from "./Subtopic";
import { TestQuestion } from "./TestQuestion";

export interface Topic {
  id: number;
  blockId: number;
  numero: number;
  name: string;
  amountQuestions: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  questions: Question[];
  subtopics: Subtopic[];
  testQuestions: TestQuestion[];
  block: Block;
}
