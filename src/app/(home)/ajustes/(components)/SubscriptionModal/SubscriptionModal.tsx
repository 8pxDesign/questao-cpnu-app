import { ResponsiveModal } from "@/components/smart/ResponsiveModal/responsiveModal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";
import NiceModal from "@ebay/nice-modal-react";
import { ExternalLink } from "lucide-react";


const SubscriptionModal = NiceModal.create(() => {
  return (
    <ResponsiveModal title="Minha assinatura" size="sm" contentClassName="flex flex-col gap-4 !h-auto">
        <div className=" gap-4 flex flex-col">
          <Card className="bg-muted p-4">
            <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-primary text-sm font-extrabold">Concurso.app</span>
                  <Button variant="secondary" className="bg-background" size="sm">Expira em 22/08/2026</Button>
                </div>
            </div>
          </Card>
            
          <div className="justify-start flex flex-col gap-2">
            <span className="text-xs text-muted-foreground text-left">Sua assinatura é gerenciada pela Hotmart.</span>
            <Button variant="outline" className="justify-between">
              <div className="flex gap-1 items-center">
                <img src="/images/hotmart.svg" alt="Logo" className="w-4 h-4" />
                <p>Gerenciar minha assinatura</p>
              </div>
              <ExternalLink width={16} height={16}/>
            </Button>
          </div>
        </div>
    </ResponsiveModal>
  )
});

NiceModal.register("SubscriptionModal", SubscriptionModal); 

const openSubscriptionModal = () =>
  NiceModal.show("SubscriptionModal");
const closeSubscriptionModal = () =>
  void NiceModal.hide("SubscriptionModal");

export {
  SubscriptionModal,
  openSubscriptionModal,
  closeSubscriptionModal,
};
