"use client";

import { useAuth } from "@clerk/nextjs";

export function usePrivateFetch() {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  return async function fetchPrivateClient<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    if (!isLoaded || !isSignedIn) {
      throw new Error("Not authenticated");
    }

    const token = await getToken({ template: "questoes_cpnu" });
    if (!token) throw new Error("Token not available");

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...(options.headers || {}),
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`HTTP ${res.status} - ${text}`);
    }

    return (await res.json()) as T;
  };
}
