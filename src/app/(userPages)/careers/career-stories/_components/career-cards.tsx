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
    id: "case-study-1",
    image: "/images/news-01.svg",
    category: "Case Studies",
    title: "HD Career Story: Jodie Richardson",
    description: "Jodie shares her journey from joining as an Employment Advisor to being promoted to Service Manager in just 2.5 years, and how she uses her lived experience to improve awareness of neurodiversity across HD.",
    date: "Tuesday, July 15, 2025",
    linkHref: "/careers/career-stories/career-stories-detail",
  },
  {
    id: "case-study-2",
    image: "/images/news-02.svg",
    category: "Case Studies",
    title: "HD Career Story: Sharon Mehta",
    description: "Sharon Mehta, Teaching and Learning Manager in our Education & Skills team, explains how she was bitten by the travel bug and embraced different cultures, before settling into her 23-year career with HD.",
    date: "Wednesday, February 12, 2025",
    linkHref: "/careers/career-stories/career-stories-detail",
  },
  {
    id: "case-study-3",
    image: "/images/news-03.svg",
    category: "Case Studies",
    title: "HD Career Story: Renée Bell",
    description: "Renée Bell started as an apprentice and is now a Digital Marketing Specialist. She shares how she charted her course to where she wants to get to.",
    date: "Thursday, January 30, 2025",
    linkHref: "/careers/career-stories/career-stories-detail",
  },
  {
    id: "case-study-4",
    image: "/images/news-04.svg",
    category: "Case Studies",
    title: "HD Career Story: Nick Shepherd",
    description: "Nick Shepherd's ambition was to work in marketing, and work is what he did to get there. He shares how giving him the opportunity to progress from a Trainee Manager to a Partnership Manager within our GM Business Growth Hub.",
    date: "Thursday, December 19, 2024",
    linkHref: "/careers/career-stories/career-stories-detail",
  },
  {
    id: "case-study-5",
    image: "/images/news-05.svg",
    category: "Case Studies",
    title: "HD Career Story: Frank Kinkade",
    description: "Frank Kinkade, Business Development Manager at HD, discusses how he made the alternative route of HD his own, shares his wealth of experience and progress into new roles.",
    date: "Thursday, November 14, 2024",
    linkHref: "/careers/career-stories/career-stories-detail",
  },
  {
    id: "case-study-6",
    image: "/images/news-06.svg",
    category: "Case Studies",
    title: "HD Career Story: Dawn Duggan",
    description: "Dawn Duggan, Head of Programmes and Initiatives at the GM Business Growth Hub, tells us what drives her, what keeps her at HD, and what keeps her going.",
    date: "Tuesday, October 22, 2024",
    linkHref: "/careers/career-stories/career-stories-detail",
  },
  {
    id: "case-study-7",
    image: "/images/news-07.svg",
    category: "Case Studies",
    title: "HD Career Story: Jamie Meredith",
    description: "Jamie Meredith joined HD as a Credit Controller, and over 10 years she has worked in five of our business areas and now leads a Skills team at HD Education & Skills.",
    date: "Tuesday, October 1, 2024",
    linkHref: "/careers/career-stories/career-stories-detail",
  },
  {
    id: "case-study-8",
    image: "/images/news-08.svg",
    category: "Case Studies",
    title: "HD Career Story: Jo Li",
    description: "Jo Li relocated to the UK from Hong Kong in 2021 and since then has worked in two business areas and is now Head of Marketing at GM Business Growth Hub.",
    date: "Monday, September 23, 2024",
    linkHref: "/careers/career-stories/career-stories-detail",
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
                  <span className="inline-block mb-2 px-3 py-1 text-xs font-medium text-[#ff2424] bg-red-50 rounded-full">
                    {article.category}
                  </span>
                  <p className="text-gray-500 text-xs">{article.date}</p>
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ff2424]  transition-colors duration-300 line-clamp-2 min-h-[50px]">
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
                  <span className="inline-block mb-2 px-3 py-1 text-xs font-medium text-[#ff2424] bg-red-50 rounded-full">
                    {article.category}
                  </span>
                   <p className="text-gray-500 text-xs">{article.date}</p>
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ff2424] transition-colors duration-300 line-clamp-2 min-h-[50px]">
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
                 
                </div>
              </div>
            </Link>
          ))}
        </div>
       
      </div>
    </section>
  )
}
