import { removeAuthData } from "@/services/auth.service";
import { getCookie } from "cookies-next";

/**
 * Generic server response wrapper
 */
export type ServerResponse<T = unknown> = {
  access_token? : string ,
  status: boolean;
  message: string;
  success?: string;
  pagination?: {
    page?: number;
    limit?: number;
    total?: number;
  };
  data: T;
};

const getHeaders = () => {
  const headers = new Headers();
  headers.append("Accept", "*/*");
  const token = getCookie("token");
  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }
  return headers;
};

const apiRequest = async <T>(
  urlPath: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS",
  body?: unknown
): Promise<ServerResponse<T>> => {
  const headers = getHeaders();

  const requestOptions: RequestInit = {
    method,
    headers,
    credentials: "include",
  };

  if (body instanceof FormData) {
    // Ensure we do not send an inappropriate JSON content type; rely on browser for multipart boundary
    if (headers.has("Content-Type")) headers.delete("Content-Type");
    requestOptions.body = body;
  } else if (body !== undefined) {
    headers.set("Content-Type", "application/json");
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
    const response = await fetch(`${backendUrl}/api/${urlPath}`, requestOptions);

    let result: ServerResponse<T>;
    try {
      result = (await response.json()) as ServerResponse<T>;
    } catch {
      result = { status: false, message: "Invalid server response", data: {} as T };
    }

    if ((response.status === 401 || response.status === 403) && typeof window !== "undefined") {
      if (window.location.pathname !== "/signin") {
        removeAuthData();
        window.location.href = "/signin";
      }
    }

    return result;
  } catch (error) {
    return {
      status: false,
      message: `Error occurred: ${(error as Error).message}`,
      data: {} as T,
    };
  }
};

export const postToServer = async <T>(
  urlPath: string,
  body: unknown
): Promise<ServerResponse<T>> => apiRequest<T>(urlPath, "POST", body);

export const getFromServer = async <T>(
  urlPath: string
): Promise<ServerResponse<T>> => apiRequest<T>(urlPath, "GET");

export const putToServer = async <T>(
  urlPath: string,
  body: unknown
): Promise<ServerResponse<T>> => apiRequest<T>(urlPath, "PUT", body);

export const deleteFromServer = async <T>(
  urlPath: string
): Promise<ServerResponse<T>> => apiRequest<T>(urlPath, "DELETE");