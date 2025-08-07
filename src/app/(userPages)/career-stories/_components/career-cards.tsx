import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


interface NewsArticle {
  id: string
  image: string
  category: string
  title: string
  description: string
  date: string
  linkHref: string
}

const newsArticles: NewsArticle[] = [
  {
    id: "gc-shortlisted",
    image: "/images/news-01.svg",
    category: "Case Studies", // Changed to Case Studies based on image
    title: "The Growth Company shortlisted for THREE commsHERO Awards",
    description: "The Growth Company and Marketing Manchester have been shortlisted for THREE commsHERO Awards.",
    date: "Tuesday, July 22, 2025",
    linkHref: "/news/gc-shortlisted",
  },
  {
    id: "tehseen-ali-board",
    image: "/images/news-02.svg",
    category: "Case Studies", // Changed to Case Studies based on image
    title: "Tehseen Ali Joins the Growth Company Board",
    description: "The Growth Company is pleased to announce the appointment of Tehseen Ali to its Board of Directors.",
    date: "Wednesday, July 19, 2025",
    linkHref: "/news/tehseen-ali-board",
  },
  {
    id: "businesses-impacted",
    image: "/images/news-03.svg",
    category: "Case Studies", // Changed to Case Studies based on image
    title: "Supporting businesses impacted by US Trade Tariffs",
    description:
      "The Growth Company is working with partners to help businesses navigate the impact of US tariff announcements.",
    date: "Wednesday, April 9, 2025",
    linkHref: "/news/businesses-impacted",
  },
  {
    id: "greater-manchester-apprentices",
    image: "/images/news-04.svg",
    category: "Case Studies", // Changed to Case Studies based on image
    title: "Your Business, Their Talent - GC backs call for Greater Manchester employers to pledge T Level placements",
    description:
      "The Growth Company has joined leading employers across Greater Manchester to offer T Level placements - and is urging other businesses to follow their lead.",
    date: "Wednesday, April 2, 2025",
    linkHref: "/news/greater-manchester-apprentices",
  },
  {
    id: "national-apprenticeship-week",
    image: "/images/news-05.svg",
    category: "Case Studies", // Changed to Case Studies based on image
    title: "Celebrating our GC Apprentices",
    description:
      "We have 19 colleagues who are completing apprenticeship programmes alongside their roles here at the Growth Company to enhance their skills and professional development. National Apprenticeship Week we're sharing some of their experiences.",
    date: "Monday, February 10, 2025",
    linkHref: "/news/national-apprenticeship-week",
  },
]

export default function CareerCards() {
  return (
    <section className="pb-16 pt-8 bg-white">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Select>
            <SelectTrigger className="w-full border-gray-200 bg-white">
              <SelectValue placeholder="All Articles" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300">
              <SelectItem value="all">All Articles</SelectItem>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="bg-white w-full border-gray-300">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300">
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="news">News</SelectItem>
              <SelectItem value="events">Events</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="bg-white w-full border-gray-300">
              <SelectValue placeholder="All Tags" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300">
              <SelectItem value="all">All Tags</SelectItem>
              <SelectItem value="employment">Employment</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="bg-white w-full border-gray-300">
              <SelectValue placeholder="All Years" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300">
              <SelectItem value="all">All Years</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* News Cards Grid - First Row (2 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {newsArticles.slice(0, 2).map((article) => (
            <Link
              key={article.id}
              href={article.linkHref}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff2424]"></div>
              </div>
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-[#ff2424] bg-red-50 rounded-full">
                    {article.category}
                  </span>
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ff2424] mb-4 transition-colors duration-300 line-clamp-2 min-h-[56px]">
                  {article.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 min-h-[60px]">
                  {article.description}
                </p>
                {/* Read More Link (now part of the overall card link) */}
                <div className="flex justify-between items-center">
                  <span className="inline-flex items-center hover:underline text-[#ff2424] hover:text-red-600 font-medium text-sm transition-colors duration-200">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:rotate-[-45deg] transition-transform duration-300" />
                  </span>
                  <p className="text-gray-500 text-xs">{article.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* News Cards Grid - Subsequent Rows (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.slice(2).map((article) => (
            <Link
              key={article.id}
              href={article.linkHref}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff2424]"></div>
              </div>
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-[#ff2424] bg-red-50 rounded-full">
                    {article.category}
                  </span>
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ff2424] mb-4 transition-colors duration-300 line-clamp-2 min-h-[56px]">
                  {article.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 min-h-[60px]">
                  {article.description}
                </p>
                {/* Read More Link (now part of the overall card link) */}
                <div className="flex justify-between items-center">
                  <span className="hover:underline inline-flex items-center text-[#ff2424] hover:text-red-600 font-medium text-sm transition-colors duration-200">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:rotate-[-45deg] transition-transform duration-300" />
                  </span>
                  <p className="text-gray-500 text-xs">{article.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
       
      </div>
    </section>
  )
}
