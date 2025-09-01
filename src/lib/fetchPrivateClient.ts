"use client";

import { usePaymentModal } from "@/app/(components)/PaymentModal/index.hook";
import { useAuth } from "@clerk/nextjs";

export function usePrivateFetch() {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const { openModal } = usePaymentModal();

  return async function fetchPrivateClient<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {

    const token = await getToken({ template: "questoes_cpnu" });
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(typeof options.headers === "object" && options.headers !== null
        ? options.headers as Record<string, string>
        : {}),
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      ...options,
      headers,
      cache: "no-store",
    });

    if (!res.ok) {
      if(res.status === 402){
          openModal();
      }
      const text = await res.text().catch(() => "");
      throw new Error(`HTTP ${res.status} - ${text}`);
    }

    return (await res.json()) as T;
  };
}
