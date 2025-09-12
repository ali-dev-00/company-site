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
  console.log("Removing auth data from cookies...");
  
  // List all auth-related cookies to remove
  const authCookies = ["token", "permissions", "isAdmin", "role", "user"];
  
  authCookies.forEach(cookieName => {
    try {
      deleteCookie(cookieName);
      console.log(`Removed cookie: ${cookieName}`);
    } catch (error) {
      console.error(`Failed to remove cookie ${cookieName}:`, error);
    }
  });
  
  // Also try to remove with different path options to ensure cleanup
  authCookies.forEach(cookieName => {
    try {
      deleteCookie(cookieName, { path: "/" });
      deleteCookie(cookieName, { path: "", domain: "localhost" });
    } catch (error) {
      // Ignore errors for alternate deletion attempts
    }
  });
  
  console.log("Auth data removal completed");
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
  try {
    console.log("Starting logout process...");
    const response = await postToServer<null>("auth/logout", {});
    
    // Always remove auth data regardless of API response
    // This ensures frontend is cleared even if backend logout fails
    console.log("Clearing auth data from cookies...");
    removeAuthData();
    
    console.log("Logout completed, auth data cleared");
    return response;
  } catch (error) {
    // Even if logout API fails, clear the frontend data
    console.error("Logout API failed, but clearing local data:", error);
    removeAuthData();
    
    return {
      status: false,
      message: "Logout completed locally",
      data: null
    };
  }
};

export const getUserProfile = async (): Promise<ServerResponse<AuthUser>> => {
  return getFromServer<AuthUser>("auth/profile");
};

export const isAuthenticated = async (): Promise<boolean> => {
  const token = getCookie("token");
  console.log("Checking authentication - Token exists:", !!token);
  
  if (!token) {
    return false;
  }

  // If we have user data in cookies, assume authentication is valid
  // This avoids unnecessary API calls on every check
  const userData = getCookie("user");
  console.log("User data in cookies:", !!userData);
  
  if (userData) {
    try {
      const parsedUser = JSON.parse(userData.toString());
      console.log("User data is valid JSON, user:", parsedUser.email || parsedUser.name);
      return true;
    } catch (error) {
      console.log("Invalid user data in cookies, re-validating...");
    }
  }

  // If no valid user data, verify with server
  console.log("No valid user data, validating token with server...");
  return await validateToken();
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

export const validateToken = async (): Promise<boolean> => {
  const token = getCookie("token");
  if (!token) {
    console.log("No token found in cookies");
    return false;
  }

  console.log("Token exists, validating with server...");
  
  try {
    // Make a simple request to verify token validity
    const response = await getUserProfile();
    console.log("Token validation response:", response.status, response.message);
    
    if (response.status) {
      // Update user data in cookies if successful
      const user = response.data;
      setCookie("user", JSON.stringify(user), { path: "/" });
      setCookie("permissions", JSON.stringify(user.permissions), { path: "/" });
      setCookie("isAdmin", String(user.isAdmin || false), { path: "/" });
      setCookie("role", user.role, { path: "/" });
      console.log("Token validation successful, user data updated");
      return true;
    } else {
      console.log("Token validation failed, removing auth data");
      removeAuthData();
      return false;
    }
  } catch (error) {
    console.error("Token validation error:", error);
    removeAuthData();
    return false;
  }
};

export const refreshUserData = async (): Promise<boolean> => {
  try {
    const response = await getUserProfile();
    if (response.status) {
      const user = response.data;
      setCookie("user", JSON.stringify(user), { path: "/" });
      setCookie("permissions", JSON.stringify(user.permissions), { path: "/" });
      setCookie("isAdmin", String(user.isAdmin || false), { path: "/" });
      setCookie("role", user.role, { path: "/" });
      return true;
    }
    return false;
  } catch (error) {
    console.error("Failed to refresh user data:", error);
    return false;
  }
};

// Debug function to check all auth cookies
export const debugAuthState = (): void => {
  console.log("=== Auth Debug Info ===");
  console.log("Token:", !!getCookie("token"));
  console.log("User:", getCookie("user"));
  console.log("Permissions:", getCookie("permissions"));
  console.log("IsAdmin:", getCookie("isAdmin"));
  console.log("Role:", getCookie("role"));
  console.log("=====================");
};

// Force logout and redirect (useful for dashboard logout button)
export const forceLogoutAndRedirect = async (redirectPath: string = "/signin"): Promise<void> => {
  try {
    console.log("Force logout initiated...");
    await logoutUser();
  } catch (error) {
    console.error("Logout API failed, forcing local cleanup:", error);
  } finally {
    // Ensure cookies are cleared regardless of API response
    removeAuthData();
    
    // Redirect to signin page
    if (typeof window !== "undefined") {
      console.log(`Redirecting to ${redirectPath}`);
      window.location.href = redirectPath;
    }
  }
};

export const hasAnyPermissions = async (): Promise<boolean> => {
  try {
    // Check if we have permissions in cookies first
    const permissionsData = getCookie("permissions");
    if (permissionsData) {
      const permissions = JSON.parse(permissionsData.toString());
      if (Array.isArray(permissions) && permissions.length > 0) {
        return true;
      }
    }

    // If no permissions found, check if user is authenticated and refresh data
    const authenticated = await isAuthenticated();
    if (authenticated) {
      // Try to refresh user data to get latest permissions
      await refreshUserData();
      const updatedPermissions = JSON.parse(getCookie("permissions")?.toString() || "[]");
      return Array.isArray(updatedPermissions) && updatedPermissions.length > 0;
    }
    
    return false;
  } catch (error) {
    console.error("Error checking permissions:", error);
    return false;
  }
};