import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

export const Header = () => {
    return <header className="w-full bg-sidebar-background items-center">
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
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    </header>
}