import React from "react"
import { getBlogBySlug } from "@/services/blogs.service"
import type { Blog } from "@/types/blog-types"
import Image from "next/image"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const res = await getBlogBySlug(params.slug)
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

export default async function BlogDetailPage({ params }: Props) {
  const slug = params.slug
  const res = await getBlogBySlug(slug)
  if (!res?.status || !res.data) {
    return (
      <div className="p-16 text-center">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <p className="text-gray-600 mt-4">We couldn't find the article you're looking for.</p>
      </div>
    )
  }

  const blog: Blog = res.data

  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      {blog.featuredImage && (
        <div className="relative w-full h-80 mb-6">
          <Image src={blog.featuredImage} alt={blog.title} fill className="object-cover rounded-md" />
        </div>
      )}
      <div className="prose max-w-none">
        {/* description stored as HTML from the RichText editor */}
        <div dangerouslySetInnerHTML={{ __html: blog.description }} />
      </div>
      <div className="text-sm text-gray-500 mt-8">Published on: {new Date(blog.postedOn || blog.createdAt || '').toLocaleDateString()}</div>
    </article>
  )
}
