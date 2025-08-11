"use client";

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      <div className="hidden md:block flex-1 bg-cover bg-center" style={{ backgroundImage: 'url(/images/cover.png)' }} />
      <div className="flex-1 flex items-center justify-center">
        <SignIn signUpUrl='/sign-up' forceRedirectUrl="/escolha-bloco" />
      </div>
    </div>
  );
}
