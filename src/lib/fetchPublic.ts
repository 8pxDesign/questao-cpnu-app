export const fetchPublicServer = async <T>(url: string, options: RequestInit = {}) => {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  const responseJson = (await response.json()) as T;

  return responseJson;
}