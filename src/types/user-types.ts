import { Role } from "./role-types";

export interface User {
  _id: string;
  name: string;
  email: string;
  roleId: Role | string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  roleId: string;
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
  password?: string;
  roleId?: string;
}