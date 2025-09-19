"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getUpcomingCourses } from '@/services/courses.service';
import type { Course } from '@/types/course-types';

export default function UpcomingCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true); setError(null);
      try {
        const res = await getUpcomingCourses();
        if (res?.status && Array.isArray(res.data)) {
          setCourses(res.data);
        } else {
          setCourses([]);
        }
      } catch (e) {
        console.error('Failed to load upcoming courses', e);
        setError('Failed to load courses');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-[1366px] px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">Upcoming Courses</h2>
        {loading && (
          <div className="text-center text-sm text-gray-500">Loading...</div>
        )}
        {error && !loading && (
          <div className="text-center text-sm text-red-600">{error}</div>
        )}
        {!loading && !error && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mx-auto">
            {courses.length === 0 && (
              <p className="text-sm text-gray-500 col-span-full text-center">No upcoming courses.</p>
            )}
            {courses.map(course => (
              <div key={course._id} className="group flex flex-col">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-gray-200 bg-gray-50">
                  <Image
                    src={(course.thumbnail as string) || '/placeholder.svg'}
                    alt={course.title}
                    fill
                    sizes="(max-width:768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  {course.isBestSeller && (
                    <span className="absolute top-2 left-2 bg-[#FF2424] text-white text-[10px] font-semibold px-2 py-1 rounded-full shadow-sm">Best Seller</span>
                  )}
                </div>
                <Link href={`/courses/${course._id}`} className="mt-3 text-sm md:text-base font-semibold leading-snug hover:text-red-600 line-clamp-2">
                  {course.title}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
