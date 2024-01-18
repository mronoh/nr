import Link from 'next/link'
import Tag from '../shared/Tag'
import Image from 'next/image'
import { cx, formatDate } from '@/utils'
import styles from '@/styles'
import { Post } from './BlogLayoutOne'
import { urlForImage } from '@/sanity/lib/image'
import { BsFillCalendar2DateFill } from 'react-icons/bs'

const BlogLayoutTwo = ({ post }: { post: Post }) => {
  return (
    <div className=''>
      <div className='absolute left-0 top-0 z-10 h-full w-full rounded-xl bg-gradient-to-b from-transparent to-bgdark/90 dark:to-bgdark' />
      {post?.mainImage && (
        <div className='relative min-h-[320px] w-full overflow-hidden rounded-xl pt-[56.25%] lg:static lg:h-auto'>
          <Image
            src={urlForImage(post.mainImage.image).url()}
            alt={post.mainImage.alt ?? `${post?.title} cover image`}
            title={post.mainImage.alt ?? `${post?.title} cover image`}
            placeholder='blur'
            blurDataURL={post.mainImage.lqip}
            fill
            className='absolute left-0 top-0 h-full w-full rounded-xl object-cover object-center'
            sizes='(max-width: 767px) 100vw, 767px'
          />
        </div>
      )}
      <div className='absolute bottom-0 z-20 p-4 text-light'>
        {post?.tags && (
          <Tag
            link={`tags/${post.tags[0].slug}`}
            title={post?.tags[0].title || ''}
            className='text-sm'
          />
        )}
        <Link
          href={`/blog/${post?.slug}/`}
          title={`${post.title} blog link`}
          className='mt-6'
        >
          <h2 className='mt-4 text-xl font-semibold capitalize text-light xs:text-2xl md:text-3xl lg:text-2xl'>
            <span className={cx(styles.underline)}>{post?.title}</span>
          </h2>
          {post?.publishedAt && (
            <p className='mt-2 flex items-center gap-2 text-sm text-gray-light'>
              <BsFillCalendar2DateFill />
              {formatDate(post.publishedAt)}
            </p>
          )}
        </Link>
      </div>
    </div>
  )
}

export default BlogLayoutTwo
