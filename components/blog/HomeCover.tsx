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
          <div className='absolute left-0 top-0 z-10 h-full w-full rounded-3xl bg-gradient-to-b from-transparent to-bgdark ' />
          <Image
            src={urlForImage(post.post.mainImage.image).url()}
            alt={post.post.mainImage.alt ?? `${post?.title} cover image`}
            title={post.post.mainImage.alt ?? `${post?.title} cover image`}
            placeholder='blur'
            blurDataURL={post.post.mainImage.lqip}
            fill
            sizes='(max-width: 1200px) 100vw, 1200px'
            className='z-0 h-full w-full rounded-3xl object-cover object-center'
          />
          <div className='z-10 flex w-full flex-col items-start justify-center px-5 py-12 text-light xs:p-8 sm:p-8 md:w-3/4 md:p-12 lg:p-16'>
            <Tag
              link={`tags/${post.post.tags[0].slug}`}
              title={post.post.tags[0].title}
            />
            <Link
              href={`/blog/${post.post.slug}`}
              title={`${post.post.title} blog link`}
              className='mt-4 md:mt-6'
            >
              <h1 className='text-xl font-bold capitalize xs:text-2xl md:text-3xl lg:text-4xl'>
                <span className={cx(styles.underline)}>
                  {post.post.title ?? 'Title'}
                </span>
              </h1>
            </Link>
            {post?.post.description && (
              <p className='font-inter mt-4 hidden xs:inline-block md:text-lg lg:text-xl'>
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
