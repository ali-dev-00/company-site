import Image from "next/image"
import Link from "next/link";

export default function UpcomingCourses() {
    const upcomingCourses = [
        {
          id: 1,
          title: "Level 3 Deliverers of Physical Intervention Training",
          image: "/courses/upcoming-course-01.svg",
          isBestSeller: true,
        },
        {
          id: 2,
          title: "Level 1 Award in Environmental Sustainability Awareness",
          image: "/courses/upcoming-course-02.svg",
          isBestSeller: true,
        },
        {
          id: 3,
          title: "Level 1 Award in Health and Safety within a Construction Environment",
          image: "/courses/upcoming-course-03.svg",
          isBestSeller: true,
        },
        {
          id: 4,
          title: "Level 2 Award in Conflict Management",
          image: "/courses/upcoming-course-04.svg",
          isBestSeller: true,
        }
      ];

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-[1366px] px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">Upcoming Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center mx-auto">
          {upcomingCourses.map((course) => (
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
              <div className="py-4">
                <Link href="/course-detail" className="text-md font-semibold mb-2 hover:text-red-600">{course.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
