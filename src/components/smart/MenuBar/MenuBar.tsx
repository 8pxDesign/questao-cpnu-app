import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { LayoutDashboard, ListTodo, Settings } from "lucide-react"

interface MenuBarProps {
  className?: string;
  classNameButton?:string;
}


export const MenuBar = ({className, classNameButton}:MenuBarProps) => {
  return (
    <div className={cn("bg-background flex gap-2 items-center justify-center border-t-1 px-6 py-2", className)}>
      <Button className={cn("flex flex-col md:flex-row md:h-6 text-foreground h-14 px-2 py-4 items-center rounded-md bg-background border-none shadow-none hover:bg-sidebar-accent", classNameButton)}>
        <LayoutDashboard />
        <p className="text-foreground text-xs font-medium">Painel</p> 
      </Button>

      <Button className={cn("flex flex-col md:flex-row md:h-6 text-foreground h-14 px-2 py-4 items-center rounded-md bg-background border-none shadow-none hover:bg-sidebar-accent", classNameButton)}>
        <ListTodo />
        <p className="text-foreground text-xs font-medium">Questões</p>
      </Button>

      <Button className={cn("flex flex-col md:flex-row md:h-6 text-muted-foreground h-14 px-2 py-4 items-center rounded-md bg-background border-none shadow-none hover:bg-sidebar-accent", classNameButton)}>
        <Badge className="bg-sidebar-accent rounded-2xl h-4 px-3 py-1 text-muted-foreground">
          <p className="font-medium text-[8px] text-muted-foreground">Em Breve</p>
        </Badge>
        <p className="text-xs font-medium">Flashcards</p>
      </Button>

      <Button className={cn("flex flex-col md:flex-row md:h-6 text-foreground h-14 px-2 py-4 items-center rounded-md bg-background border-none shadow-none hover:bg-sidebar-accent", classNameButton)}>
        <Settings />
        <p className="text-foreground text-xs font-medium">Ajustes</p>
        </Button>
    </div>
  )
}