

export interface LoginDto {
    email: string;
    password: string;
  }
  
  export interface RegisterDto {
    name: string;
    email: string;
    password: string;
    roleId?: string;
  }
  
  export interface User {
    id?: string; 
    name: string;
    email: string;
    role: string;
    permissions: string[];
    isAdmin?: boolean;
  }
  
  export interface AuthResponse {
    data: {
      access_token: string;
      user: User;
    };
  }
  
  export interface LogoutRequest {
    userId: string;
  }
  
  export interface LogoutResponse {
    message: string;
  }
  
  