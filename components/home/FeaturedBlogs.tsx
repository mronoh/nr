import { sanityFetch } from '@/sanity/lib/fetch'
import BlogLayoutOne, { Blog, Post } from '../blog/BlogLayoutOne'
import BlogLayoutTwo from '../blog/BlogLayoutTwo'
import { cx } from '@/utils'
import { SanityDocument } from 'next-sanity'
import { postsQuery } from '@/sanity/lib/queries'

export const dummyBlog: Blog = {
  title: 'Sample Blog Post',
  url: 'https://example.com/sample-blog-post',
  publishedAt: '2023-11-30T12:00:00Z',
  tags: ['technology', 'programming', 'web development'],
  image: {
    filePath: '/images/homeBgImg.png',
    blurhashDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...',
    width: 1200,
    height: 800
  }
}

const FeaturedBlogs = async () => {
  const posts = await sanityFetch<any>({ query: postsQuery })
  
  
  return (
    <section className='mx-auto w-full max-w-7xl px-5 py-24 sm:px-10'>
      <div>
        <h2 className='mb-12 text-4xl font-semibold text-dark'>
          Featured Blogs
        </h2>
        <div className={cx('grid grid-cols-2 grid-rows-2 gap-6')}>
          <article className='relative col-span-2 row-span-2 lg:col-span-1'>
            <BlogLayoutTwo post={posts[4 ]} />
          </article>
          <article className='relative col-span-2 row-span-1 sm:col-span-1'>
            <BlogLayoutOne post={posts[0]} />
          </article>
          <article className='relative col-span-2 row-span-1 sm:col-span-1'>
            <BlogLayoutOne post={posts[8]} />
          </article>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBlogs
