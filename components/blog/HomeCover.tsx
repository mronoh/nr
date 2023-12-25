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
      <section className='mx-auto mt-8 w-full max-w-7xl'>
        <article
          className={cx(
            'relative mx-5 flex h-[80vh] flex-col items-start justify-end sm:mx-10'
          )}
        >
          <div className='absolute left-0 top-0 z-10 h-full w-full rounded-3xl bg-gradient-to-b from-transparent to-dark/90' />
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
              styles.paddings,
              'z-10 flex w-full flex-col items-start justify-center text-light md:w-3/4'
            )}
          >
            <Tag link={`#`} title={post.post.tags[0].title} />
            <Link href={`/blog/${post.post.slug}`} className='mt-6'>
              <h1 className='text-4xl font-bold capitalize'>
                <span className={cx(styles.underline)}>
                  {post.post.title ?? 'Title'}
                </span>
              </h1>
            </Link>
            <p className='font-inter mt-4 hidden sm:inline-block md:text-lg lg:text-xl'>
              {post.post.title}
            </p>
          </div>
        </article>
      </section>
    )
  }
}

export default HomeCover
