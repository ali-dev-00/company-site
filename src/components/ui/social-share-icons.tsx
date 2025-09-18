"use client";
import React from 'react';
import { CopyLinkButton } from './copy-link-button';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface SocialShareIconsProps {
  url: string;
  title?: string;
  className?: string;
  iconSize?: number;
}

// Instagram doesn't have a direct share-to-feed URL for arbitrary links via web; we'll just copy the link.
export const SocialShareIcons: React.FC<SocialShareIconsProps> = ({ url, title, className, iconSize = 18 }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title || '');

  const handleInstagramClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Fallback: copy link (button below also handles copying but this provides instant feedback)
    navigator.clipboard.writeText(url).catch(() => {});
  };

  return (
    <div className={"flex items-center gap-3 " + (className || '')}>
      <a
        aria-label="Share on X"
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noreferrer"
        className="p-2 rounded-md border border-gray-200 hover:bg-gray-100  transition"
      >
        <Twitter size={iconSize} className="text-sky-500" />
      </a>
      <a
        aria-label="Share on Facebook"
        href={`https://www.facebook.com/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        className="p-2 rounded-md border border-gray-200 hover:bg-gray-100  transition"
      >
        <Facebook size={iconSize} className="text-blue-600" />
      </a>
      <button
        aria-label="Copy link for Instagram"
        onClick={handleInstagramClick}
        className="p-2 rounded-md border border-gray-200 hover:bg-gray-100  transition"
      >
        <Instagram size={iconSize} className="text-pink-500" />
      </button>
      <CopyLinkButton value={url} copyLabel="Copy" copiedLabel="Copied" className="text-xs" />
    </div>
  );
};
