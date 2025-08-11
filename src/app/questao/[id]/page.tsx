import { fetchPrivateServer } from "@/lib/fetchPrivate";
import { Question as QuestionComponent } from "./(component)/Question";
import { Question } from "@/types/Question";

export default async function Page() {
    const id = "123";
    const question = await fetchPrivateServer<Question>(`question/${id}`, {
        next: { revalidate: 60 * 60 * 24 * 30 } // 30 dias
    });

    return (
        <div className="flex max-w-[800px] flex-col mx-auto mt-[48px] gap-[24px] px-[16px]">
            <QuestionComponent question={question} />
            <div className="self-stretch p-4 bg-sidebar-background rounded-lg inline-flex flex-col justify-center items-start gap-1">
                <h3 className=" text-muted-foreground text-xs leading-none">Bloco 1 - Seguridade social: saúde, assistência social e previdência social</h3>
                <div className="text-muted-foreground text-xs font-bold leading-3">Direito do Trabalho / Direitos constitucionais dos trabalhadores e das trabalhadoras</div>
            </div>

        </div>
    )
}
