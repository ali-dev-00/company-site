import Image from "next/image"
import { Heart, PlayCircle, ThumbsUp, MessageSquare, Settings, Maximize } from "lucide-react"

interface Review {
  id: string
  avatar: string
  name: string
  text: string
}


const reviews: Review[] = [
  {
    id: "leonardo",
    avatar: "/courses/course-review.png",
    name: "Leonardo Da Vinci",
    text: "Loved the course. I've learned some very subtle tecniques, especially on leaves.",
  },
  {
    id: "titania",
    avatar: "/courses/course-review.png",
    name: "Titania S",
    text: "I loved the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Kitani Studio",
  },
  {
    id: "zhirkov",
    avatar: "/courses/course-review.png",
    name: "Zhirkov",
    text: "Yes, I just emphasize that the use of Photoshop, for non-users, becomes difficult to follow. What requires a course to master it. Safe and very didactic teacher.",
  },
  {
    id: "miphoska",
    avatar: "/courses/course-review.png",
    name: "Miphoska",
    text: "I haven't finished the course yet, as I would like to have some feedback from the teacher, about the comments I shared on the forum 3 months ago, and I still haven't had any answer. I think the course is well structured, however, the explanations and videos are very quick for beginners. However, it is good to go practicing.",
  },
]

export default function CourseDetailContent() {
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:items-start">
          {/* Left Column - Main Content */}
          <div className="pb-20">
            {/* Video Player Placeholder */}
            <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8">
            <Image src="/courses/course-detail-video.svg" alt="Video thumbnail" fill className="object-cover" />
              {/* Basic video controls overlay */}
              <div className="absolute inset-0 flex items-end justify-center p-4 bg-black bg-opacity-40">
                <div className="flex items-center justify-between w-full text-white">
                  <div className="flex items-center space-x-2">
                    <PlayCircle className="w-6 h-6" />
                    <span>12:00 / 59:00</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button aria-label="Settings">
                      <Settings className="h-6 w-6" />
                    </button>
                    <button aria-label="Full screen">
                      <Maximize className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Course Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">VUE JS SCRATCH COURSE</h1>
            {/* Instructor/Studio Info */}
            <div className="flex items-center space-x-3 mb-6">
              <Image
                  src="/courses/course-detail-published.svg"
                alt="Kitani Studio Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <div>
                <p className="text-gray-800 font-semibold text-sm">Kitani Studio</p>
                <p className="text-gray-500 text-sm">Design Studio</p>
              </div>
              <div className="flex items-center space-x-4 ml-auto">
                <div className="flex items-center text-gray-600 text-sm">
                  <ThumbsUp className="w-4 h-4 mr-1 text-[#ff2424]" />
                  <span>2.3k</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <MessageSquare className="w-4 h-4 mr-1 text-[#ff2424]" />
                  <span>1.4k</span>
                </div>
              </div>
            </div>
            {/* About Course */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About Course</h2>
              <p className="text-gray-700 leading-relaxed">
                Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other
                monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core
                library is focused on the view layer only, and is easy to pick up and integrate with other libraries or
                existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated
                Single-Page Applications when used in combination with modern tooling and supporting libraries.
              </p>
            </div>
            {/* Reviews Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Review</h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="flex items-start space-x-4">
                    {/* Enforce circular shape and size for avatar */}
                    <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        fill
                        className="object-cover" // Ensures image covers the area, cropping if necessary
                      />
                    </div>
                    <div>
                      <p className="mb-1 font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm leading-relaxed text-gray-700">{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button className="rounded-md border border-gray-300 px-6 py-2 text-gray-700 transition-colors hover:bg-gray-50">
                  Load more review
                </button>
              </div>
            </div>
          </div>
          {/* Right Column - Sidebar */}
          <div className="lg:sticky lg:top-2 space-y-8">
            {/* Wishlist Card */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <button className="flex w-full items-center justify-center space-x-2 rounded-md border border-gray-300 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50">
                <Heart className="h-5 w-5" />
                <span>Wishlist</span>
              </button>
              {/* Job Summary Details */}
              <div className="rounded-lg pt-4 space-y-4">
                <div className="flex items-center space-x-3">
                 <Image src="/courses/course-detail-section-icon.svg" alt="course detail section icon" width={17} height={17} />
                  <p className="text-base text-gray-800">22 Section</p>
                </div>
                <div className="flex items-center space-x-3">
                <Image src="/courses/course-detail-card.svg" alt="course detail card icon" width={20} height={20} />
                  <p className="text-base text-gray-800">152 Lectures</p>
                </div>
                <div className="flex items-center space-x-3">
                <Image src="/courses/course-detail-tv-icon.svg" alt="course detail tv icon" width={20} height={20} />
                  <p className="text-base text-gray-800">21h 33m total lenghts</p>
                </div>
                <div className="flex items-center space-x-3">
                <Image src="/courses/course-detail-speaker-icon.svg" alt="course detail speaker icon" width={17} height={17} />
                  <p className="text-base text-gray-800">English</p>
                </div>
              </div>
            </div>
            {/* Masterclass Card */}
            <div className="relative h-102 overflow-hidden rounded-lg bg-white shadow-sm">
              <Image
                 src="/courses/materclass-course-detail.svg"
                alt="Masterclass background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                <span className="mb-2 inline-block max-w-[80px] rounded bg-[#ff2424] px-2 py-1 text-xs font-semibold text-white">
                  WEBINAR
                </span>
                <p className="mb-1 text-sm">Ana Kursova</p>
                <h3 className="text-xl font-bold leading-tight">
                  Masterclass in Design Thinking, Innovation & Creativity
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
