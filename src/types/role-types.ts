export interface Role {
  _id: string;
  name: string;
  permissions: string[];
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}
