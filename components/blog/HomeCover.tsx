import { cx } from '@/utils'
import Image from 'next/image'
import React from 'react'
import Tag from '../shared/Tag'
import Link from 'next/link'
import styles from '@/styles'
import { slug } from 'github-slugger'
import { dummyBlog } from '../home/FeaturedBlogs'

const HomeCover = () => {
  const blog = dummyBlog
  return (
    <section className='mx-auto mt-16 w-full max-w-7xl'>
      <article
        className={cx(
          'relative mx-5 flex h-[75vh] flex-col items-start justify-end sm:mx-10'
        )}
      >
        <div className='absolute left-0 top-0 z-0 h-full w-full rounded-3xl bg-gradient-to-b from-transparent to-dark/90' />
        <Image
          src={blog.image.filePath.replace('../public', '')}
          alt={blog.title}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          fill
          className='-z-10 h-full w-full rounded-3xl object-cover object-center'
        />
        <div
          className={cx(
            styles.paddings,
            'z-0 flex w-full flex-col items-start justify-center text-light md:w-3/4'
          )}
        >
          <Tag
            link={`/tags/${slug(blog.tags[0])}`}
            title={blog.tags[0]}
          />
          <Link href={blog.url} className='mt-6'>
            <h1 className='text-4xl font-bold capitalize'>
              <span className={cx(styles.underline)}>{blog.title}</span>
            </h1>
          </Link>
          <p className='font-inter mt-4 hidden sm:inline-block md:text-lg lg:text-xl'>
            {blog.description}
          </p>
        </div>
      </article>
    </section>
  )
}

export default HomeCover
