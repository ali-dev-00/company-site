// services/roles.service.ts

import { getFromServer, postToServer, putToServer, deleteFromServer, ServerResponse } from '../lib/requests';
import { CreateRoleDto, UpdateRoleDto, Role } from '../types/role-types';

export const getRoles = async (page = 1, limit = 10): Promise<ServerResponse<Role[]>> => {
  return await getFromServer<Role[]>(`roles?page=${page}&limit=${limit}`);
};

export const getRoleById = async (id: string): Promise<ServerResponse<Role>> => {
  return await getFromServer<Role>(`roles/${id}`);
};

export const createRole = async (data: CreateRoleDto): Promise<ServerResponse<Role>> => {
  return await postToServer<Role>('roles', data);
};

export const updateRole = async (id: string, data: UpdateRoleDto): Promise<ServerResponse<Role>> => {
  return await putToServer<Role>(`roles/${id}`, data);
};

export const deleteRole = async (id: string): Promise<ServerResponse<null>> => {
  return await deleteFromServer<null>(`roles/${id}`);
};
