import { User } from "@clerk/nextjs/server";
import { Question } from "./Question";
import { Alternative } from "./Alternative";

export interface QuestionAnswered {
    id: number;
    questionId: number;
    userId: number;
    alternativeId: number;
    isCorrect: boolean;
    user: User;
    question: Question;
    alternative: Alternative;
}