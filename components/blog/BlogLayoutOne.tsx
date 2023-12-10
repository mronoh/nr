import styles from '@/styles'
import { cx, formatDate } from '@/utils'
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
const BlogLayoutOne = ({ blog }: { blog: Blog }) => {
  return (
    <div className='grid items-center gap-4 text-dark lg:grid-cols-12'>
      <Link
        className='col-span-12 h-full overflow-hidden rounded-xl border border-dark lg:col-span-4'
        href={blog.url}
      >
        <Image
          src={blog.image.filePath.replace('../public', '')}
          alt={blog.title}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          width={blog.image.width}
          height={blog.image.height}
          className='aspect-square h-full w-full object-cover object-center transition-all duration-200 ease-in-out hover:scale-105'
        />
      </Link>
      <div className='col-span-12 lg:col-span-8'>
        <span className='text-sm font-semibold uppercase text-accent'>
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className='mt-6'>
          <h2 className='text-lg font-semibold capitalize text-dark'>
            <span
              className={cx(styles.underline, 'from-accent/50 to-accent/50')}
            >
              {blog.title}
            </span>
          </h2>
        </Link>
        <p className='text-gray text-base'>{formatDate(blog.publishedAt)}</p>
      </div>
    </div>
  )
}

export default BlogLayoutOne
