import BlogLayoutOne, { Blog, Post } from '../blog/BlogLayoutOne'
import BlogLayoutTwo from '../blog/BlogLayoutTwo'
import { cx } from '@/utils'
import Button from '../shared/Button'

const FeaturedBlogs = async ({ posts = [] }: { posts: Post[] }) => {
  if (posts.length > 0) {
    return (
      <section className='mx-auto w-full max-w-7xl  px-5 pt-24 sm:px-10'>
        <div>
          <h2 className='mb-8 text-3xl font-semibold text-dark  dark:text-light xs:text-4xl md:mb-12 lg:text-5xl'>
            Featured Blogs
          </h2>
          <div className={cx('grid grid-cols-2 grid-rows-2 gap-6')}>
            <article className='relative col-span-2 row-span-2 lg:col-span-1'>
              <BlogLayoutTwo post={posts[0]} />
            </article>
            <article className='relative col-span-2 row-span-1 sm:col-span-1'>
              <BlogLayoutOne post={posts[1]} />
            </article>
            <article className='relative col-span-2 row-span-1 sm:col-span-1'>
              <BlogLayoutOne post={posts[2]} />
            </article>
          </div>
          <Button text="View all blogs" href="/tags/all" className='mt-8 sm:mt-12' />
        </div>
      </section>
    )
  }
}

export default FeaturedBlogs
