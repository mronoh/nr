
import { cx } from '@/utils';
import Image from 'next/image'
import React from 'react'
import Tag from '../shared/Tag';
import Link from 'next/link';
import styles from '@/styles';
import { slug } from 'github-slugger';
import { dummyBlog } from '../home/FeaturedBlogs';

const HomeCover = () => {
  const blog = dummyBlog;
  return (
    <section className='w-full max-w-7xl mx-auto mt-16'>
      <article className={cx('flex flex-col items-start relative h-[75vh] justify-end sm:mx-10 mx-5')}>
        <div className='absolute top-0 left-0 z-0 w-full h-full rounded-3xl from-transparent bg-gradient-to-b to-dark/90' />
        <Image src={blog.image.filePath.replace('../public', '')} alt={blog.title}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          fill
          className='object-cover object-center w-full h-full rounded-3xl -z-10'
         />
        <div className={cx(styles.paddings, "z-0 flex flex-col items-start justify-center w-full md:w-3/4 text-light")}>
         <Tag link={`/categories/${slug(blog.tags[0])}`} title={blog.tags[0]} />
         <Link href={blog.url} className='mt-6'>
          <h1 className='text-4xl font-bold capitalize'>
            <span className={cx(styles.underline)}>
              {blog.title}
            </span>
          </h1>
        </Link>
         <p className='hidden mt-4 sm:inline-block md:text-lg lg:text-xl font-inter'>
          {blog.description}
         </p>
        </div>
      </article>
    </section>
  )
}

export default HomeCover
