import { postToServer, getFromServer } from '../lib/requests';
import { ServerResponse } from '../lib/requests';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';

const setAuthData = (accessToken: string, user: Record<string, any>) => {
  setCookie('token', accessToken, { maxAge: 30 * 24 * 60 * 60, path: '/' });
  setCookie('permissions', JSON.stringify(user.permissions), { path: '/' });
  setCookie('isAdmin', user.isAdmin, { path: '/' });
  setCookie('role', user.role, { path: '/' });
  setCookie('user', JSON.stringify(user), { path: '/' });
};

export const removeAuthData = () => {
  deleteCookie('token');
  deleteCookie('permissions');
  deleteCookie('isAdmin');
  deleteCookie('role');
  deleteCookie('user');
};

export const loginUser = async (loginData: Record<string, any>): Promise<ServerResponse> => {
  const response = await postToServer('auth/login', loginData);

  if (response.status) {
    const { access_token, user } = response.data;
    await setAuthData(access_token, user);
  }
   
  return response;
};

export const registerUser = async (userData: Record<string, any>): Promise<ServerResponse> => {
  return postToServer('auth/register', userData);
};

export const logoutUser = async (): Promise<ServerResponse> => {
  const response = await postToServer('auth/logout', {});
  
  if (response) {
    removeAuthData();
  }

  return response;
};

export const getUserProfile = async (): Promise<ServerResponse> => {
  return getFromServer('auth/profile');
};

export const isAuthenticated = async (): Promise<boolean> => {
  const token = await getCookie('token');
  return !!token;
};

export const hasPermission = async (permission: string): Promise<boolean> => {
  const permissions = JSON.parse(await getCookie('permissions') || '[]'); 
  return permissions.includes(permission);
};


export const isAdmin = async (): Promise<boolean> => {
  return await getCookie('isAdmin') === 'true';
};

export const getCurrentUser = async (): Promise<Record<string, any> | null> => {
  const user = await getCookie('user'); 
  return user ? JSON.parse(user) : null;
};

export const hasAnyPermissions = () => {
  try {
    const permissions = JSON.parse(getCookie("permissions") as string || "[]")
    return Array.isArray(permissions) && permissions.length > 0
  } catch {
    return false;
  }
};