import type { Metadata } from 'next';
import BlogListPageContent from '@/components/mains/blog-list-page-content/blog-list-page-content';

export const metadata: Metadata = {
  title: 'Blog - Elite Tech Talent',
  description:
    'Read our latest insights on IT staffing, technology trends, and industry best practices.',
};

export default function BlogListPage() {
  return <BlogListPageContent />;
}
