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
export type Tag = {
  title: string
  slug: string
  description: string
}
export interface Post extends SanityDocument {
  title: string
  slug: string
  publishedAt: string
  author: any
  tags: Tag[]
  body?: any
  description: string
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
          title={`${post.title} blog link`}
          href={`/blog/${post.slug}`}
        >
          <Image
            src={urlForImage(post.mainImage.image).url()}
            alt={post.mainImage.alt ?? `${post?.title} cover image`}
            title={post.mainImage.alt ?? `${post?.title} cover image`}
            placeholder='blur'
            blurDataURL={post.mainImage.lqip}
            width={post.mainImage.dimensions?.width ?? 1200}
            height={post.mainImage.dimensions?.height ?? 630}
            className='aspect-square h-full w-full object-cover object-center transition-all duration-200 ease-in-out hover:scale-105'
          />
        </Link>
      )}
      <div className='col-span-12 lg:col-span-8'>
        <span className='text-sm font-semibold uppercase text-accent dark:text-accent-dark '>
          {post?.tags && post.tags[0].title}
        </span>
        {post?.slug && (
          <Link href={`/blog/${post.slug}`} title={`${post.title} blog link`}>
            <h2 className='line-clamp-3 text-lg font-semibold capitalize text-dark dark:text-light'>
              <span
                className={cx(styles.underline, 'from-accent/50 to-accent/50')}
              >
                {post.title}
              </span>
            </h2>
          </Link>
        )}
        {post?.publishedAt && (
          <p className='mt-2 flex items-center gap-2 text-sm text-gray-dark dark:text-gray-light'>
            <BsFillCalendar2DateFill />
            {formatDate(post.publishedAt)}
          </p>
        )}
      </div>
    </div>
  )
}

export default BlogLayoutOne
