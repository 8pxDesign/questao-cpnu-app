import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

export const ToastBaixarApp = () => {
  return (
    <Card className="flex items-center flex-row p-4 gap-2 w-[375px]">
      <CardContent className="flex gap-3 px-0 items-center">
        <Button variant="outline" className="border-none shadow-none !p-0">
          <X />
        </Button>
        <img src="/images/android.png" alt="Logo" width={32} height={32} />
        <CardDescription className="p-0 flex text-xs font-normal">
          Obtenha acesso rápido ao nosso aplicativo — instale-o agora no seu dispositivo.
        </CardDescription>
        <CardAction className="flex items-center justify-center self-center">
          <Button>
            Instalar
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  )
}