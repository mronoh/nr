import { urlForImage } from '@/sanity/lib/image'
import styles from '@/styles'
import { cx, formatDate } from '@/utils'
import { SanityDocument } from 'next-sanity'
import { BsFillCalendar2DateFill } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface Blog {
  title: string
  url: string
  publishedAt: string
  tags: string[]
  description?: string
  image: {
    filePath: string
    blurhashDataUrl: string
    width: number
    height: number
  }
}
type Tag = {
  title: string
  slug: string
}
export interface Post extends SanityDocument {
  title: string
  slug: string
  publishedAt: string
  author: any
  tags: Tag[]
  body?: any
  mainImage: {
    image: any
    lqip: string
    alt: string
    dimensions: {
      width: number
      height: number
    }
  }
}
const BlogLayoutOne = ({ post }: { post: Post }) => {
  return (
    <div className='grid items-center gap-4 text-dark lg:grid-cols-12'>
      {post?.mainImage && post?.slug && (
        <Link
          className='col-span-12 h-full overflow-hidden rounded-xl border border-dark lg:col-span-4'
          href={`/blog/${post.slug}`}
        >
          <Image
            src={urlForImage(post.mainImage.image).url()}
            alt={post.mainImage.alt ?? post?.title}
            placeholder='blur'
            blurDataURL={post.mainImage.lqip}
            width={post.mainImage.dimensions?.width ?? 1200}
            height={post.mainImage.dimensions?.height ?? 630}
            className='aspect-square h-full w-full object-cover object-center transition-all duration-200 ease-in-out hover:scale-105'
          />
        </Link>
      )}
      <div className='col-span-12 lg:col-span-8'>
        <span className='text-sm font-semibold uppercase text-accent'>
          {post?.tags && post.tags[0].title}
        </span>
        {post?.slug && (
          <Link href={`/blog/${post.slug}`}>
            <h2 className='text-lg font-semibold capitalize text-dark line-clamp-3'>
              <span
                className={cx(styles.underline, 'from-accent/50 to-accent/50')}
              >
                {post.title}
              </span>
            </h2>
          </Link>
        )}
        <p className='text-gray text-sm flex mt-2 gap-2 items-center'>
        <BsFillCalendar2DateFill />
        {post?.publishedAt ? formatDate(post.publishedAt) : 'publishedAt'}
      </p>
      </div>
    </div>
  )
}

export default BlogLayoutOne
