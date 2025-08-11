import { User } from "@clerk/nextjs/server";
import { TestQuestion } from "./TestQuestion";
import { Topic } from "./Topic";

export interface Block {
  id: number;
  name: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  number?: number;
  isReal?: boolean;
  testQuestions: TestQuestion[];
  topics: Topic[];
  users: User[];
}
