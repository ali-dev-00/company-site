export interface Role {
  _id: string;
  name: string;
  permissions: string[];
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateRoleDto {
  name: string;
  permissions: string[];
  status?: boolean;
}

export interface UpdateRoleDto {
  name?: string;
  permissions?: string[];
  status?: boolean;
}
