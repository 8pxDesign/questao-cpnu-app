import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { CountQuestion } from "../CountQuestion/CountQuestion"

export const Header = () => {

    return <header className="w-full bg-sidebar-background items-center sticky top-0 z-10">
        <div className="flex justify-between items-center p-4 gap-4 max-w-[1280px] mx-auto">
            <img src="/images/logo.svg" alt="Simula CPNU" width={120} />
            <div className="flex items-center gap-4">
                <SignedOut>
                    <SignInButton >
                        <Button variant={'ghost'} size={'lg'} >Logar</Button>
                    </SignInButton>
                    <SignUpButton>
                        <Button variant={'outline'} size={'lg'}>Cadastre-se</Button>
                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <div className="flex items-center gap-4">
                        <CountQuestion />
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </div>
    </header>
}