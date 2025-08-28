import { getFromServer, postToServer, putToServer, deleteFromServer } from '../lib/requests';
import {
  CreateUserDto,
  UpdateUserDto,
  User,
} from '../types/user-types';
import { ServerResponse } from '@/lib/requests';

export const getUsers = async (page = 1, limit = 10): Promise<ServerResponse> => {
  return await getFromServer(`users?page=${page}&limit=${limit}`);
};

export const getAllUsers = async (): Promise<ServerResponse> => {
  return await getFromServer('users/all');
};

export const getUserById = async (id: string): Promise<ServerResponse> => {
  return await getFromServer(`users/${id}`);
};

export const createUser = async (data: CreateUserDto): Promise<ServerResponse> => {
  return await postToServer('users', data);
};

export const updateUser = async (id: string, data: UpdateUserDto): Promise<ServerResponse> => {
  return await putToServer(`users/${id}`, data);
};

export const deleteUser = async (id: string): Promise<ServerResponse> => {
  return await deleteFromServer(`users/${id}`);
};