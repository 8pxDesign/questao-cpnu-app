'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Phone, Sun, Wallet } from "lucide-react"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { SubscriptionModal } from "../SubscriptionModal/SubscriptionModal"
import NiceModal from "@ebay/nice-modal-react"
import Image from "next/image"

export const MenuSetings = () => { 

  return (
    <div className="flex-col gap-4 flex w-full md:w-[500px]">
      <Button className="mt-[10px] text-muted-foreground font-medium text-xs" variant={'secondary'} size={'sm'}>Questões gratuitas diárias: 0/10</Button>
      <UserButton/>
      <Card className="p-2 w-full gap-0 justify-start">
        <CardContent className="flex-col flex p-0">
          <button className="self-start p-2 w-full flex border-b-1 items-center gap-2 text-sm">
            <Sun width={16} height={16} />
            Modo Claro/Escuro
          </button>
          <button className="self-start p-2 w-full flex border-b-1 items-center gap-2 text-sm" onClick={() => NiceModal.show(SubscriptionModal)}>
            <Wallet width={16} height={16} />
            Minha assinatura
          </button>
          <Link href="https://api.whatsapp.com/send/?phone=5561993311671&text=Vim+do+site+e+preciso+de+ajuda.&type=phone_number&app_absent=0" className="self-start p-2 w-full flex border-b-1 items-center gap-2 text-sm">
            <Phone width={16} height={16}/>
            Suporte
          </Link>
          <button className="self-start p-2 w-full flex items-center gap-2 text-sm">
            <FileText width={16} height={16} />
            Termos de uso
          </button>
        </CardContent>
      </Card>

      <Button variant="outline" className="justify-start">
        <Image src="/images/apple.svg" alt="logo" width={16} height={16} />
        Instalar Aplicativo
      </Button>
      
    </div>
  )
}


