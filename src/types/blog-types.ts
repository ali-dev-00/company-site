export enum BlogStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

export enum BlogType {
  BLOG = "BLOG",
  NEWS = "NEWS",
  CAREER_STORY = "CAREER_STORY",
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
  category?: { _id: string; name?: string; slug?: string } | string; // populated or id
  type?: BlogType; // new classification
  tags?: (string | { _id: string; name?: string })[]; // tags can be populated or id strings
}

export interface CreateBlogDto {
  title: string;
  description: string;
  slug?: string;
  status: BlogStatus;
  category: string; // category ObjectId
  type?: BlogType; // optional; backend defaults to BLOG
  tags?: string[]; // array of tag ids
}

export interface UpdateBlogDto {
  title?: string;
  description?: string;
  slug?: string;
  status?: BlogStatus;
  category?: string;
  type?: BlogType;
  tags?: string[];
}
