import {
    getFromServer,
    postToServer,
    putToServer,
    deleteFromServer,
    ServerResponse,
  } from "../lib/requests";
  import { Course, CreateCourseDto, UpdateCourseDto } from "../types/course-types";
  import { ServerResponse as SR } from "../lib/requests";
  
  /**
   * Get paginated courses
   */
  export const getCourses = async (
    page = 1,
    limit = 10
  ): Promise<ServerResponse<Course[]>> => {
    return await getFromServer<Course[]>(`courses?page=${page}&limit=${limit}`);
  };
  
  /**
   * Get all courses without pagination
   * (Assumes backend exposes GET /courses/all)
   */
  export const getAllCourses = async (): Promise<ServerResponse<Course[]>> => {
    return await getFromServer<Course[]>("courses/all");
  };
  
  /**
   * Get only active courses (public)
   * (Assumes backend exposes GET /courses/active)
   */
  export const getActiveCourses = async (): Promise<ServerResponse<Course[]>> => {
    return await getFromServer<Course[]>("courses/active");
  };
  
  /**
   * Get course by ID
   */
  export const getCourseById = async (id: string): Promise<ServerResponse<Course>> => {
    return await getFromServer<Course>(`courses/${id}`);
  };

  /**
   * Get courses filtered by type (public). Example types: TRENDING, UPCOMING, BEST_SELLER
   */
  export const getCoursesByType = async (type: string): Promise<ServerResponse<Course[]>> => {
    return await getFromServer<Course[]>(`courses/by-type?type=${encodeURIComponent(type)}`);
  };

  /**
   * Convenience wrapper to fetch upcoming courses
   */
  export const getUpcomingCourses = async (): Promise<ServerResponse<Course[]>> => {
    return getCoursesByType('UPCOMING');
  };
  
  /**
   * Create a course (JSON payload)
   */
  export const createCourse = async (
    payload: CreateCourseDto & { thumbnailFile?: File }
  ): Promise<SR<Course>> => {
    const fd = new FormData();
    fd.append("title", payload.title);
    fd.append("description", payload.description);
    fd.append("category", payload.category);
    fd.append("whatYouWillLearn", payload.whatYouWillLearn);
    fd.append("location", payload.location);
  fd.append("duration", payload.duration);
    fd.append("modeOfStudy", payload.modeOfStudy);
    fd.append("noOfVacancies", String(payload.noOfVacancies));
    fd.append("type", payload.type);
    if (payload.status !== undefined) fd.append("status", String(payload.status));
    // Pricing fields
    fd.append('price', String(payload.price));
    fd.append('isBestSeller', String(payload.isBestSeller));
    fd.append('isOnSale', String(payload.isOnSale));
    if (payload.salePrice !== undefined && payload.salePrice !== null) {
      fd.append('salePrice', String(payload.salePrice));
    }
    if (payload.thumbnailFile) fd.append("thumbnail", payload.thumbnailFile);
    return await postToServer<Course>("courses", fd);
  };
  
  /**
   * Update a course (JSON payload)
   */
  export const updateCourse = async (
    id: string,
    payload: UpdateCourseDto & { thumbnailFile?: File }
  ): Promise<SR<Course>> => {
    const fd = new FormData();
    if (payload.title !== undefined) fd.append("title", payload.title);
    if (payload.description !== undefined) fd.append("description", payload.description);
    if (payload.category !== undefined) fd.append("category", payload.category);
    if (payload.whatYouWillLearn !== undefined) fd.append("whatYouWillLearn", payload.whatYouWillLearn);
    if (payload.location !== undefined) fd.append("location", payload.location);
  if (payload.duration !== undefined) fd.append("duration", payload.duration);
    if (payload.modeOfStudy !== undefined) fd.append("modeOfStudy", payload.modeOfStudy);
    if (payload.noOfVacancies !== undefined) fd.append("noOfVacancies", String(payload.noOfVacancies));
    if (payload.type !== undefined) fd.append("type", payload.type);
    if (payload.status !== undefined) fd.append("status", String(payload.status));
    if (payload.price !== undefined) fd.append('price', String(payload.price));
    if (payload.isBestSeller !== undefined) fd.append('isBestSeller', String(payload.isBestSeller));
    if (payload.isOnSale !== undefined) fd.append('isOnSale', String(payload.isOnSale));
    if (payload.salePrice !== undefined && payload.salePrice !== null) {
      fd.append('salePrice', String(payload.salePrice));
    }
    if (payload.thumbnailFile) fd.append("thumbnail", payload.thumbnailFile);
    return await putToServer<Course>(`courses/${id}`, fd);
  };
  
  /**
   * Toggle course status
   * (Assumes backend exposes PUT /courses/:id/toggle-status)
   */
  export const toggleCourseStatus = async (
    id: string
  ): Promise<ServerResponse<Course>> => {
    return await putToServer<Course>(`courses/${id}/toggle-status`, {});
  };
  
  /**
   * Delete a course
   */
  export const deleteCourse = async (
    id: string
  ): Promise<ServerResponse<null>> => {
    return await deleteFromServer<null>(`courses/${id}`);
  };