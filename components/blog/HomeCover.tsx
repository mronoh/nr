import { cx } from '@/utils'
import Image from 'next/image'
import React from 'react'
import Tag from '../shared/Tag'
import Link from 'next/link'
import styles from '@/styles'
import { Post } from './BlogLayoutOne'
import { urlForImage } from '@/sanity/lib/image'

const HomeCover = async ({ post }: { post: Post }) => {
  if (post) {
    return (
      <section className='mx-auto mt-4 w-full max-w-7xl xs:mt-8'>
        <article
          className={cx(
            'relative mx-5 flex h-[60vh] max-h-[630px] flex-col items-start justify-end sm:mx-10 lg:h-[80vh]'
          )}
        >
          <div className='to-bgdark absolute left-0 top-0 z-10 h-full w-full rounded-3xl bg-gradient-to-b from-transparent ' />
          <Image
            src={urlForImage(post.post.mainImage.image).url()}
            alt={post.post.title}
            placeholder='blur'
            blurDataURL={post.post.mainImage.lqip}
            fill
            className='z-0 h-full w-full rounded-3xl object-cover object-center'
          />
          <div
            className={cx(
              'px-5 py-12 xs:p-8 sm:p-8 md:p-12 lg:p-16',
              'z-10 flex w-full flex-col items-start justify-center text-light md:w-3/4'
            )}
          >
            <Tag
              link={`tags/${post.post.tags[0].slug}`}
              title={post.post.tags[0].title}
            />
            <Link href={`/blog/${post.post.slug}`} className='mt-4 md:mt-6'>
              <h1 className='text-lg font-bold capitalize sm:text-2xl md:text-3xl lg:text-4xl'>
                <span className={cx(styles.underline)}>
                  {post.post.title ?? 'Title'}
                </span>
              </h1>
            </Link>
            {post?.post.description && (
              <p className='font-inter mt-4 hidden sm:inline-block md:text-lg lg:text-xl'>
                {post?.post.description}
              </p>
            )}
          </div>
        </article>
      </section>
    )
  }
}

export default HomeCover
