import Image from "next/image"
import Link from "next/link"
import TitleWithUnderline from "../../components/common/Title-with-underline"

interface StoryCard {
    id: string
    title: string
    image: string
    date: string
    category: string
    linkHref: string
}

const storyItems: StoryCard[] = [
    {
        id: "jodie-richardson",
        title: "GC Career Story: Jodie Richardson",
        image: "/careers/career-stories-01.svg",
        date: "Tuesday, July 15, 2025",
        category: "Career Stories",
        linkHref: "/career-stories/jodie-richardson",
    },
    {
        id: "sharon-mehta",
        title: "GC Career Story: Sharon Mehta",
        image: "/careers/career-stories-02.svg",
        date: "Wednesday, February 12, 2025",
        category: "Career Stories",
        linkHref: "/career-stories/sharon-mehta",
    },
    {
        id: "renee-bell",
        title: "GC Career Story: Renée Bell",
        image: "/careers/career-stories-03.svg",
        date: "Thursday, January 30, 2025",
        category: "Career Stories",
        linkHref: "/career-stories/renee-bell",
    },
]

export default function ColleagueStories() {
    return (
        <section className="py-16 bg-[#F4F2F2]">
            <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
                {/* Section Header */}
                <div className="mb-12">
                    <div className=" max-w-[450px] mb-5">
                        <TitleWithUnderline title="What our colleagues say" />
                    </div>
                    <p className="text-gray-600 text-lg">
                        Read some inspiring stories from our colleagues as they share their career journeys and why they love being
                        part of GC.
                    </p>
                </div>

                {/* Story Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {storyItems.map((story) => (
                        <Link
                            key={story.id}
                            href={story.linkHref}
                            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105 transform group cursor-pointer"
                        >
                            {/* Card Image */}
                            <div className="relative h-48 w-full">
                                <Image
                                    src={story.image || "/placeholder.svg"}
                                    alt={story.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff2424]"></div>
                            </div>

                            <div className="px-6 py-2">
                                {/* Category Badge */}
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium text-[#ff2424] bg-red-50 rounded-full">
                                        {story.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ff2424] mb-4 transition-colors duration-300 line-clamp-2 min-h-[56px]">
                                    {story.title}
                                </h3>

                            </div>

                            <hr className="text-gray-300" />
                            <p className="text-gray-500 text-sm py-2 px-6">{story.date}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
