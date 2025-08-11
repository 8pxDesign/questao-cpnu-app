'use client'

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { QuestionProps } from "./index.type";

export const Question = ({ question }: QuestionProps) => {
    return <div className="flex gap-[24px] flex-col">
        <p className="text-foreground text-sm leading-tight">{question.statement}</p>
        <div className="flex flex-col">
            {question.alternatives.map((alternative, index) => (
                <Card key={index} className="bg-white mb-2">
                    <CardContent>
                        <CardTitle className="flex items-center justify-between">
                            {alternative.description}
                        </CardTitle>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
}