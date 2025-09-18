// Unified Category types (removed duplicates). slug is optional in DTOs and optional on Category when API may omit it.
export interface Category {
  _id: string;
  name: string;
  slug?: string; // optional to accommodate transformations that omit slug
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateCategoryDto {
  name: string;
  slug?: string;
  status?: boolean;
}

export interface UpdateCategoryDto {
  name?: string;
  slug?: string;
  status?: boolean;
}