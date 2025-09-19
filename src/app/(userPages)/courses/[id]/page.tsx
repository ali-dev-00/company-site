"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getCourseById, getAllCourses } from '@/services/courses.service';
import RichText from '@/components/common/RichText';
import type { Course } from '@/types/course-types';

export default function CourseDetailPage() {
  const params = useParams();
  const id = (params?.id as string) || '';
  const [course, setCourse] = useState<Course | null>(null);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    const run = async () => {
      setLoading(true); setError(null);
      try {
        const [courseRes, allRes] = await Promise.all([
          getCourseById(id),
          getAllCourses()
        ]);
        if (!cancelled) {
          if (courseRes.status && courseRes.data) setCourse(courseRes.data as Course); else setError('Course not found');
          if (allRes.status && Array.isArray(allRes.data)) setAllCourses(allRes.data as Course[]);
        }
      } catch (e) {
        if (!cancelled) setError('Failed to load course');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    run();
    return () => { cancelled = true; };
  }, [id]);

  if (!id) {
    return <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16 py-20 text-center text-sm text-gray-500">Missing course id.</div>;
  }

  if (loading) {
    return <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16 py-20 text-center text-sm text-gray-500">Loading course...</div>;
  }

  if (error || !course) {
    return <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16 py-20 text-center">
      <h2 className="text-2xl font-bold mb-4">{error || 'Course not found'}</h2>
      <p className="text-gray-600 text-sm">Please check the URL or try again later.</p>
    </div>;
  }

  const categoryName = typeof course.category === 'string' ? '' : (course.category?.name || '');

  return (
    <main className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16 py-10">
      <article className="w-full">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">{course.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-medium text-gray-600">
            {categoryName && (
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-[11px] uppercase tracking-wide text-gray-700 ring-1 ring-gray-200">{categoryName}</span>
            )}
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-[11px] uppercase tracking-wide text-gray-700 ring-1 ring-gray-200">{course.modeOfStudy}</span>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-[11px] uppercase tracking-wide text-gray-700 ring-1 ring-gray-200">{course.duration}</span>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-[11px] uppercase tracking-wide text-gray-700 ring-1 ring-gray-200">Vacancies: {course.noOfVacancies}</span>
            {course.type && (
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-[11px] uppercase tracking-wide text-gray-700 ring-1 ring-gray-200">{course.type.replace('_',' ')}</span>
            )}
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 shadow focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition"
            >
              Interested
            </button>
          </div>
        </div>

        <section className="border border-gray-300 rounded-xl p-6 bg-white shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Description</h2>
          <RichText html={course.description} />
        </section>
        <section className="mt-10 border border-gray-300 rounded-xl p-6 bg-white shadow-sm">
          <h2 className="text-lg font-semibold mb-4">What You Will Learn</h2>
          <RichText html={course.whatYouWillLearn} />
        </section>
      </article>
    </main>
  );
}
