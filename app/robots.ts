import { siteMetadata } from '@/utils/siteMetaData'
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
  }
}