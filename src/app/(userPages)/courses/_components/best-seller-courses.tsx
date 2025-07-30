'use client'
import { useState } from "react";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BestSellerCourses() {
  const categories = [
    "Teaching",
    "Security",
    "Quality Assurance",
    "Leadership & Management",
    "First Aid",
    "Fire Safety",
    "Environmental Conservation",
    "Customer Service",
    "COSHH",
    "Construction",
    "Conflict Management",
    "Cleaning",
  ];

  const allCourses = [
    {
      id: 1,
      title: "Level 2 Certificate in Cleaning Principles",
      image: "/courses/best-seller-course-01.svg",
      rating: 4.5,
      reviews: "1.2K",
      category: "Cleaning",
      isBestSeller: true,
    },
    {
      id: 2,
      title: "Level 2 Certificate in Cleaning and Support Services Skills 1",
      image: "/courses/best-seller-course-02.svg",
      rating: 4.6,
      reviews: "1.2K",
      category: "Cleaning",
      isBestSeller: true,
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredCourses = selectedCategory
    ? allCourses.filter((course) => course.category === selectedCategory)
    : allCourses;

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-[1366px] px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">
          Browse Our Top Courses
        </h2>

        {/* Category Filter (Tags) */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm whitespace-nowrap ${
                selectedCategory === category
                  ? "border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="flex justify-center gap-6 max-w-6xl mx-auto">
          {filteredCourses.map((course) => (
            <div key={course.id} className="w-full max-w-[300px]">
              <div className="relative rounded-5xl">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="w-full h-full max-h-44 rounded-lg" // Keep image rounded
                />
                {course.isBestSeller && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Best Seller
                  </div>
                )}
              </div>
              <div className="py-4 px-2">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                {Array.from({ length: 5 }).map((_, i) => {
                    const rating = course.rating
                    const fullStars = Math.floor(rating)
                    const hasHalfStar = rating % 1 >= 0.5

                    if (i < fullStars) {
                      return <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    } else if (i === fullStars && hasHalfStar) {
                      return <StarHalf key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    } else {
                      return <Star key={i} className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    }
                  })}

                  <span>({course.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
