import { postToServer, getFromServer, ServerResponse } from "../lib/requests";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { AuthUser, LoginResponse } from "../types/auth-types";

const setAuthData = (accessToken: string, user: AuthUser) => {
  setCookie("token", accessToken, { maxAge: 30 * 24 * 60 * 60, path: "/" });
  setCookie("permissions", JSON.stringify(user.permissions), { path: "/" });
  setCookie("isAdmin", String(user.isAdmin || false), { path: "/" });
  setCookie("role", user.role, { path: "/" });
  setCookie("user", JSON.stringify(user), { path: "/" });
};

export const removeAuthData = () => {
  deleteCookie("token");
  deleteCookie("permissions");
  deleteCookie("isAdmin");
  deleteCookie("role");
  deleteCookie("user");
};

export const loginUser = async (
  loginData: { email: string; password: string }
): Promise<ServerResponse<LoginResponse>> => {

  const response = await postToServer<LoginResponse>("auth/login", loginData);

  if (response.status) {
    const { access_token, user } = response.data;
    setAuthData(access_token, user);
  }

  return response;
};

export const registerUser = async (
  userData: { name: string; email: string; password: string; roleId?: string }
): Promise<ServerResponse<AuthUser>> => {
  return postToServer<AuthUser>("auth/register", userData);
};

export const logoutUser = async (): Promise<ServerResponse<null>> => {
  const response = await postToServer<null>("auth/logout", {});
  if (response.status) removeAuthData();
  return response;
};

export const getUserProfile = async (): Promise<ServerResponse<AuthUser>> => {
  return getFromServer<AuthUser>("auth/profile");
};

export const isAuthenticated = async (): Promise<boolean> => {
  return Boolean(getCookie("token"));
};

export const hasPermission = async (permission: string): Promise<boolean> => {
  const permissionsJson = getCookie("permissions") || "[]";
  const permissions: string[] = JSON.parse(permissionsJson.toString());
  return permissions.includes(permission);
};

export const isAdmin = async (): Promise<boolean> => {
  return getCookie("isAdmin") === "true";
};

export const getCurrentUser = async (): Promise<AuthUser | null> => {
  const user = getCookie("user");
  return user ? (JSON.parse(user.toString()) as AuthUser) : null;
};

export const hasAnyPermissions = (): boolean => {
  try {
    const permissions = JSON.parse(getCookie("permissions")?.toString() || "[]");
    return Array.isArray(permissions) && permissions.length > 0;
  } catch {
    return false;
  }
};