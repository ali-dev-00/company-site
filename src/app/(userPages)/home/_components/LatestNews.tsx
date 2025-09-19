import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TitleWithUnderline from "../../components/common/Title-with-underline";
import Link from "next/link";
import { getLatestNews } from "@/services/blogs.service";
import type { Blog } from "@/types/blog-types";

export default async function LatestNews() {
  const res = await getLatestNews(3);
  const items = Array.isArray(res?.data) ? (res.data as Blog[]) : [];
  const toPlain = (html: string, wordLimit = 30) => {
    if (!html) return '';
    // Remove tags
    let text = html.replace(/<[^>]*>/g, ' ');
    // Decode a few common entities
    text = text
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
    // Collapse whitespace
    text = text.replace(/\s+/g, ' ').trim();
    if (!wordLimit) return text;
    const parts = text.split(' ');
    if (parts.length <= wordLimit) return text;
    return parts.slice(0, wordLimit).join(' ') + '…';
  };
  return (
    <section className="py-8 bg-[url('/home/latest-news-bg.png')]">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 max-w-[210px]">
          <TitleWithUnderline title="Latest News" />
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {items.map((news) => (
            <div
              key={news._id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105 transform group "
            >
              {/* Card Image */}
              <div className="relative h-48 w-full cursor-pointer">
                <Link href={`/news/${news.slug}`} className="absolute inset-0 z-10" >
                <Image
                  src={news.featuredImage || "/placeholder.svg"}
                  alt={news.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                </Link>
              </div>

              <div className="p-5 relative">
                <Link href={`/news/${news.slug}`} className="cursor-pointer  text-lg font-semibold text-gray-900 group-hover:text-[#ff2424] transition-colors duration-300 line-clamp-2 min-h-[48px]">
                  {news.title}
                </Link>
                <p className="rt-editor text-gray-600 leading-relaxed mb-5 line-clamp-4 min-h-[88px]">
                  {toPlain(news.description)}
                </p>
                 <Link
                  href={`/news/${news.slug}`}
                  className="inline-flex cursor-pointer items-center group-hover:underline text-[#ff2424] hover:text-red-600 font-medium text-sm transition-all duration-300 group"
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
