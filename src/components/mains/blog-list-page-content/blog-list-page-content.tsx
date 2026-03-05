import { getAllPublicBlogsAction } from '@/actions/blog-action';
import BlogListPageContentContainer from './blog-list-page-content-container/blog-list-page-content-container';

export default async function BlogListPageContent() {
  const blogsResponse = await getAllPublicBlogsAction();

  return (
    <BlogListPageContentContainer blogsData={blogsResponse.data ?? []} />
  );
}
