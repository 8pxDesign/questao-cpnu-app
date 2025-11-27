'use client';
import { Block } from "@/types/Block";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

interface ChoiceHeaderProps {
    bloco: Block
}
export const ChoiceHeader = ({ bloco }: ChoiceHeaderProps) => {

    const searchParams  = useSearchParams();
    const tipoQuestaoParams = searchParams.get('tipoQuestao');
    const tipoQuestao = tipoQuestaoParams === 'exercise' ? 'exercise' : 'question';
    return (
        <div className="flex flex-col gap-[16px]">
            <div className="w-full h-[160px] relative ">
                <Image src={`/images/${tipoQuestao}.svg`} alt="Questão Prova" fill className="object-contain rounded-lg bg-[#DFE7FF]" />
            </div>
            <h1 className="text-primary text-xl font-extrabold leading-7">{tipoQuestao === 'question' ? 'Questões de prova' : 'Exercícios rápidos'}<span className="text-muted-foreground font-normal"> {bloco.description}</span></h1>
        </div>
    );
};
