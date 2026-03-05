import { Stack, Text } from '@mantine/core';
import { IBlogResponse } from '@/interfaces/blog-interface';
import BlogCard from './blog-card/blog-card';
import classes from './blog-list-page-content-container.module.scss';

interface BlogListPageContentContainerProps {
  blogsData: IBlogResponse[];
}

export default function BlogListPageContentContainer({
  blogsData,
}: BlogListPageContentContainerProps) {
  return (
    <div>
      <Stack gap={4} mb="xl">
        <h1 className={classes.pageTitle}>Blog</h1>
        <p className={classes.pageSubtitle}>
          Insights on IT staffing, technology trends, and industry best
          practices.
        </p>
      </Stack>

      {blogsData.length === 0 ? (
        <Text ta="center" c="dimmed" size="lg" mt="xl">
          No blog posts available yet.
        </Text>
      ) : (
        <Stack gap="xl">
          {blogsData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </Stack>
      )}
    </div>
  );
}
