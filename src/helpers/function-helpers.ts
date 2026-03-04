import slugify from 'slugify';
import { getPageByEndpointAction } from '../actions/page-action';
import { getBlogCategoryByEndpointAction } from '@/actions/blog-category-action';
import { getBlogByEndpointAction } from '@/actions/blog-action';
import { ParsedCookie } from './classes';

export const stripHtmlAndTruncate = (html: string, maxLength: number) => {
  const text = html.replace(/<[^>]*>/g, '');
  return text.length > maxLength ? text.substring(0, maxLength) : text;
};

export const validateImageFile = (file: File) => {
  const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  return validTypes.includes(file.type);
};

/**
 * Sanitize endpoint string to only allow URL-safe characters
 * Allows: lowercase letters, numbers, hyphens
 */
export const sanitizeEndpoint = (input: string): string => {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

export const generateUniqueEndpoint = async (
  title: string,
  model: 'blog' | 'landing',
  currentModelId?: string
): Promise<string> => {
  let slugifiedTitle = '';
  if (!title || title.trim().length === 0) {
    slugifiedTitle = 'no-title';
  } else {
    slugifiedTitle = title;
  }
  const baseEndpoint = slugify(slugifiedTitle, {
    replacement: '-',
    remove: undefined,
    lower: true,
    strict: false,
    locale: 'vi',
    trim: true,
  });

  let endpoint = baseEndpoint;
  let isUnique = false;

  while (!isUnique) {
    if (model === 'blog') {
      const existingBlog = await getBlogByEndpointAction(endpoint);
      const blogConflict =
        existingBlog.success &&
        existingBlog.data &&
        existingBlog.data.id !== currentModelId;

      if (blogConflict) {
        const randomSuffix = Math.floor(1000 + Math.random() * 9000);
        endpoint = `${baseEndpoint}-${randomSuffix}`;
      } else {
        isUnique = true;
      }
    } else {
      const [existingPage, existingBlogCategory] =
        await Promise.all([
          getPageByEndpointAction(endpoint),
          getBlogCategoryByEndpointAction(endpoint),
        ]);

      const pageConflict =
        existingPage.success &&
        existingPage.data &&
        existingPage.data.id !== currentModelId;

      const blogCategoryConflict =
        existingBlogCategory.success &&
        existingBlogCategory.data &&
        existingBlogCategory.data.id !== currentModelId;

      if (pageConflict || blogCategoryConflict) {
        const randomSuffix = Math.floor(1000 + Math.random() * 9000);
        endpoint = `${baseEndpoint}-${randomSuffix}`;
      } else {
        isUnique = true;
      }
    }
  }

  return endpoint;
};

export const formatPrice = (price: number): string => {
  return price.toLocaleString('vi-VN');
};

export function getEmbeddedVideoUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.replace('www.', '');

    if (hostname === 'youtube.com' || hostname === 'youtu.be') {
      if (hostname === 'youtu.be') {
        return `https://www.youtube-nocookie.com/embed/${parsed.pathname.slice(1)}`;
      }

      const videoId = parsed.searchParams.get('v');
      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}`;
      }

      if (parsed.pathname.startsWith('/embed/')) {
        if (hostname === 'youtube.com' || hostname === 'www.youtube.com') {
          const embedVideoId = parsed.pathname.split('/embed/')[1]?.split('?')[0];
          if (embedVideoId) {
            return `https://www.youtube-nocookie.com/embed/${embedVideoId}${parsed.search}`;
          }
        }
        return url;
      }
    }

    if (hostname === 'vimeo.com') {
      const videoId = parsed.pathname.split('/')[1];
      if (videoId) {
        return `https://player.vimeo.com/video/${videoId}`;
      }
    }

    return null;
  } catch {
    return null;
  }
}

export function isPathActive(pathname: string, itemPath: string, isRoot = false) {
  if (!itemPath) return false;
  if (isRoot) {
    return pathname === itemPath;
  }
  if (pathname === itemPath) return true;
  return pathname.startsWith(itemPath + '/');
}

export function parseSetCookie(setCookie: string | null): ParsedCookie {
  if (!setCookie) {
    return {
      name: '',
      value: '',
      options: {},
    };
  }
  const parts = setCookie.split(';').map((p) => p.trim());
  const [nameValue, ...attrs] = parts;
  const [name, value] = nameValue.split('=');
  const options: ParsedCookie['options'] = {};

  for (const attr of attrs) {
    const [key, val] = attr.split('=');

    switch (key.toLowerCase()) {
      case 'max-age':
        options.maxAge = Number(val);
        break;
      case 'path':
        options.path = val;
        break;
      case 'expires':
        options.expires = new Date(val);
        break;
      case 'httponly':
        options.httpOnly = true;
        break;
      case 'samesite':
        options.sameSite = val.toLowerCase() as 'lax' | 'strict' | 'none';
        break;
      case 'secure':
        options.secure = true;
        break;
    }
  }

  return { name, value, options };
}
