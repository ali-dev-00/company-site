import { deleteFromServer, getFromServer, postToServer, putToServer } from "@/lib/requests";
import { CreateTagInput, Tag, UpdateTagInput } from "@/types/tag";
import { ServerResponse } from "@/lib/requests";

// API paths centralization
const BASE = "tags"; // matches backend controller path: /api/tags

// Public endpoints
export const fetchActiveTags = async (): Promise<ServerResponse<Tag[]>> => {
  return getFromServer<Tag[]>(`${BASE}/active`);
};

// Protected endpoints (require proper permissions & token)
export const fetchAllTags = async (): Promise<ServerResponse<Tag[]>> => {
  return getFromServer<Tag[]>(BASE);
};

export const createTag = async (payload: CreateTagInput): Promise<ServerResponse<Tag>> => {
  return postToServer<Tag>(BASE, payload);
};

export const updateTag = async (id: string, payload: UpdateTagInput): Promise<ServerResponse<Tag>> => {
  return putToServer<Tag>(`${BASE}/${id}`, payload);
};

export const toggleTagStatus = async (id: string): Promise<ServerResponse<Tag>> => {
  return putToServer<Tag>(`${BASE}/${id}/toggle-status`, {});
};

export const deleteTag = async (id: string): Promise<ServerResponse<null>> => {
  return deleteFromServer<null>(`${BASE}/${id}`);
};

// Utility: simple cache wrapper (in-memory) if desired for active tags
let _activeTagsCache: Tag[] | null = null;
let _activeTagsCacheTime = 0;
const CACHE_TTL_MS = 60_000; // 1 min

export const fetchActiveTagsCached = async (): Promise<Tag[]> => {
  const now = Date.now();
  if (_activeTagsCache && now - _activeTagsCacheTime < CACHE_TTL_MS) {
    return _activeTagsCache;
  }
  const res = await fetchActiveTags();
  if (res.status) {
    _activeTagsCache = res.data;
    _activeTagsCacheTime = now;
    return res.data;
  }
  return [];
};

export const clearActiveTagsCache = () => {
  _activeTagsCache = null;
  _activeTagsCacheTime = 0;
};
