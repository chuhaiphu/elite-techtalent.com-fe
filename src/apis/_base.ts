import { HttpResponse } from "@/interfaces/_base-interface";
import { ApiError } from "@/helpers/classes";
import { parseSetCookie } from "@/helpers/function-helpers";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error("Missing API_URL env variable");
}

export async function api<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<HttpResponse<T>> {
  const url = `${API_URL}${endpoint}`;

  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();
  const headers: HeadersInit = {
    ...(cookieHeader && { "Cookie": cookieHeader }),
    ...options.headers,
  };

  if (!(options.body instanceof FormData)) {
    (headers as Record<string, string>)['Content-Type'] = "application/json";
  }

  const config: RequestInit = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, config);
    const rawSetCookie = response.headers.getSetCookie();
    const parsedCookie = parseSetCookie(rawSetCookie[0]);

    if (endpoint === '/auth/logout') {
      cookieStore.delete('atk');
    } else if (endpoint === '/auth/local') {
      cookieStore.set({
        name: 'atk',
        value: parsedCookie.value,
        httpOnly: parsedCookie.options.httpOnly,
        path: parsedCookie.options.path,
        secure: parsedCookie.options.secure,
        sameSite: parsedCookie.options.sameSite,
        maxAge: parsedCookie.options.maxAge,
        expires: parsedCookie.options.expires,
      });
    }
    const httpResponse: HttpResponse<T> = await response.json();
    return httpResponse;

  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(error instanceof Error ? error.message : 'Unexpected error occurred', "UNKNOWN", 520);
  }
}
