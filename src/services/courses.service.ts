import {
    getFromServer,
    postToServer,
    putToServer,
    deleteFromServer,
    ServerResponse,
  } from "../lib/requests";
  import { Course, CreateCourseDto, UpdateCourseDto } from "../types/course-types";
  
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
   * Create a course (JSON payload)
   */
  export const createCourse = async (
    payload: CreateCourseDto
  ): Promise<ServerResponse<Course>> => {
    return await postToServer<Course>("courses", payload);
  };
  
  /**
   * Update a course (JSON payload)
   */
  export const updateCourse = async (
    id: string,
    payload: UpdateCourseDto
  ): Promise<ServerResponse<Course>> => {
    return await putToServer<Course>(`courses/${id}`, payload);
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