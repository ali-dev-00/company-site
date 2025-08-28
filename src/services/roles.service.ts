// services/roles.service.ts

import { getFromServer, postToServer, putToServer, deleteFromServer, ServerResponse } from '../lib/requests';
import { Role } from '../types/role-types';

export interface CreateRoleDto {
  name: string;
  permissions: string[];
  status?: boolean;
}

export interface UpdateRoleDto {
  name?: string;
  permissions?: string[];
  status?: boolean;
}

export const getRoles = async (page = 1, limit = 10): Promise<ServerResponse> => {
  return await getFromServer(`roles?page=${page}&limit=${limit}`);
};

export const getRoleById = async (id: string): Promise<ServerResponse> => {
  return await getFromServer(`roles/${id}`);
};

export const createRole = async (data: CreateRoleDto): Promise<ServerResponse> => {
  return await postToServer('roles', data);
};

export const updateRole = async (id: string, data: UpdateRoleDto): Promise<ServerResponse> => {
  return await putToServer(`roles/${id}`, data);
};

export const deleteRole = async (id: string): Promise<ServerResponse> => {
  return await deleteFromServer(`roles/${id}`);
};