import Blog from '@/components/blog/Blog'
import PreviewBlog from '@/components/blog/PreviewBlog'
import PreviewProvider from '@/components/preview/PreviewProvider'
import { client } from '@/sanity/lib/client'
import { sanityFetch, token } from '@/sanity/lib/fetch'
import { postPathsQuery, postQuery } from '@/sanity/lib/queries'
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

export default async function BlogPage({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params })
  const isDraftMode = draftMode().isEnabled

  if (!post) {
    notFound()
  }
  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewBlog post={post} />
      </PreviewProvider>
    )
  }
  return <Blog post={post} />
}
