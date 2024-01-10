import BlogOgImage from '@/components/og/BlogOgImage'
import ServiceOgImage from '@/components/og/ServiceOgImage'
import TagOgImage from '@/components/og/TagOgImage'
import { client } from '@/sanity/lib/client'
import { postPathsQuery, postQuery } from '@/sanity/lib/queries'
import { siteMetadata } from '@/utils/siteMetaData'
import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery)

  return posts.map((post: any) => ({
    slug: post.params.slug
  }))
}

const size = {
  width: 1200,
  height: 630
}

export async function GET(request: Request) {
  // Font
  const InterBold = fetch(
    new URL('@/styles/font/Inter-Bold.ttf', import.meta.url)
  ).then(res => res.arrayBuffer())

  // BG Image
  const bgImage = await fetch(
    new URL('@/public/images/tags-og-bg.jpg', import.meta.url)
  ).then(res => res.arrayBuffer())

  try {
    const { searchParams } = new URL(request.url)

    const hasContentType = searchParams.has('contentType')
    const contentType = hasContentType
      ? searchParams.get('contentType')
      : undefined
    const hasTitle = searchParams.has('title')
    const title = hasTitle ? searchParams.get('title') : siteMetadata.title
    const hasTag = searchParams.has('tag')
    const tag = hasTag ? searchParams.get('tag') : siteMetadata.title
    const hasDescription = searchParams.has('description')
    const description = hasDescription
      ? searchParams.get('description')
      : siteMetadata.title
    const hasImage = searchParams.has('image')
    const image = hasImage ? searchParams.get('image') : ''
    const hasAuthor = searchParams.has('author')
    const author = hasAuthor ? searchParams.get('author') : siteMetadata.title
    const hasEstimatedReadingTime = searchParams.has('estimatedReadingTime')
    const estimatedReadingTime = hasEstimatedReadingTime
      ? searchParams.get('estimatedReadingTime')
      : ''
    const hasPublishedAt = searchParams.has('publishedAt')
    const publishedAt = hasPublishedAt ? searchParams.get('publishedAt') : ''

    if (!hasContentType) {
      // not a blog post
      return new ImageResponse(
        (
          <TagOgImage
            bgImage={bgImage}
            title={siteMetadata.title}
            description={siteMetadata.description}
          />
        )
      )
    }

    return new ImageResponse(
      contentType === 'blog' ? (
        <BlogOgImage
          title={title!}
          tag={tag!}
          image={image}
          author={author!}
          estimatedReadingTime={estimatedReadingTime!}
          publishedAt={publishedAt!}
        />
      ) : contentType === 'tag' ? (
        <TagOgImage
          bgImage={bgImage}
          title={title!}
          description={description!}
        />
      ) : contentType === 'service' ? (
        <ServiceOgImage
          title={title!}
          image={image}
          description={description!}
        />
      ) : (
        <div className='text-red-500'>Error</div>
      ),
      // ImageResponse options
      {
        // For convenience, we can re-use the exported opengraph-image
        // size config to also set the ImageResponse's width and height.
        ...size,
        fonts: [
          {
            name: 'InterBold',
            data: await InterBold,
            style: 'normal'
          }
        ]
      }
    )
  } catch (err) {
    return new ImageResponse(
      (
        <div
          className='relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700'
          role='alert'
        >
          <strong className='font-bold'>Error!</strong>
          <span className='block sm:inline'> Something went wrong.</span>
        </div>
      )
    )
  }
}
