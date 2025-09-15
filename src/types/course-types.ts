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
}