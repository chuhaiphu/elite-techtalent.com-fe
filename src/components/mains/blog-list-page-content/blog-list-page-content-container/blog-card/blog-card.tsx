import { Group, Text, Avatar } from '@mantine/core';
import { IBlogResponse } from '@/interfaces/blog-interface';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import classes from './blog-card.module.scss';

interface BlogCardProps {
  blog: IBlogResponse;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const date =
    typeof blog.createdAt === 'string'
      ? new Date(blog.createdAt)
      : blog.createdAt;
  const authorName =
    blog.createdBy?.name || blog.createdBy?.email || 'Elite Tech Talent';
  const avatarLetter = authorName.charAt(0).toUpperCase();

  return (
    <Link
      href={{ pathname: `/blogs/${blog.endpoint}` as string }}
      className={classes.cardLink}
    >
      <article className={classes.card}>
        {blog.mainImageUrl && (
          <div className={classes.imageWrapper}>
            <Image
              src={blog.mainImageUrl}
              alt={blog.title}
              fill
              className={classes.image}
            />
          </div>
        )}
        <div className={classes.cardBody}>
          <h2 className={classes.cardTitle}>{blog.title}</h2>
          {blog.description && (
            <p className={classes.cardDescription}>
              {blog.description.replace(/<[^>]*>/g, '').substring(0, 200)}
              {blog.description.length > 200 ? '...' : ''}
            </p>
          )}
          <Group gap="md" className={classes.meta}>
            {/* <Group gap={8}>
              <Avatar radius="xl" size={28} color="blue">
                {avatarLetter}
              </Avatar>
              <Text size="sm" c="dimmed">
                {authorName}
              </Text>
            </Group> */}
            <Text size="sm" c="dimmed">
              {dayjs(date).format('MMM DD, YYYY')}
            </Text>
          </Group>
        </div>
      </article>
    </Link>
  );
}
