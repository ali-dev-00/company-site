import {
  getFromServer,
  postToServer,
  putToServer,
  deleteFromServer,
  ServerResponse,
} from "../lib/requests";
import { Category, CreateCategoryDto, UpdateCategoryDto } from "../types/category-types";

/**
 * Get paginated categories
 */
export const getCategories = async (
  page = 1,
  limit = 10
): Promise<ServerResponse<Category[]>> => {
  return await getFromServer<Category[]>(`categories?page=${page}&limit=${limit}`);
};

/**
 * Get all categories without pagination
 */
export const getAllCategories = async (): Promise<ServerResponse<Category[]>> => {
  return await getFromServer<Category[]>("categories/all");
};

/**
 * Get only active categories (public)
 */
export const getActiveCategories = async (): Promise<ServerResponse<Category[]>> => {
  return await getFromServer<Category[]>("categories/active");
};

/**
 * Get category by ID
 */
export const getCategoryById = async (id: string): Promise<ServerResponse<Category>> => {
  return await getFromServer<Category>(`categories/${id}`);
};

/**
 * Create a category
 */
export const createCategory = async (
  payload: CreateCategoryDto
): Promise<ServerResponse<Category>> => {
  return await postToServer<Category>("categories", payload);
};

/**
 * Update a category
 */
export const updateCategory = async (
  id: string,
  payload: UpdateCategoryDto
): Promise<ServerResponse<Category>> => {
  return await putToServer<Category>(`categories/${id}`, payload);
};

/**
 * Toggle category status
 */
export const toggleCategoryStatus = async (
  id: string
): Promise<ServerResponse<Category>> => {
  return await putToServer<Category>(`categories/${id}/toggle-status`, {});
};

/**
 * Delete a category
 */
export const deleteCategory = async (
  id: string
): Promise<ServerResponse<null>> => {
  return await deleteFromServer<null>(`categories/${id}`);
};
