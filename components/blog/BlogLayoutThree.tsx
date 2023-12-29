import styles from '@/styles'
import { cx, formatDate } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Blog, Post } from './BlogLayoutOne'
import { urlForImage } from '@/sanity/lib/image'
import { BsFillCalendar2DateFill } from 'react-icons/bs'

const BlogLayoutThree = ({ post }: { post: Post }) => {
  return (
    <div className='flex flex-col gap-4 text-dark dark:text-light'>
      <Link
        className='col-span-4 h-full overflow-hidden rounded-xl'
        href={`/blog/${post?.slug}`}
      >
        {post?.mainImage && (
          <Image
            src={urlForImage(post.mainImage.image).url()}
            alt={post.mainImage.alt ?? post?.title}
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
          <span className='dark:text-accent-dark text-sm font-semibold uppercase text-accent'>
            {post?.tags[0].title}
          </span>
        )}
        <Link href={`/blog/${post?.slug}`} className='mt-1'>
          <h2 className='text-lg font-semibold capitalize text-dark dark:text-light'>
            <span
              className={cx(styles.underline, 'from-accent/50 to-accent/50')}
            >
              {post?.title}
            </span>
          </h2>
        </Link>
        <p className='text-gray-dark dark:text-gray-light mt-2 flex items-center gap-2 text-sm'>
          <BsFillCalendar2DateFill />
          {formatDate(post?.publishedAt)}
        </p>
      </div>
    </div>
  )
}

export default BlogLayoutThree
