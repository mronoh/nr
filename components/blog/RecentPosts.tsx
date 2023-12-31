import { cx } from '@/utils'
import BlogLayoutThree from '../blog/BlogLayoutThree'
import { sanityFetch } from '@/sanity/lib/fetch'
import { recentPostsQuery } from '@/sanity/lib/queries'
import { Post } from './BlogLayoutOne'
import Button from '../shared/Button'

const RecentBlogs = async () => {
  const recentBlogs = await sanityFetch<any>({
    query: recentPostsQuery,
    tags: ['posts']
  })
  return (
    <section className='mx-auto w-full max-w-7xl px-5 pt-24 sm:px-10'>
      <h2 className='mb-8 text-3xl font-semibold text-dark  dark:text-light xs:text-4xl md:mb-12 lg:text-5xl'>
        Recent Blogs
      </h2>
      <div
        className={cx(
          'grid grid-rows-3 gap-16 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2'
        )}
      >
        {recentBlogs.map((post: Post, index: number) => (
          <article key={index}>
            <BlogLayoutThree post={post} />
          </article>
        ))}
      </div>
      <Button text="View all blogs" href="/tags/all" className='mt-8 sm:mt-12' />
    </section>
  )
}

export default RecentBlogs
