import React from 'react';
import Image from 'next/image';
import type { Blog } from '@/types/blog-types';

interface FeaturedBlogCardProps {
  blog: Blog & { authorName?: string };
  className?: string;
}

// Utility: format date
function formatDate(date?: string) {
  if (!date) return '';
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

/**
 * FeaturedBlogCard
 * Displays a large horizontal card with dark overlay, left content and right image area.
 * Static author label per request: "Horumarka Dadka". Static comments count text: "No Comments".
 */
export const FeaturedBlogCard: React.FC<FeaturedBlogCardProps> = ({ blog, className }) => {
  const categoryObj = blog.category && typeof blog.category === 'object' ? blog.category : null;
  const categoryName = categoryObj?.name || (typeof blog.category === 'string' ? undefined : undefined);
  // Category slug no longer used for linking (category route removed)
  // const categorySlug = categoryObj?.slug; // removed to satisfy unused var rule
  return (
    <div className={`relative w-full rounded-xl overflow-hidden bg-neutral-900 text-white flex flex-col md:flex-row ${className || ''}`}>      
      {/* Left content overlay */}
      <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-center gap-6">
        {categoryName && (
          <span className="inline-flex w-max whitespace-nowrap items-center justify-center bg-[#ecebea] text-neutral-800 text-[13px] font-semibold px-4 py-1.5 rounded-full leading-none shadow-sm">
            {categoryName}
          </span>
        )}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl">{blog.title}</h1>
        <div className="flex flex-wrap items-center gap-5 text-sm text-gray-200">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1">
              <CalendarIcon className="w-4 h-4" />
              {formatDate(blog.postedOn || blog.createdAt)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <CommentsIcon className="w-4 h-4" />
            No Comments
          </div>
          <div className="flex items-center gap-1">
            <AuthorIcon className="w-4 h-4" />
            Horumarka Dadka
          </div>
        </div>
      </div>
      {/* Right image */}
      {blog.featuredImage && (
        <div className="relative w-full md:w-[50%] h-72 md:h-auto min-h-full">
          <Image src={blog.featuredImage} alt={blog.title} fill priority className="object-cover" />
          {/* Gradient fade from image to dark left side for better readability */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent" />
        </div>
      )}
    </div>
  );
};

const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
);
const CommentsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
);
const AuthorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
