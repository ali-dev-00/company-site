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
): Promise<ServerResponse<User[]>> => {
  return await getFromServer<User[]>(`users?page=${page}&limit=${limit}`);
};


export const getAllUsers = async (): Promise<ServerResponse<User[]>> => {
  return await getFromServer<User[]>("users/all");
};


export const getUserById = async (id: string): Promise<ServerResponse<User>> => {
  return await getFromServer<User>(`users/${id}`);
};


export const createUser = async (
  payload: CreateUserDto
): Promise<ServerResponse<User>> => {
  return await postToServer<User>("users", payload);
};


export const updateUser = async (
  id: string,
  payload: UpdateUserDto
): Promise<ServerResponse<User>> => {
  return await putToServer<User>(`users/${id}`, payload);
};


export const deleteUser = async (id: string): Promise<ServerResponse<null>> => {
  return await deleteFromServer<null>(`users/${id}`);
};