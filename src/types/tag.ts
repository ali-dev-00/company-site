export interface Tag {
  _id: string;
  name: string;
  status: boolean; // active/inactive
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateTagInput {
  name: string;
  status?: boolean;
}

export interface UpdateTagInput {
  name?: string;
  status?: boolean;
}

export interface PaginatedTags {
  items: Tag[];
  page: number;
  limit: number;
  total: number;
}
