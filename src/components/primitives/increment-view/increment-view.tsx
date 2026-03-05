'use client';

import { useEffect } from 'react';
import { incrementBlogViewAction } from '@/actions/blog-action';

export default function IncrementView({ blogId }: { blogId: string }) {
  useEffect(() => {
    incrementBlogViewAction(blogId);
  }, [blogId]);

  return null;
}
