'use client'

import Image from 'next/image'
import { SanityDocument } from '@sanity/client'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image'
import { Image as ImageType } from 'sanity'
import { ImageBox } from '../shared/ImageBox'
import { formatDate } from '@/utils'
import { BsFillCalendar2DateFill } from 'react-icons/bs'

export default function Blog({ post }: { post: SanityDocument }) {
  console.log(post.body)
  return (
    <main className='prose prose-lg container mx-auto p-5 py-24'>
      <p className='flex gap-2 items-center text-base mb-8'>
        <BsFillCalendar2DateFill />
        {post?.publishedAt ? formatDate(post.publishedAt) : 'publishedAt'}
      </p>

      {post?.title ? <h1>{post.title}</h1> : <h1>Untitled</h1>}
      {post?.mainImage && (
        <div className='relative h-20 w-full overflow-clip rounded-xl pt-[56.25%]'>
          <Image
            className='z-10 h-full w-full rounded-xl object-cover object-center'
            src={urlForImage(post.mainImage.image).url()}
            placeholder='blur'
            fill
            alt='Lady'
            blurDataURL={post.mainImage.lqip}
          />
        </div>
      )}
      {post?.body && (
        <PortableText
          value={post.body}
          components={{
            types: {
              image: ({
                value
              }: {
                value: ImageType & { alt?: string; caption?: string }
              }) => {
                return (
                  <div className='my-8 w-[80%] mx-auto space-y-2'>
                    <ImageBox image={value} />
                    {value?.alt && (
                      <div className='font-sans text-sm text-gray-600 text-center'>
                        {value.alt}
                      </div>
                    )}
                  </div>
                )
              }
            }
          }}
        />
      )}
    </main>
  )
}
