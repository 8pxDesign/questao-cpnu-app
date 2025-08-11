'use client';

import { ChevronRight, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardAction, CardContent, CardTitle } from "@/components/ui/card";
import { Topic } from "@/types/Topic";
import { ChoiceTopicProps } from "./index.type";

import React from "react";

export const ChoiceTopics = ({ topics }: ChoiceTopicProps) => {
    const [search, setSearch] = React.useState("");

    function normalizeText(text: string) {
        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/\p{Diacritic}/gu, '');
    }

    const filteredTopics = React.useMemo(() => {
        const normalizedSearch = normalizeText(search);
        return topics.filter((topic) =>
            normalizeText(topic.name).includes(normalizedSearch)
        );
    }, [topics, search]);

    return <div className="flex flex-col gap-[1rem] w-full">
        <div className="grid w-full items-center gap-1.5">
            <div className="relative w-full">
                <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
                    <SearchIcon className="h-4 w-4" />
                </div>
                <Input
                    id="search"
                    type="search"
                    placeholder="Buscar eixo temático"
                    className="w-full rounded-lg bg-background pl-8"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {filteredTopics.map((topic) => {
                return <Card key={topic.id}>
                    <CardContent>
                        <CardTitle className="flex items-center justify-between">
                            <h3 className="font-normal capitalize">{topic.name}</h3>
                            <CardAction>
                                <ChevronRight />
                            </CardAction>
                        </CardTitle>
                    </CardContent>
                </Card>
            })}
        </div>
    </div>
}