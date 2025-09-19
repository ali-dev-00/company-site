import React from "react"
import { getBlogBySlug } from "@/services/blogs.service"
import type { Blog } from "@/types/blog-types"
import Link from "next/link"
import { getPublishedBlogs } from "@/services/blogs.service";
import { SocialShareIcons } from "@/components/ui/social-share-icons";
import { FeaturedBlogCard } from "@/components/blog/featured-blog-card";
import RichText from "@/components/common/RichText";

// (Removed unused estimateReadTime utility to satisfy lint rule)

// Route params type
type RouteParams = { slug: string }

export async function generateMetadata({ params }: { params?: Promise<RouteParams> }) {
  const { slug } = await (params ?? Promise.resolve({ slug: '' }))
  const res = await getBlogBySlug(slug)
  if (!res?.status || !res.data) return { title: 'News' }
  const blog = res.data
  return {
    title: blog.title,
    description: blog.description?.slice(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.description?.slice(0, 160),
      images: blog.featuredImage ? [blog.featuredImage] : undefined,
    },
  }
}

export default async function BlogDetailPage({ params }: { params?: Promise<RouteParams> }) {
  const { slug } = await (params ?? Promise.resolve({ slug: '' }))
  const res = await getBlogBySlug(slug)
  if (!res?.status || !res.data) {
    return (
      <div className="p-16 text-center">
    <h2 className="text-2xl font-bold">Article not found</h2>
    <p className="text-gray-600 mt-4">We couldn&apos;t find the article you&apos;re looking for.</p>
        <Link href="/news" className="mt-6 inline-block text-sm text-blue-600 hover:underline">Back to news</Link>
      </div>
    )
  }

  const blog: Blog = res.data
  const pageUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + `/news/${slug}`

  // Fetch latest published blogs (excluding current)
  const latestBlogsRes = await getPublishedBlogs(1, 4)
  const latestBlogs: Blog[] = latestBlogsRes?.status && Array.isArray(latestBlogsRes.data)
    ? latestBlogsRes.data.filter(b => b.slug !== blog.slug).slice(0, 4)
    : []

  return (
    <main className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Article */}
        <article className="lg:col-span-2">
          {/* Featured Card Header */}
          <div className="mb-10">
            <FeaturedBlogCard blog={blog} />
          </div>
          {/* Remove old header (title/category/share) now replaced by card */}


          <section className="mt-10 border border-gray-300 rounded-xl p-6 bg-white shadow-sm">
            <RichText html={blog.description} />
          </section>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="sticky top-28 flex flex-col gap-8">
            {/* Categories navigation removed per design change */}

            {/* Latest Blogs */}
            <div className="border border-gray-300 rounded-xl p-6 bg-white shadow-sm">
              <h4 className="text-sm font-semibold mb-4 text-gray-900">Latest Blogs</h4>
              {latestBlogs.length === 0 ? (
                <p className="text-xs text-gray-500">No recent posts.</p>
              ) : (
                <ul className="space-y-3 text-sm">
                  {latestBlogs.map(b => (
                    <li key={b._id} className="group">
                      <Link href={`/news/${b.slug}`} className="text-gray-800 group-hover:text-[#ff2424] hover:underline line-clamp-2 font-medium">
                        {b.title}
                      </Link>
                      {b.category && typeof b.category === 'object' && (b.category.name || b.category.slug) && (
                        <div className="mt-1 text-[10px] text-gray-500 uppercase tracking-wide">{b.category.name || b.category.slug}</div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Social Share */}
            <div className="border border-gray-300 rounded-xl p-6 bg-white shadow-sm">
              <h4 className="text-sm font-semibold mb-4 text-gray-900">Share this article</h4>
              <SocialShareIcons url={pageUrl} title={blog.title} />
              <p className="mt-3 text-[10px] text-gray-500">Share on your favorite platforms.</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
