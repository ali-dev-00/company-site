import Image from "next/image"
import { Star } from "lucide-react"

export default function TrendingCourses() {
  const courses = [
    {
      imageSrc: "/courses/trending-course-01.svg",
      title: "Level 2 Award for Security Officers in Private Security Industry",
      rating: 4,
      reviews: "(1.2K)",
      isBestSeller: true,
      discount: undefined,
    },
    {
      imageSrc: "/courses/trending-course-02.svg",
      title: "Level 4 Award in Internal Quality Assurance",
      rating: 4,
      reviews: "(1.2K)",
      isBestSeller: true,
      discount: undefined,
    },
    {
      imageSrc: "/courses/trending-course-03.svg",
      title: "Level 3 Award in Emergency First Aid at Work",
      rating: 4,
      reviews: "(1.2K)",
      isBestSeller: true,
      discount: "20% OFF",
    },
    {
      imageSrc: "/courses/trending-course-04.svg",
      title: "Level 2 Award in Fire Safety",
      rating: 4,
      reviews: "(1.2K)",
      isBestSeller: true,
      discount: "20% OFF",
    },
  ]

  const featuredCourse = {
    imageSrc: "/courses/featured-course-01.svg",
    author: "Ana Kursova",
    title: "Masterclass in Design Thinking, Innovation & Creativity",
  }

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Trending Courses</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Featured Course Card - Now using plain div elements */}
        <div className="lg:col-span-1 lg:row-span-2">
          <div className="w-full h-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
            <div className="relative w-full h-full min-h-[300px] md:min-h-[500px] lg:min-h-[600px]">
              <Image
                src={featuredCourse.imageSrc || "/placeholder.svg"}
                alt={featuredCourse.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl" />
              <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                <p className="text-sm md:text-base mb-1">{featuredCourse.author}</p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">{featuredCourse.title}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Smaller Course Cards Grid - Now using plain div elements */}
        <div className="lg:col-span-1 grid grid-cols-1 md:grid-cols-2 pt-8 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="relative w-full h-40">
                <Image
                  src={course.imageSrc || "/placeholder.svg"}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
                {(course.isBestSeller || course.discount) && (
                  <div className="absolute top-2 left-2 flex gap-2">
                    {course.isBestSeller && (
                      <span className="bg-v0-red text-white text-xs font-semibold px-2 py-1 rounded-full">
                        Best Seller
                      </span>
                    )}
                    {course.discount && (
                      <span className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {course.discount}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2">{course.title}</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="flex mr-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < course.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span>{course.reviews}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
