"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TitleWithUnderline from "../../components/common/Title-with-underline";
import { useEffect, useState } from "react";
import { getPublishedBlogs } from "@/services/blogs.service";
import type { Blog } from "@/types/blog-types";

export default function NewsArchive() {
  const [articles, setArticles] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 9;
  const [total, setTotal] = useState(0);
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const load = async () => {
    setLoading(true);
    try {
      const res = await getPublishedBlogs(page, limit);
      if (res?.status && Array.isArray(res.data)) {
        setArticles(res.data);
        setTotal(res.pagination?.total ?? res.data.length);
      } else {
        setArticles([]);
        setTotal(0);
      }
    } catch (err) {
      console.error(err);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [page]);

  const stripHtml = (html?: string) => {
    if (!html) return "";
    return html
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  };

  const excerpt = (html?: string, len = 140) => {
    const text = stripHtml(html);
    if (text.length <= len) return text;
    return text.slice(0, len).trim() + "...";
  };

  return (
    <section className="pb-16 pt-8 bg-white">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="mb-8 max-w-[100px]">
          <TitleWithUnderline title="News" />
        </div>

        {/* Filter Dropdowns (currently UI-only) */}
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

        {/* News Cards Grid: first row (2 cards) */}
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading news...</div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No news found.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {articles.slice(0, 2).map((article) => (
                <Link
                  key={article._id}
                  href={`/news/${article.slug}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={article.featuredImage || "/images/news-01.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff2424]"></div>
                  </div>
                  <div className="p-6">
                    {(() => {
                      // category can be string (id) or populated object; only show badge if object with name
                      const cat = article.category;
                      if (
                        cat &&
                        typeof cat === "object" &&
                        "name" in cat &&
                        cat.name
                      ) {
                        return (
                          <div className="mb-4">
                            <span className="inline-block px-3 py-1 text-xs font-medium text-[#ff2424] bg-red-50 rounded-full">
                              {cat.name}
                            </span>
                          </div>
                        );
                      }
                      return null;
                    })()}
                    <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#ff2424] mb-4 transition-colors duration-300 line-clamp-2 min-h-[64px]">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4 min-h-[80px]">
                      {excerpt(article.description, 220)}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="inline-flex items-center hover:underline text-[#ff2424] hover:text-red-600 font-medium text-sm transition-colors duration-200">
                        Read more{" "}
                        <ArrowRight className="ml-2 h-4 w-4  group-hover:rotate-[-45deg] transition-transform duration-300" />
                      </span>
                      <p className="text-gray-500 text-xs">
                        {new Date(
                          article.postedOn || article.createdAt || ""
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Subsequent rows (3-column grid) */}
            {articles.length > 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {articles.slice(2).map((article) => (
                  <Link
                    key={article._id}
                    href={`/news/${article.slug}`}
                    className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={article.featuredImage || "/images/news-01.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff2424]"></div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-[#ff2424] bg-red-50 rounded-full">
                          News
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ff2424] mb-4 transition-colors duration-300 line-clamp-2 min-h-[56px]">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 min-h-[60px]">
                        {excerpt(article.description, 140)}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="inline-flex items-center hover:underline text-[#ff2424] hover:text-red-600 font-medium text-sm transition-colors duration-200">
                          Read more{" "}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:rotate-[-45deg] transition-transform duration-300" />
                        </span>
                        <p className="text-gray-500 text-xs">
                          {new Date(
                            article.postedOn || article.createdAt || ""
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}

        {/* Pagination controls (powered by backend) */}
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-3 py-2 ${
                p === page
                  ? "bg-black text-white"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
