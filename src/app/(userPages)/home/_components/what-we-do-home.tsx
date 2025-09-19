"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import OurOfferings from "./our-offering"
import TitleWithUnderline from "../../components/common/Title-with-underline"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getCoursesByType } from '@/services/courses.service'
import type { Course } from '@/types/course-types'

export default function WhatWeDo() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true) // start true so skeletons show immediately (avoid empty state flicker)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      setLoading(true); setError(null)
      try {
        const res = await getCoursesByType('TRENDING')
        if (res?.status && Array.isArray(res.data)) {
          setCourses(res.data.slice(0, 3)) // limit to 3 like original grid
        } else {
          setCourses([])
        }
      } catch (e) {
        console.error('Failed to load trending courses', e)
        setError('Failed to load courses')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="pt-16">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-8 max-w-[230px]">
           <TitleWithUnderline title="What We Do" />
          </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
                <div className="relative h-48 w-full bg-gray-200" />
                <div className="p-6 space-y-4">
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-11/12" />
                    <div className="h-3 bg-gray-200 rounded w-2/3" />
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-24" />
                </div>
              </div>
            ))
          )}
          {error && !loading && (
            <div className="col-span-full text-sm text-red-600">{error}</div>
          )}
          {!loading && !error && courses.length === 0 && (
            <div className="col-span-full text-sm text-gray-500">No trending courses.</div>
          )}
          {!loading && !error && courses.map((course) => {
            const description = (course.description || '').replace(/<[^>]*>/g, '').slice(0, 260)
            return (
            <div
              key={course._id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105 transform group"
            >
              {/* Card Image */}
              <div  className="relative h-48 w-full">
                <Link href={`/courses/${course._id}`} className="absolute inset-0 z-10" >
                  <Image
                    src={(course.thumbnail as string) || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff2424]"></div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ff2424] mb-4 transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-6 min-h-[135px]">
                  {description}
                </p>
                <Link
                  href={`/courses/${course._id}`}
                  className="inline-flex items-center group-hover:underline text-[#ff2424] hover:text-red-600 font-medium text-sm transition-all duration-300 group"
                >
                  More Detail
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:rotate-[-45deg]  transition-transform duration-300" />
                </Link>
              </div>
            </div>
          )})}
        </div>
        <OurOfferings />
      </div>
    </section>
  )
}
