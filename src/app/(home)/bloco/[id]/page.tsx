import { BlocoPageProps } from "./page.type";
import { Block } from "@/types/Block";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ChoiceTopics } from "./(components)/ChoiceTopic";
import { Topic } from "@/types/Topic";
import { ChoiceSubTopics } from "./(components)/ChoiceSubTopic";
import { fetchPublicServer } from "@/lib/fetchPublic";
import { QuestionByBlock } from "./(components)/QuestionByBlock";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChoiceHeader } from "./(components)/ChioiceHeader";
import { TabsListsTopics } from "./(components)/TabsListsTopics";


export default async function BlocoPage({ params }: BlocoPageProps) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const bloco = await fetchPublicServer<Block>(`blocks/${id}`, {
        next: { revalidate: 60 * 60 * 24 * 30 }
    });

    const topics = await fetchPublicServer<Topic[]>(`topic/by-block/${id}`, {
        next: { revalidate: 60 * 60 * 24 * 30 }
    });

    
    return <>
        <main className="py-[24px] max-w-[800px] mx-auto px-[16px] flex flex-col gap-[16px]">
            <Link href={`/escolha-tipo/${bloco.id}`} className="flex items-center gap-[8px]">
                <Button variant={'ghost'} >
                    <ArrowLeft />
                    Voltar
                </Button>
            </Link>
            <ChoiceHeader bloco={bloco} />
            <div className="flex flex-col mx-auto  gap-[24px] w-full">
                <QuestionByBlock bloco={bloco} />
                <Tabs className="w-full flex flex-col items-center" defaultValue="eixos">
                    <TabsListsTopics />
                    <TabsContent value="eixos" className="w-full mt-[1rem]">
                        <ChoiceTopics topics={topics} />
                    </TabsContent>
                    <TabsContent value="temas" className="w-full mt-[1rem]">
                        <ChoiceSubTopics topics={topics} />
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    </>
}