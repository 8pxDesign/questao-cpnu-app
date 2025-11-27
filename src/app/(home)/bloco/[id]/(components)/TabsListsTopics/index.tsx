'use client'
import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearchParams } from "next/navigation";

export const TabsListsTopics = () => {

    const searchParams = useSearchParams();
    const tipoQuestaoParams = searchParams.get('tipoQuestao');
    const tipoQuestao = tipoQuestaoParams === 'exercise' ? 'exercise' : 'question';

    return <>{tipoQuestao === 'question' && <TabsList className="w-full justify-center">
        <TabsTrigger value={'eixos'}>Temas </TabsTrigger>
        <TabsTrigger value={'temas'}> Sub temas</TabsTrigger>
    </TabsList>}
    </>
}