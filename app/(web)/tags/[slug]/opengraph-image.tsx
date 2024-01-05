/* eslint-disable @next/next/no-img-element */
// @ts-nocheck

import { tagQuery } from '@/sanity/lib/queries'
import { ImageResponse } from 'next/og'
import { sanityFetch } from '@/sanity/lib/fetch'

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
  // BG Image
  const bgImage = await fetch(
    new URL('@/public/images/tags-og-bg.jpg', import.meta.url)
  ).then(res => res.arrayBuffer())

  // Font
  const InterBold = fetch(
    new URL('@/styles/font/Inter-Bold.ttf', import.meta.url)
  ).then(res => res.arrayBuffer())

  const slug = params.slug
  // if (slug === 'all') {
  //   return
  // }
  let tag = {}
  if (slug === 'all') {
    tag = {
      title: 'All',
      description:
        "Unlock the world's stories with Ngworocks Blogs. Dive into captivating tales of travel, culture, and values. Let the exploration begin!"
    }
  } else {
    tag = await sanityFetch<any>({
      query: tagQuery,
      params,
      tags: ['tag']
    })
  }

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw='relative flex w-full h-full flex items-center justify-center '>
        {/* Background */}
        <img
          tw='absolute left-0 top-0 bottom-0 w-full'
          src={bgImage}
          alt={tag?.title}
        />
        {/* Content */}
        <div tw='flex flex-col text-white w-[80%] mx-auto'>
          {/* Title */}
          <div tw='text-7xl font-bold  text-center'>
            {tag?.title + ' ' + 'blogs'}
          </div>
          {/* Tags */}
          <div tw='flex mt-6 items-center text-4xl text-white'>
            <div tw='font-semibold text-[#91E3A9]'>{tag?.description}</div>
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
          style: 'normal',
          weight: 400
        }
      ]
    }
  )
}
