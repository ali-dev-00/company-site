import {
  getFromServer,
  postToServer,
  putToServer,
  deleteFromServer,
  ServerResponse,
} from "../lib/requests";
import { User, CreateUserDto, UpdateUserDto } from "../types/user-types";


export const getUsers = async (
  page = 1,
  limit = 10
): Promise<ServerResponse> => {
  return await getFromServer(`users?page=${page}&limit=${limit}`);
};


export const getAllUsers = async (): Promise<ServerResponse> => {
  return await getFromServer("users/all");
};

export const getUserById = async (
  id: string
): Promise<ServerResponse> => {
  return await getFromServer(`users/${id}`);
};


export const createUser = async (
  payload: CreateUserDto
): Promise<ServerResponse> => {
  return await postToServer("users", payload);
};

export const updateUser = async (
  id: string,
  payload: UpdateUserDto
): Promise<ServerResponse> => {
  return await putToServer(`users/${id}`, payload);
};


export const deleteUser = async (
  id: string
): Promise<ServerResponse> => {
  return await deleteFromServer(`users/${id}`);
};