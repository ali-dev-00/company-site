import { useState, useEffect, useCallback } from 'react';
import { 
  uploadContentWithImage,
  sectionExists,
  safeGetParsedContent
} from '@/services/content-management.service';

// Generic interface for any content section
interface ContentSection {
  [key: string]: string | number | boolean | object | null | undefined;
}

interface UseContentManagementReturn<T = ContentSection> {
  content: T | null;
  loading: boolean;
  error: string | null;
  updateContent: (data: Partial<T>, imageFile?: File) => Promise<boolean>;
  isUpdating: boolean;
  contentExists: boolean;
  refetchContent: () => Promise<void>;
}

export const useContentManagement = <T extends ContentSection = ContentSection>(
  sectionName: string,
  defaultContent?: Partial<T>
): UseContentManagementReturn<T> => {
  const [content, setContent] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [contentExists, setContentExists] = useState(false);

  const fetchContent = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // First check if the section exists
      const exists = await sectionExists(sectionName);
      
      if (exists) {
        // If section exists, get the parsed content
        const parsedContent = await safeGetParsedContent(sectionName);
        
        if (parsedContent) {
          setContent(parsedContent as T);
          setContentExists(true);
        } else {
          // Section exists but content is invalid JSON, initialize with default
          const initialContent = (defaultContent || {}) as T;
          setContent(initialContent);
          setContentExists(false);
        }
      } else {
        // Section doesn't exist, initialize with default content
        const initialContent = (defaultContent || {}) as T;
        setContent(initialContent);
        setContentExists(false);
      }
    } catch (err) {
      console.error(`Error fetching content for section ${sectionName}:`, err);
      // Initialize with default content on error
      const initialContent = (defaultContent || {}) as T;
      setContent(initialContent);
      setContentExists(false);
      setError('Failed to fetch content');
    } finally {
      setLoading(false);
    }
  }, [sectionName, defaultContent]);

  const updateContent = async (
    data: Partial<T>, 
    imageFile?: File
  ): Promise<boolean> => {
    try {
      setIsUpdating(true);
      setError(null);

      // Prepare content data - merge with existing content
      const contentData = {
        ...content,
        ...data,
      };

      const response = await uploadContentWithImage(
        sectionName,
        contentData,
        imageFile
      );

      if (response.status && response.data) {
        // Parse the updated content
        const updatedContent = JSON.parse(response.data.sectionContent);
        setContent(updatedContent);
        setContentExists(true);
        return true;
      } else {
        setError('Failed to update content');
        return false;
      }
    } catch (err) {
      console.error(`Error updating content for section ${sectionName}:`, err);
      setError(err instanceof Error ? err.message : 'Failed to update content');
      return false;
    } finally {
      setIsUpdating(false);
    }
  };

  const refetchContent = async () => {
    await fetchContent();
  };

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  return {
    content,
    loading,
    error,
    updateContent,
    isUpdating,
    contentExists,
    refetchContent
  };
};

// Specific content type interfaces
interface HeroContent extends ContentSection {
  title: string;
  subtitle: string;
  image?: string;
}

interface AboutContent extends ContentSection {
  title: string;
  description: string;
  mission: string;
  vision: string;
  image?: string;
}

interface ContactContent extends ContentSection {
  title: string;
  address: string;
  phone: string;
  email: string;
  mapUrl?: string;
}

// Helper hooks for common sections
export const useHeroContent = (sectionName: string) => {
  const defaultContent: HeroContent = {
    title: '',
    subtitle: '',
    image: ''
  };
  
  return useContentManagement<HeroContent>(sectionName, defaultContent);
};

export const useAboutContent = (sectionName: string) => {
  const defaultContent: AboutContent = {
    title: '',
    description: '',
    mission: '',
    vision: '',
    image: ''
  };
  
  return useContentManagement<AboutContent>(sectionName, defaultContent);
};

export const useContactContent = (sectionName: string) => {
  const defaultContent: ContactContent = {
    title: '',
    address: '',
    phone: '',
    email: '',
    mapUrl: ''
  };
  
  return useContentManagement<ContactContent>(sectionName, defaultContent);
};
