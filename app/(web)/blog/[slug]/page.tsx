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
import { Suspense } from 'react'
import Loading from './loading'
import Transition from '@/components/shared/Transition'

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
      tags: ['post']
    })
    if (!blog)
      return {
        title: 'Page not found',
        description: "The page you're looking for doesn't exist"
      }

    const ogUrl = new URL(`${siteMetadata.siteUrl}/api/og-image`)
    ogUrl.searchParams.set('contentType', 'blog')
    ogUrl.searchParams.set('title', blog.title)
    ogUrl.searchParams.set('tag', blog?.tags[0].title)
    ogUrl.searchParams.set('image', blog?.mainImage?.image)
    ogUrl.searchParams.set('author', blog?.author?.name)
    ogUrl.searchParams.set('estimatedReadingTime', blog?.estimatedReadingTime)
    ogUrl.searchParams.set('publishedAt', blog?.publishedAt)

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
        canonical: `/blog/${blog.slug}`
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
        images: ogUrl.toString(),
        authors: authors.length > 0 ? authors : [siteMetadata.author]
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: blog.description,
        images: ogUrl.toString()
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
  const isDraftMode = draftMode().isEnabled

  const post = await sanityFetch<any>({
    query: postQuery,
    params,
    tags: ['post']
  })

  if (!post) {
    notFound()
  }

  const ogUrl = new URL(`${siteMetadata.siteUrl}/api/og-image`)
  ogUrl.searchParams.set('contentType', 'blog')
  ogUrl.searchParams.set('title', post.title)
  ogUrl.searchParams.set(
    'tag',
    post?.tags?.length > 0 ? post?.tags[0].title : ''
  )
  ogUrl.searchParams.set('image', post?.mainImage?.image)
  ogUrl.searchParams.set('author', post?.author?.name)
  ogUrl.searchParams.set(
    'estimatedReadingTime',
    post?.estimatedReadingTime ?? 'undefined'
  )
  ogUrl.searchParams.set('publishedAt', post?.publishedAt)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteMetadata.siteUrl}/blog/${post.slug}`
    },
    headline: post.title,
    image: [ogUrl.toString()],
    datePublished: post.publishedAt
      ? new Date(post.publishedAt).toISOString()
      : '',
    dateModified: post.publishedAt
      ? new Date(post.updatedAt || post.publishedAt).toISOString()
      : '',
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
      <Suspense fallback={<Loading />}>
        <Transition key={post._id}>
          <Blog post={post} />
        </Transition>
      </Suspense>
    </>
  )
}
