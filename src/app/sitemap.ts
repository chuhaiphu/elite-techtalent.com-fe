import { MetadataRoute } from 'next'
import { getAllPublicBlogsApi } from '@/apis/blog-apis'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://elite-techtalent.com'

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/why-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-solution`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  let blogPages: MetadataRoute.Sitemap = []
  try {
    const blogsResponse = await getAllPublicBlogsApi({ visibility: 'PUBLIC' })
    if (blogsResponse.data) {
      blogPages = blogsResponse.data.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.endpoint}`,
        lastModified: new Date(blog.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }))
    }
  } catch {
    // Sitemap generation should not fail if the API is unavailable
  }

  return [...staticPages, ...blogPages]
}