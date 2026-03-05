import { getBlogByEndpointAction } from '@/actions/blog-action';
import { Stack, Text, Group, Avatar, Divider } from '@mantine/core';
import IncrementView from '@/components/primitives/increment-view/increment-view';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import classes from './page.module.scss';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ endpoint: string }>;
}): Promise<Metadata> {
  const { endpoint } = await params;
  const blogResponse = await getBlogByEndpointAction(endpoint);

  if (!blogResponse.success || !blogResponse.data) {
    return { title: 'Blog Not Found' };
  }

  const blog = blogResponse.data;
  const description = blog.description
    ? blog.description.replace(/<[^>]*>/g, '').substring(0, 160)
    : 'Read this blog post from Elite Tech Talent';

  return {
    title: `${blog.title} | Elite Tech Talent`,
    description,
    openGraph: {
      title: blog.title,
      description,
      images: blog.mainImageUrl ? [blog.mainImageUrl] : [],
    },
    alternates: {
      canonical: `https://elite-techtalent.com/blogs/${endpoint}`,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ endpoint: string }>;
}) {
  const { endpoint } = await params;
  const blogResponse = await getBlogByEndpointAction(endpoint);

  if (!blogResponse.success || !blogResponse.data) {
    notFound();
  }

  const blog = blogResponse.data;
  const date =
    typeof blog.createdAt === 'string' ? new Date(blog.createdAt) : blog.createdAt;
  const authorName =
    blog.createdBy?.name || blog.createdBy?.email || 'Elite Tech Talent';
  const avatarLetter = authorName.charAt(0).toUpperCase();

  const categories =
    blog.blogCategoryBlogs?.map((bcb) => bcb.blogCategory?.title).filter(Boolean) ||
    [];

  return (
    <article className={classes.blogDetail}>
      <IncrementView blogId={blog.id} />

      <Link href={{ pathname: '/blogs' as string }} className={classes.backLink}>
        &larr; Back
      </Link>

      {blog.mainImageUrl && (
        <div className={classes.heroImage}>
          <Image
            src={blog.mainImageUrl}
            alt={blog.title}
            fill
            className={classes.image}
            priority
          />
        </div>
      )}

      <h1 className={classes.title}>{blog.title}</h1>

      <Group gap="md" className={classes.meta}>
        <Group gap={8}>
          <Avatar radius="xl" size={32} color="blue">
            {avatarLetter}
          </Avatar>
          <Text size="sm" c="dimmed">
            {authorName}
          </Text>
        </Group>
        <Text size="sm" c="dimmed">
          {dayjs(date).format('MMM DD, YYYY')}
        </Text>
        {categories.length > 0 && (
          <Text size="sm" c="dimmed">
            {categories.join(', ')}
          </Text>
        )}
      </Group>

      <Divider my="md" />

      {blog.content &&
        blog.content.trim() !== '' &&
        blog.content.trim() !== '<p></p>' && (
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className={classes.content}
          />
        )}

      {blog.additionalImageUrls && blog.additionalImageUrls.length > 0 && (
        <Stack gap="md" mt="xl">
          {blog.additionalImageUrls.map((url, index) => (
            <div key={index} className={classes.additionalImage}>
              <Image
                src={url}
                alt={`${blog.title} - image ${index + 1}`}
                fill
                className={classes.image}
              />
            </div>
          ))}
        </Stack>
      )}
    </article>
  );
}
