import { ResponsiveModal } from "@/components/smart/ResponsiveModal/responsiveModal"
import { Card } from "@/components/ui/card";
import { CredenzaFooter } from "@/components/ui/credenza";
import NiceModal from "@ebay/nice-modal-react";
import { SquarePlus } from "lucide-react";


const TutorialDownloadApp = NiceModal.create(() => {
    return (
        <ResponsiveModal title="Instalar o aplicativo" size="md">
            <div className=" gap-4 flex flex-col mt-4">
                <Card className="bg-accent p-4">
                    <div className="flex gap-4">
                        <img src="/images/android.png" alt="Logo" className="w-12 h-12" />
                        <div className="flex flex-col gap-1">
                            <span className="text-primary text-sm font-extrabold">Concurso.app</span>
                            <span className="text-muted-foreground text-xs font-normal">Concurso.app</span>
                        </div>
                    </div>
                </Card>

                <CredenzaFooter className="!justify-start flex p-0 pl-4">
                    <ol className="list-decimal  flex flex-col gap-2">
                        <li className="text-sm text-card-foreground font-normal">
                            <div className="flex items-center gap-1">
                                <p>Toque em no</p>
                                <img src="/images/shareIcon.svg" alt="Ícone de compartilhar" />
                                <p>menu do navegador.</p>
                            </div>
                        </li>
                        <li className="text-sm text-card-foreground font-normal">
                            <div className="flex items-center gap-1">
                                <p>Role e selecione</p>
                                <div className="flex rounded-md bg-muted py-1 px-2 gap-2 items-center h-5">
                                    <SquarePlus className="w-3 h-3" />
                                    <p className="text-[10px] font-medium text-card-foreground">Adicionar à tela de início</p>
                                </div>
                            </div>
                        </li>
                        <li className="text-sm text-card-foreground font-normal">
                            <div className="flex items-center gap-1">
                                <p>Procure pelo ícone</p>
                                <img src="/images/android.png" alt="Logo" className="w-5 h-5" />
                                <p>menu do navegador.</p>
                            </div>
                        </li>
                    </ol>

                </CredenzaFooter>
            </div>
        </ResponsiveModal>
    )
});

NiceModal.register("TutorialDownloadApp", TutorialDownloadApp);

const openTutorialDownloadApp = () =>
  NiceModal.show("TutorialDownloadApp");
const closeTutorialDownloadApp = () =>
  void NiceModal.hide("TutorialDownloadApp");

export {
  TutorialDownloadApp,
  openTutorialDownloadApp,
  closeTutorialDownloadApp,
};
