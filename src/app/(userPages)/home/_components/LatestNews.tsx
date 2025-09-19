"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TitleWithUnderline from "../../components/common/Title-with-underline";
import Link from "next/link";
import { getLatestNews } from "@/services/blogs.service";
import type { Blog } from "@/types/blog-types";
import { useEffect, useState, useCallback } from "react";

export default function LatestNews() {
  const [items, setItems] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const toPlain = useCallback((html: string, wordLimit = 30) => {
    if (!html) return '';
    let text = html.replace(/<[^>]*>/g, ' ');
    text = text
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
    text = text.replace(/\s+/g, ' ').trim();
    if (!wordLimit) return text;
    const parts = text.split(' ');
    if (parts.length <= wordLimit) return text;
    return parts.slice(0, wordLimit).join(' ') + '…';
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true); setError(null);
        const res = await getLatestNews(3);
        if (!cancelled && res?.status && Array.isArray(res.data)) {
          setItems(res.data as Blog[]);
        }
      } catch (e) {
        if (!cancelled) setError('Failed to load latest news');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="py-8 bg-[url('/home/latest-news-bg.png')]">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 max-w-[210px]">
          <TitleWithUnderline title="Latest News" />
        </div>
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" aria-label="Loading latest news">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
                <div className="h-48 w-full bg-gray-200" />
                <div className="p-5 space-y-4">
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-11/12" />
                    <div className="h-3 bg-gray-200 rounded w-2/3" />
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-24" />
                </div>
              </div>
            ))}
          </div>
        )}
        {error && !loading && (
          <div className="text-center text-sm text-red-600 mb-8">{error}</div>
        )}
        {!loading && !error && (
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
        )}

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
