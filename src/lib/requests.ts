import { removeAuthData } from "@/services/auth.service";
import { getCookie } from "cookies-next";

export type ServerResponse = {
  status?: boolean;
  message?: string;
  success?: string;
  pagination?: any;
  data?: any;
  items?: any;
};

const getHeaders = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', '*/*');
  const token = getCookie('token');  
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }
  return headers;
};

const apiRequest = async (
  urlPath: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS',
  body?: Record<string, any> | FormData
): Promise<ServerResponse> => {
  const requestOptions: RequestInit = {
    method,
    headers: getHeaders(),
    body: body ? JSON.stringify(body) : undefined,
    credentials: 'include', 
  };

  if (body instanceof FormData) {
    delete requestOptions.headers;
    requestOptions.body = body;
  }

  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
    const response = await fetch(`${backendUrl}/api/${urlPath}`, requestOptions);
    const result = await response.json();
    if (response.status === 401 || response.status === 403) {
      if (window.location.pathname !== '/signin') {
         removeAuthData()
        window.location.href = '/signin'; 
      }
    }

    return result;
  } catch (error) {
    return { status: false, message: `Error occurred: ${(error as Error).message}` };
  }
};


export const postToServer = async (urlPath: string, body: Record<string, any>): Promise<ServerResponse> => {
  return apiRequest(urlPath, 'POST', body);
};


export const getFromServer = async (urlPath: string): Promise<ServerResponse> => {
  return apiRequest(urlPath, 'GET');
};


export const putToServer = async (urlPath: string, body: Record<string, any>): Promise<ServerResponse> => {
  return apiRequest(urlPath, 'PUT', body);
};


export const deleteFromServer = async (urlPath: string): Promise<ServerResponse> => {
  return apiRequest(urlPath, 'DELETE');
};
