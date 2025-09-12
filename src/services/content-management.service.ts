import {
  getFromServer,
  postToServer,
  putToServer,
  ServerResponse,
} from "../lib/requests";
import { 
  ContentManagement, 
  CreateContentManagementDto, 
  UpdateContentManagementDto,
  SectionContent,
  ParsedContent
} from "../types/content-management-types";
import { getCookie } from "cookies-next";

/**
 * Create a new content section
 */
export const createContentSection = async (
  payload: CreateContentManagementDto
): Promise<ServerResponse<ContentManagement>> => {
  return await postToServer<ContentManagement>("content-management", payload);
};

/**
 * Get content section by section name
 */
export const getContentBySectionName = async (
  sectionName: string
): Promise<ServerResponse<ContentManagement>> => {
  return await getFromServer<ContentManagement>(`content-management/${sectionName}`);
};

/**
 * Update content section by section name
 */
export const updateContentBySectionName = async (
  sectionName: string,
  payload: UpdateContentManagementDto
): Promise<ServerResponse<ContentManagement>> => {
  return await putToServer<ContentManagement>(`content-management/${sectionName}`, payload);
};

/**
 * Get parsed JSON content by section name
 * This returns the section content as a parsed JavaScript object
 */
export const getParsedContentBySectionName = async (
  sectionName: string
): Promise<ServerResponse<ParsedContent>> => {
  return await getFromServer<ParsedContent>(`content-management/parsed/${sectionName}`);
};

/**
 * Helper function to create content with JSON string
 */
export const createContentWithData = async (
  sectionName: string,
  contentData: SectionContent
): Promise<ServerResponse<ContentManagement>> => {
  const payload: CreateContentManagementDto = {
    sectionName,
    sectionContent: JSON.stringify(contentData)
  };
  return await createContentSection(payload);
};

/**
 * Helper function to update content with JSON string
 */
export const updateContentWithData = async (
  sectionName: string,
  contentData: Partial<SectionContent>
): Promise<ServerResponse<ContentManagement>> => {
  const payload: UpdateContentManagementDto = {
    sectionContent: JSON.stringify(contentData)
  };
  return await updateContentBySectionName(sectionName, payload);
};

/**
 * Helper function to get typed content for specific sections
 */
export const getTypedContent = async <T extends SectionContent>(
  sectionName: string
): Promise<ServerResponse<T>> => {
  const response = await getParsedContentBySectionName(sectionName);
  return {
    ...response,
    data: response.data as T
  };
};

/**
 * Batch operations for multiple sections
 */
export const createMultipleSections = async (
  sections: Array<{ sectionName: string; contentData: SectionContent }>
): Promise<Array<ServerResponse<ContentManagement>>> => {
  const promises = sections.map(({ sectionName, contentData }) =>
    createContentWithData(sectionName, contentData)
  );
  return Promise.all(promises);
};

/**
 * Check if a section exists (safe - doesn't trigger logout)
 */
export const sectionExists = async (sectionName: string): Promise<boolean> => {
  try {
    const response = await getContentBySectionName(sectionName);
    return !!(response.status && response.data);
  } catch (error) {
    return false;
  }
};

/**
 * Safe get content - returns null if section doesn't exist (doesn't trigger logout)
 */
export const safeGetContent = async (
  sectionName: string
): Promise<ContentManagement | null> => {
  try {
    const response = await getContentBySectionName(sectionName);
    return response.status ? response.data : null;
  } catch (error) {
    return null;
  }
};

/**
 * Safe get parsed content - returns null if section doesn't exist or JSON is invalid (doesn't trigger logout)
 */
export const safeGetParsedContent = async (
  sectionName: string
): Promise<ParsedContent | null> => {
  try {
    const response = await getParsedContentBySectionName(sectionName);
    return response.status ? response.data : null;
  } catch (error) {
    return null;
  }
};

/**
 * Create or update content section with image upload
 */
export const uploadContentWithImage = async (
  sectionName: string,
  contentData: SectionContent,
  imageFile?: File
): Promise<ServerResponse<ContentManagement>> => {
  const formData = new FormData();
  
  // Add content data fields to form data
  Object.entries(contentData).forEach(([key, value]) => {
    if (key !== 'image') { // Don't add image URL from contentData
      formData.append(key, value);
    }
  });
  
  // Add image file if provided
  if (imageFile) {
    formData.append('image', imageFile);
  }

  // Use the same authentication approach as other services
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
    
    // Get headers like other services do
    const headers = new Headers();
    // Don't set Content-Type for FormData - let browser set it with boundary
    headers.append("Accept", "*/*");

    // Get token from cookies exactly like requests.ts does
    const token = getCookie("token");
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    const response = await fetch(`${backendUrl}/api/content-management/upload/${sectionName}`, {
      method: 'POST',
      headers,
      credentials: 'include',
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      // Handle specific error cases
      if (response.status === 413) {
        throw new Error('File too large. Please upload an image smaller than 10MB.');
      } else if (response.status === 500) {
        throw new Error(result.message || 'Server error occurred while uploading content.');
      } else if (response.status === 401) {
        throw new Error('Authentication required. Please log in again.');
      } else if (response.status === 403) {
        throw new Error('You don\'t have permission to upload content.');
      } else {
        throw new Error(result.message || `Upload failed with status ${response.status}`);
      }
    }

    return result;
  } catch (error) {
    // Re-throw with more specific error message
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('Network error occurred while uploading content.');
    }
  }
};

/**
 * Create or update content section
 * If section exists, it updates; if not, it creates
 */
export const upsertContentSection = async (
  sectionName: string,
  contentData: SectionContent
): Promise<ServerResponse<ContentManagement>> => {
  const exists = await sectionExists(sectionName);
  
  if (exists) {
    return await updateContentWithData(sectionName, contentData);
  } else {
    return await createContentWithData(sectionName, contentData);
  }
};
