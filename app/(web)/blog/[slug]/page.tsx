import Blog from '@/components/blog/Blog'
import PreviewBlog from '@/components/blog/PreviewBlog'
import PreviewProvider from '@/components/preview/PreviewProvider'
import { client } from '@/sanity/lib/client'
import { sanityFetch, token } from '@/sanity/lib/fetch'
import { urlForImage } from '@/sanity/lib/image'
import { postPathsQuery, postQuery } from '@/sanity/lib/queries'
import { siteMetadata } from '@/utils/siteMetaData'
import { SanityDocument } from 'next-sanity'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery)

  return posts.map((post: any) => ({
    slug: post.params.slug
  }))
}

// Dynamic metadata for SEO
export async function generateMetadata({
  params
}: {
  params: { slug: string }
}) {
  try {
    const slug = params.slug

    // Find the blog for the current page.
    const blog = await sanityFetch<SanityDocument>({
      query: postQuery,
      params,
      tags: [`post:${params.slug}`]
    })
    if (!blog)
      return {
        title: 'Page not found',
        description: "The page you're looking for doesn't exist"
      }

    const publishedAt = new Date(blog.publishedAt).toISOString()
    const updatedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString()
    let imageList = [siteMetadata.socialBanner]

    if (blog?.mainImage) {
      imageList = [
        urlForImage(blog.mainImage.image).width(1200).height(630).url()
      ]
    }

    const authors = blog?.author ? [blog.author.name] : siteMetadata.author

    return {
      title: blog.title,
      description: blog.description,
      alternates: {
        canonical: `blog/${blog.slug}`
      },
      publisher: siteMetadata.title,
      openGraph: {
        title: blog.title,
        description: blog.description,
        url: `/blog/${blog.slug}`,
        siteName: siteMetadata.title,
        type: 'article',
        locale: 'en_US',
        publishedTime: publishedAt,
        modifiedTime: updatedAt,
        images: `/og-image/${slug}`,
        authors: authors.length > 0 ? authors : [siteMetadata.author]
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: blog.description,
        images: `/og-image/${slug}`
      }
    }
  } catch (err) {
    console.error(err)
    return {
      title: 'Page not found',
      description: "The page you're looking for doesn't exist"
    }
  }
}

export default async function BlogPage({
  params
}: {
  params: { slug: string }
}) {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params,
    tags: [`post:${params.slug}`]
  })
  const isDraftMode = draftMode().isEnabled

  if (!post) {
    notFound()
  }

  let imageList = [siteMetadata.socialBanner]

  if (post?.mainImage) {
    imageList = [
      urlForImage(post.mainImage.image).width(1200).height(630).url()
    ]
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url
    },
    headline: post.title,
    image: imageList,
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.updatedAt || post.publishedAt).toISOString(),
    author: [
      {
        '@type': 'Person',
        name: post?.author ? post.author.name : siteMetadata.author,
        url: siteMetadata.siteUrl
      }
    ]
  }
  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewBlog post={post} />
      </PreviewProvider>
    )
  }
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Blog post={post} />
    </>
  )
}
