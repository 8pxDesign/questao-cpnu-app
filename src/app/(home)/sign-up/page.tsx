"use client";

import { SignIn, SignUp } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      <div className="hidden md:block flex-1 bg-cover bg-center" style={{ backgroundImage: 'url(/images/signin-cover.png)' }} />
      <div className="flex-1 flex items-center justify-center">
        <SignUp signInUrl='/sign-in' />
      </div>
    </div>
  );
}
