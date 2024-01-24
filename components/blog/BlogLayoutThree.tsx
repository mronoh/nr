import styles from '@/styles'
import { cx, formatDate } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Blog, Post } from './BlogLayoutOne'
import { urlForImage } from '@/sanity/lib/image'
import { BsFillCalendar2DateFill } from 'react-icons/bs'

const BlogLayoutThree = ({ post }: { post: Post }) => {
  return (
    <div className='flex flex-col text-dark dark:text-light'>
      <Link
        className='col-span-4 h-full overflow-hidden rounded-xl'
        href={`/blog/${post?.slug}/`}
        title={`${post.title} blog link`}
      >
        {post?.mainImage && (
          <Image
            src={urlForImage(post.mainImage.image).url()}
            alt={post.mainImage.alt ?? `${post?.title} cover image`}
            title={post.mainImage.alt ?? `${post?.title} cover image`}
            placeholder='blur'
            blurDataURL={post.mainImage.lqip}
            width={post.mainImage.dimensions?.width ?? 1200}
            height={post.mainImage.dimensions?.height ?? 630}
            className='aspect-[4/3] h-full w-full object-cover object-center transition-all duration-200 ease-in-out hover:scale-105'
          />
        )}
      </Link>
      <div className='mt-4 flex w-full flex-col'>
        {post?.tags && (
          <span className='text-sm font-semibold uppercase text-accent dark:text-accent-dark'>
            {post?.tags[0].title}
          </span>
        )}
        <Link
          href={`/blog/${post?.slug}/`}
          className='mt-1'
          title={`${post.title} blog link`}
        >
          <h2 className='text-lg font-semibold capitalize text-dark dark:text-light'>
            <span
              className={cx(styles.underline, 'from-accent/50 to-accent/50')}
            >
              {post?.title}
            </span>
          </h2>
        </Link>
        <p className='mt-2 flex items-center gap-2 text-sm text-gray-dark dark:text-gray-light'>
          <BsFillCalendar2DateFill />
          {formatDate(post?.publishedAt)}
        </p>
      </div>
    </div>
  )
}

export default BlogLayoutThree
