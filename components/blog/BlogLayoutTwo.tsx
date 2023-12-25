import Link from 'next/link'
import Tag from '../shared/Tag'
import Image from 'next/image'
import { cx } from '@/utils'
import styles from '@/styles'
import { Post } from './BlogLayoutOne'
import { urlForImage } from '@/sanity/lib/image'

const BlogLayoutTwo = ({ post }: { post: Post }) => {
  return (
    <div className=''>
      <div className='absolute left-0 top-0 z-10 h-full w-full rounded-xl bg-gradient-to-b from-transparent to-dark/90' />
      {post?.mainImage && (
        <Image
          src={urlForImage(post.mainImage.image).url()}
          alt={post.mainImage.alt ?? post?.title}
          placeholder='blur'
          blurDataURL={post.mainImage.lqip}
          fill
          className='h-full w-full rounded-xl -z-0 object-cover object-center'
        />
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
          <h2 className='class="font-bold mt-4 text-2xl capitalize text-light'>
            <span className={cx(styles.underline)}>{post?.title}</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default BlogLayoutTwo
