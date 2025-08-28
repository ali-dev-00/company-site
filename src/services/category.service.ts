
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
  ): Promise<ServerResponse> => {
    return await getFromServer(`categories?page=${page}&limit=${limit}`);
  };
  
  /**
   * Get all categories without pagination
   */
  export const getAllCategories = async (): Promise<ServerResponse> => {
    return await getFromServer("categories/all");
  };
  
  /**
   * Get only active categories (public)
   */
  export const getActiveCategories = async (): Promise<ServerResponse> => {
    return await getFromServer("categories/active");
  };
  
  /**
   * Get category by ID
   */
  export const getCategoryById = async (id: string): Promise<ServerResponse> => {
    return await getFromServer(`categories/${id}`);
  };
  
  /**
   * Create a category
   */
  export const createCategory = async (
    payload: CreateCategoryDto
  ): Promise<ServerResponse> => {
    return await postToServer("categories", payload);
  };
  
  /**
   * Update a category
   */
  export const updateCategory = async (
    id: string,
    payload: UpdateCategoryDto
  ): Promise<ServerResponse> => {
    return await putToServer(`categories/${id}`, payload);
  };
  
  /**
   * Toggle category status
   */
  export const toggleCategoryStatus = async (id: string): Promise<ServerResponse> => {
    return await putToServer(`categories/${id}/toggle-status`, {});
  };
  
  /**
   * Delete a category
   */
  export const deleteCategory = async (id: string): Promise<ServerResponse> => {
    return await deleteFromServer(`categories/${id}`);
  };