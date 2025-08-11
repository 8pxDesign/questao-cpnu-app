import { auth } from "@clerk/nextjs/server";

export const fetchPrivateServer = async <T>(url: string, options: RequestInit = {}) => {

  const { userId, getToken } = await auth()

  const token = userId ? await getToken({template: 'questoes_cpnu'}) : null;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  const responseJson = (await response.json()) as T;

  return responseJson;
}