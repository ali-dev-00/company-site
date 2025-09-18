import { getFromServer } from '@/lib/requests'
import type { Category } from '@/types/category-types'
import type { ServerResponse } from '@/lib/requests'

export const getAllCategories = async (): Promise<ServerResponse<Category[]>> => {
  return await getFromServer<Category[]>(`categories/all`)
}

export const getActiveCategories = async (): Promise<ServerResponse<Category[]>> => {
  return await getFromServer<Category[]>(`categories/active`)
}

export const getCategoryBySlug = async (slug: string): Promise<ServerResponse<Category>> => {
  return await getFromServer<Category>(`categories/slug/${encodeURIComponent(slug)}`)
}