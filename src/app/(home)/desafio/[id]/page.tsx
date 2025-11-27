import { Alternative } from "@/types/Alternative";
import { Question } from "@/types/Question";
import { Topic } from "@/types/Topic";
import { QUESTIONS } from "./page.data";
import { QuestionChallenge } from "./(components)/QuestionChallenge";
import { Block } from "@/types/Block";

interface DesafioPageProps {
    params: Promise<{
        id: string;
    }>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type
export interface AlternativeQuestionChallenge extends Pick<Alternative, 'id' | 'description' | 'position' | 'correctAnswer'> {}
export interface QuestionChallenge extends Pick<Question, 'statement' | 'comment'> {
    alternatives: Array<AlternativeQuestionChallenge>;
    topic: Pick<Topic, 'name'>;
}
export interface QuestionChallengeData {
    [key: number]: {
        questions: Array<QuestionChallenge>
        bloco: Pick<Block, 'id' | 'name'> & {
            link: string;
        };
    }
}

export default async function Page({ params }: DesafioPageProps) {
    const id = Number((await params).id);
    const questionData = QUESTIONS[id];
    const questoes = questionData?.questions || [];

    return <>
        <QuestionChallenge bloco={questionData.bloco} questions={questoes} />
    </>
}