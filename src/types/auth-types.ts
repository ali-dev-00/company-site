export type Permission = string;

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role?: string; 
  isAdmin?: boolean; 
  permissions: Permission[];
}

export interface LoginResponse {
  access_token: string;
  user: AuthUser;
}
export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterUserDto {
  name: string;
  email: string;
  password: string;
  roleId: string;
}