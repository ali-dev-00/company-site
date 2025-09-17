import {
  getFromServer,
  postToServer,
  putToServer,
  deleteFromServer,
  ServerResponse,
} from "../lib/requests";
import type { Blog, CreateBlogDto, UpdateBlogDto } from "../types/blog-types";

// List blogs with pagination
export const getBlogs = async (
  page = 1,
  limit = 10
): Promise<ServerResponse<Blog[]>> => {
  return await getFromServer<Blog[]>(`blogs?page=${page}&limit=${limit}`);
};

// Get a single blog by id
export const getBlogById = async (
  id: string
): Promise<ServerResponse<Blog>> => {
  return await getFromServer<Blog>(`blogs/${id}`);
};

// Create a blog (multipart/form-data)
export const createBlog = async (
  payload: CreateBlogDto & { featuredImageFile: File }
): Promise<ServerResponse<Blog>> => {
  const fd = new FormData();
  fd.append("title", payload.title);
  fd.append("description", payload.description);
  if (payload.slug) fd.append("slug", payload.slug);
  fd.append("status", payload.status);
  fd.append("featuredImage", payload.featuredImageFile);
  return await postToServer<Blog>("blogs", fd);
};

// Update a blog (multipart/form-data)
export const updateBlog = async (
  id: string,
  payload: UpdateBlogDto & { featuredImageFile?: File }
): Promise<ServerResponse<Blog>> => {
  const fd = new FormData();
  if (payload.title !== undefined) fd.append("title", payload.title);
  if (payload.description !== undefined) fd.append("description", payload.description);
  if (payload.slug !== undefined) fd.append("slug", payload.slug);
  if (payload.status !== undefined) fd.append("status", payload.status);
  if (payload.featuredImageFile) fd.append("featuredImage", payload.featuredImageFile);
  return await putToServer<Blog>(`blogs/${id}`, fd);
};

// Delete a blog
export const deleteBlog = async (
  id: string
): Promise<ServerResponse<null>> => {
  return await deleteFromServer<null>(`blogs/${id}`);
};
