// Content Management Types

export interface ContentManagement {
  _id: string;
  sectionName: string;
  sectionContent: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateContentManagementDto {
  sectionName: string;
  sectionContent: string;
}

export interface UpdateContentManagementDto {
  sectionName?: string;
  sectionContent?: string;
}

// Parsed content types for common sections
export interface ParsedContent {
  [key: string]: string | number | boolean | object | null | undefined;
}

// Hero Section specific type
export interface HeroSectionContent {
  title: string;
  subtitle: string;
  description?: string;
  ctaButton?: {
    primary?: {
      text: string;
      link: string;
      style?: string;
    };
    secondary?: {
      text: string;
      link: string;
      style?: string;
    };
  };
  backgroundImage?: string;
  features?: string[];
  stats?: {
    students?: string;
    courses?: string;
    instructors?: string;
    rating?: string;
  };
}

// About Section specific type
export interface AboutSectionContent {
  title: string;
  subtitle: string;
  description: string;
  mission?: string;
  vision?: string;
  values?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  team?: {
    title: string;
    members: Array<{
      name: string;
      position: string;
      image?: string;
      bio?: string;
    }>;
  };
}

// Course Section specific type
export interface CourseSectionContent {
  title: string;
  subtitle: string;
  description: string;
  categories: Array<{
    id: string;
    name: string;
    description: string;
    icon?: string;
    courses: Array<{
      id: string;
      title: string;
      description: string;
      duration: string;
      level: string;
      price: string;
      rating: number;
      students: number;
      instructor: string;
      thumbnail?: string;
    }>;
  }>;
}

// Contact Section specific type
export interface ContactSectionContent {
  title: string;
  subtitle: string;
  description: string;
  contactInfo: {
    phone: {
      display: string;
      link: string;
    };
    email: {
      display: string;
      link: string;
    };
    address: {
      street: string;
      city: string;
      country: string;
      full: string;
    };
    socialMedia: Array<{
      platform: string;
      url: string;
      icon: string;
    }>;
  };
  office: {
    hours: Array<{
      day: string;
      time: string;
    }>;
    mapUrl?: string;
  };
}

// Footer Section specific type
export interface FooterSectionContent {
  logo: {
    image: string;
    text: string;
  };
  description: string;
  links: {
    quickLinks: Array<{
      text: string;
      url: string;
    }>;
    legal: Array<{
      text: string;
      url: string;
    }>;
  };
  contact: {
    phone: string;
    email: string;
  };
  socialMedia: Array<{
    platform: string;
    icon: string;
    url: string;
  }>;
  newsletter: {
    title: string;
    placeholder: string;
    buttonText: string;
  };
  copyright: {
    year: number;
    text: string;
  };
}

// Union type for all possible section content types
export type SectionContent = 
  | HeroSectionContent 
  | AboutSectionContent 
  | CourseSectionContent 
  | ContactSectionContent 
  | FooterSectionContent 
  | ParsedContent;

// Common section names as constants
export const SECTION_NAMES = {
  HERO: 'hero-section',
  ABOUT: 'about-us-section',
  COURSES: 'featured-courses',
  CONTACT: 'contact-section',
  FOOTER: 'footer-section',
} as const;

export type SectionName = typeof SECTION_NAMES[keyof typeof SECTION_NAMES];
