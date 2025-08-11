import { TestQuestion } from "./TestQuestion";

export interface Test {
  id: number;
  name: string;
  level: string;
  createdAt?: Date;
  updatedAt?: Date;
  testQuestions: TestQuestion[];
}
