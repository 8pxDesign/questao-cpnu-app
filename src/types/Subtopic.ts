import { Question } from "./Question";
import { Topic } from "./Topic";

export interface Subtopic {
  id: number;
  topicId: number;
  name: string;
  parentId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  questions: Question[];
  parent: Subtopic;
  subtopics: Subtopic[];
  topic: Topic;
}
