import {
  getFromServer,
  postToServer,
  putToServer,
  deleteFromServer,
  ServerResponse,
} from "../lib/requests";
import type { Blog, CreateBlogDto, UpdateBlogDto } from "../types/blog-types";
import { BlogStatus, BlogType } from "../types/blog-types";

// List blogs with pagination
export const getBlogs = async (
  page = 1,
  limit = 10,
  opts: { status?: BlogStatus; slug?: string; category?: string; categorySlug?: string } = {}
): Promise<ServerResponse<Blog[]>> => {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  if (opts.status) params.set('status', opts.status);
  if (opts.slug) params.set('slug', opts.slug);
  if (opts.category) params.set('category', opts.category);
  if (opts.categorySlug) params.set('categorySlug', opts.categorySlug);
  return await getFromServer<Blog[]>(`blogs?${params.toString()}`);
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
  fd.append("category", payload.category);
  if (payload.type) fd.append("type", payload.type);
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
  if (payload.category !== undefined) fd.append("category", payload.category);
  if (payload.type !== undefined) fd.append("type", payload.type);
  if (payload.featuredImageFile) fd.append("featuredImage", payload.featuredImageFile);
  return await putToServer<Blog>(`blogs/${id}`, fd);
};

// Delete a blog
export const deleteBlog = async (
  id: string
): Promise<ServerResponse<null>> => {
  return await deleteFromServer<null>(`blogs/${id}`);
};

// Get published blogs (public listing)
export const getPublishedBlogs = async (
  page = 1,
  limit = 10
): Promise<ServerResponse<Blog[]>> => {
  return await getFromServer<Blog[]>(`blogs?page=${page}&limit=${limit}&status=${BlogStatus.PUBLISHED}`);
};

// Get latest N news (type=NEWS) published
export const getLatestNews = async (
  limit = 3
): Promise<ServerResponse<Blog[]>> => {
  // Backend sorts by postedOn desc by default
  const page = 1;
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    status: BlogStatus.PUBLISHED,
    type: BlogType.NEWS,
  });
  return await getFromServer<Blog[]>(`blogs?${params.toString()}`);
};

// Get a single published blog by slug (public)
export const getBlogBySlug = async (
  slug: string
): Promise<ServerResponse<Blog>> => {
  // Try to use backend filtering by slug and status
  const res = await getFromServer<Blog[]>(`blogs?page=1&limit=1&slug=${encodeURIComponent(slug)}&status=${BlogStatus.PUBLISHED}`);
  if (!res) return { status: false, message: 'Not found', data: {} as Blog };
  // If backend returns array of items
  const item = Array.isArray(res.data) ? res.data[0] : (res.data as unknown as Blog);
  return {
    status: res.status,
    message: res.message,
    pagination: res.pagination,
    data: item as Blog,
  };
};
