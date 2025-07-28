import Image from "next/image"
import { ArrowRight } from "lucide-react"
import TitleWithUnderline from "../../components/common/Title-with-underline"

interface NewsCard {
    id: string
    title: string
    image: string
    date: string
    category: string
}

const newsItems: NewsCard[] = [
    {
        id: "growth-company-shortlisted",
        title: "The Growth Company shortlisted for THREE commsHERO Awards",
        image: "/home/latest-news-01.svg",
        date: "Tuesday, July 22, 2025",
        category: "News",
    },
    {
        id: "tehseen-ali-joins",
        title: "Tehseen Ali Joins the Growth Company Board",
        image: "/home/latest-news-02.svg",
        date: "Wednesday, July 16, 2025",
        category: "News",
    },
    {
        id: "supporting-businesses-trade",
        title: "Supporting businesses impacted by US Trade Tariffs",
        image: "/home/latest-news-03.svg",
        date: "Wednesday, April 9, 2025",
        category: "News",
    },
]

export default function LatestNews() {
    return (
        <section className="py-8 bg-[#F4F2F2]">
            <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
                {/* Section Header */}
                <div className="mb-12 max-w-[210px]">
                <TitleWithUnderline title="Latest News" />
                </div>

                {/* News Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {newsItems.map((news) => (
                        <div
                            key={news.id}
                            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105 transform group cursor-pointer"
                        >
                            {/* Card Image */}
                            <div className="relative h-48 w-full">
                                <Image
                                    src={news.image || "/placeholder.svg"}
                                    alt={news.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            <div className="p-5 relative">
                                {/* Category Badge */}
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 text-xs font-medium text-[#ff2424] bg-red-50 rounded-full">
                                        {news.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className=" mb-10 text-xl font-semibold text-gray-900 group-hover:text-[#ff2424] transition-colors duration-300 line-clamp-2 min-h-[56px]">
                                    {news.title}
                                </h3>

                                <hr className="absolute text-gray-300 w-full bottom-14 left-0" />

                                {/* Date */}
                                <p className="text-gray-500 text-sm">{news.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All News Link */}
                <div className="text-center">
                    <a
                        href="/news"
                        className="inline-flex items-center text-[#ff2424] hover:text-red-600 font-medium text-md transition-all duration-300 group hover:underline"
                    >
                        View all news
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:rotate-[-45deg] transition-transform duration-300" />
                    </a>
                </div>

            </div>
        </section>
    )
}
