import { Category } from "./category-types";

export enum ModeOfStudy {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
  HYBRID = "HYBRID",
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  thumbnail?: string;             
  category: string | Category;    
  whatYouWillLearn: string;      
  location: string;
  duration: string;
  modeOfStudy: ModeOfStudy;
  noOfVacancies: number;
  type: 'TRENDING' | 'UPCOMING' | 'BEST_SELLER';
  status: boolean;
  // New pricing & merchandising fields
  price: number;
  isBestSeller: boolean;
  isOnSale: boolean;
  salePrice: number | null;
  // Computed on backend (not stored separately)
  effectivePrice?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateCourseDto {
  title: string;
  description: string;
  category: string; // Category ObjectId
  whatYouWillLearn: string;
  location: string;
  duration: string;
  modeOfStudy: ModeOfStudy;
  noOfVacancies: number;
  type: 'TRENDING' | 'UPCOMING' | 'BEST_SELLER';
  status?: boolean; 
  price: number;
  isBestSeller: boolean;
  isOnSale: boolean;
  salePrice?: number | null;
  // Note: thumbnail upload is not included here since we're sending JSON like categories.
}

export interface UpdateCourseDto {
  title?: string;
  description?: string;
  category?: string; // Category ObjectId
  whatYouWillLearn?: string;
  location?: string;
  duration?: string;
  modeOfStudy?: ModeOfStudy;
  noOfVacancies?: number;
  type?: 'TRENDING' | 'UPCOMING' | 'BEST_SELLER';
  status?: boolean;
  price?: number;
  isBestSeller?: boolean;
  isOnSale?: boolean;
  salePrice?: number | null;
}