import React from 'react';

interface RichTextProps {
  html: string | undefined | null;
  className?: string;
}

/**
 * RichText component wraps HTML produced by the editor and applies
 * consistent typography styles to headings, paragraphs, lists, etc.
 */
export const RichText: React.FC<RichTextProps> = ({ html, className = '' }) => {
  if (!html) return null;
  return (
    <div
      className={`richtext-content ${className}`.trim()}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default RichText;
