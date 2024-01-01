/* eslint-disable @next/next/no-img-element */

import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { postQuery } from '@/sanity/lib/queries'
import { formatDate } from '@/utils'
import { ImageResponse } from 'next/og'
import { notFound } from 'next/navigation'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'NgwoRocks | Blog'
export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  // Font
  const InterMedium = fetch(
    new URL('/public/font/Inter-Medium.ttf', import.meta.url)
  ).then(res => res.arrayBuffer())
  const slug = params.slug
  const post = await client.fetch(postQuery, { slug })

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
          <div tw='flex mt-6 flex-wrap items-center text-4xl text-neutral-200'>
            <div tw='font-semibold text-emerald-600'>{post?.tags[0].title}</div>
            <div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300 ' />
            <div>{post?.author.name}</div>
            <div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300' />
            <div>{`${post?.estimatedReadingTime} min read`}</div>
            <div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300' />
            <div>{formatDate(post?.publishedAt)}</div>
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
          name: 'InterMedium',
          data: await InterMedium,
          style: 'normal',
          weight: 400
        }
      ]
    }
  )
}
