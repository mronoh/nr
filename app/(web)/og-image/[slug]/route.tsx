import { client } from '@/sanity/lib/client'
import { sanityFetch } from '@/sanity/lib/fetch'
import { urlForImage } from '@/sanity/lib/image'
import { postPathsQuery, postQuery } from '@/sanity/lib/queries'
import { formatDate } from '@/utils'
import { SanityDocument } from 'next-sanity'
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

export const size = {
  width: 1200,
  height: 630
}

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  // Font
  const InterBold = fetch(
    new URL('@/styles/font/Inter-Bold.ttf', import.meta.url)
  ).then(res => res.arrayBuffer())

  try {
    const { slug } = params

    if (!slug) {
      // not a blog post
      return new ImageResponse(
        (
          <div
            className='border-l-4 border-yellow-500 bg-yellow-100 p-4 text-yellow-700'
            role='alert'
          >
            <p className='font-bold'>Notice</p>
            <p>Sorry, the page you're looking for does not exist.</p>
          </div>
        )
      )
    }

    const post = await sanityFetch<SanityDocument>({
      query: postQuery,
      params,
      tags: [`post:${params.slug}`]
    })

    return new ImageResponse(
      (
        // ImageResponse JSX element
        <div tw='relative flex w-full h-full flex items-center justify-center '>
          {/* Background */}
          <div tw='absolute flex inset-0'>
            <img
              tw='flex flex-1'
              src={urlForImage(post?.mainImage.image)
                .width(1200)
                .height(630)
                .url()}
              alt={post?.title}
            />
            {/* Overlay */}
            <div tw='absolute flex inset-0 bg-black bg-opacity-50' />
          </div>
          {/* Content */}
          <div tw='flex flex-col text-neutral-50 px-10'>
            {/* Title */}
            <div tw='text-7xl font-bold  text-center'>{post?.title}</div>
            {/* Tags */}
            <div tw='flex mt-6 flex-wrap items-center text-4xl text-neutral-200 justify-center'>
              <div tw='font-semibold text-emerald-600'>
                {post?.tags[0].title}
              </div>
              <div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300 ' />
              <div>{post?.author.name}</div>
              <div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300' />
              <div>{`${post?.estimatedReadingTime} min read`}</div>
              <div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300' />
              <div>{formatDate(post?.publishedAt, 'MMM dd, yyyy')}</div>
            </div>
          </div>
        </div>
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
