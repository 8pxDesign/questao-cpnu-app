'use client'

import { Dialog, DialogContent } from "@/components/ui/dialog";

import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useAuthModal } from "./index.hook";


export const AuthModal = () => {
    const { isOpen } = useAuthModal();
    const completeActualURL = typeof window !== 'undefined' ? `${window.location.pathname}?${window.location.search}` : '/';
    if (!isOpen) return null;
    return (
        <>
            <SignedOut>
                <Dialog open={isOpen} >
                    <DialogTitle className="hidden">Entrar</DialogTitle>
                    <DialogContent showCloseButton={false} className="flex flex-col p-[0] w-[400px] sm:max-w-[calc(-2.5rem_+_100vw)] bg-transparent border-0 items-center">
                        <SignIn routing="hash" forceRedirectUrl={completeActualURL ?? '/'} />
                    </DialogContent>
                </Dialog>
            </SignedOut>
            <SignedIn>
                <div className="hidden"></div>
            </SignedIn>
        </>
    )
}