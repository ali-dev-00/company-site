export enum BlogStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

export interface Blog {
  _id: string;
  title: string;
  description: string;
  slug: string;
  featuredImage: string;
  status: BlogStatus;
  postedBy: string | { _id: string; name?: string } | null;
  postedOn: string; // ISO date string
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateBlogDto {
  title: string;
  description: string;
  slug?: string;
  status: BlogStatus;
}

export interface UpdateBlogDto {
  title?: string;
  description?: string;
  slug?: string;
  status?: BlogStatus;
}
