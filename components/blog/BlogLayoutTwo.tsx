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
      <div className='dark:to-bgdark absolute left-0 top-0 z-10 h-full w-full rounded-xl bg-gradient-to-b from-transparent to-dark/90' />
      {post?.mainImage && (
        <div className='relative min-h-[320px] w-full overflow-hidden rounded-xl pt-[56.25%] lg:static lg:h-auto'>
          <Image
            src={urlForImage(post.mainImage.image).url()}
            alt={post.mainImage.alt ?? post?.title}
            placeholder='blur'
            blurDataURL={post.mainImage.lqip}
            layout='fill'
            objectFit='cover'
            className='absolute left-0 top-0 h-full w-full rounded-xl'
          />
        </div>
      )}
      <div className='absolute bottom-0 z-20 p-4 text-light'>
        {post?.tags && (
          <Tag
            link={``}
            title={post?.tags[0].title || ''}
            className='!border px-6 py-2 text-sm'
          />
        )}
        <Link href={`/blog/${post?.slug}`} className='mt-6'>
          <h2 className='mt-4 text-2xl font-semibold capitalize text-light'>
            <span className={cx(styles.underline)}>{post?.title}</span>
          </h2>
          {post?.publishedAt && (
            <p className='text-gray-light mt-2 flex items-center gap-2 text-sm'>
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
