import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TitleWithUnderline from "../../components/common/Title-with-underline";
import Link from "next/link";


interface NewsCard {
  id: string;
  title: string;
  image: string;
  description: string;
  link: string;
}

const newsItems: NewsCard[] = [
  {
    id: "growth-company-shortlisted",
    title: "Level 2 Award for Security Officers in Private Security Industry",
    image: "/home/latest-news-02.svg",
    description: `By collaborating with a diverse range of organisations, places and partnerships,
                we help you understand the potential
                impact of various scenarios to deliver
                measurable results and achieve
                economic growth.`,
    link: "/news/",
  },
  {
    id: "tehseen-ali-joins",
    title: "Level 2 Certificate in Cleaning Principles",
    image: "/home/latest-news-01.svg",
    description: `The Growth Company is a leading
provider of education, skills,
employment, youth and offender
rehabilitation support. Since 2020,
we have created over 42,000 new jobs,
supported over 48,000 clients into work
and seen over 102,000 businesses
innovate and transform.`,
    link: "/news/",
  },
  {
    id: "supporting-businesses-trade",
    title: "Level 2 Certificate in Cleaning and Support Services Skills",
    image: "/home/latest-news-03.svg",
    description: `Businesses face ongoing challenges
and since 2020, the Growth Company
has assisted over 102,000 businesses
to innovate, transform their businesses
and create new jobs.`,
    link: "/news/",
  },
];

export default function LatestNews() {
  return (
    <section className="py-8 bg-[url('/home/latest-news-bg.png')]">
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
                <h3 className="mb-6 text-lg font-semibold text-gray-900 group-hover:text-[#ff2424] transition-colors duration-300 line-clamp-2 min-h-[56px]">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 min-h-[120px]">
                  {news.description}
                </p>
                 <Link
                  href={news.link}
                  className="inline-flex items-center group-hover:underline text-[#ff2424] hover:text-red-600 font-medium text-sm transition-all duration-300 group"
                >
                  More Info
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:rotate-[-45deg]  transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All News Link */}
        <div className="text-center">
          <Link
            href="/news"
            className="inline-flex items-center text-[#ff2424] hover:text-red-600 font-medium text-md transition-all duration-300 group hover:underline"
          >
            View all news
            <ArrowRight className="ml-2 h-5 w-5 group-hover:rotate-[-45deg] transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
