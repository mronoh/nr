import { cx } from '@/utils'
import BlogLayoutThree from '../blog/BlogLayoutThree'
import Link from 'next/link'
import { sanityFetch } from '@/sanity/lib/fetch'
import { postsQuery } from '@/sanity/lib/queries'
import { Post } from './BlogLayoutOne'

const RecentBlogs = async () => {
  const posts = await sanityFetch<any>({ query: postsQuery })
  const recentBlogs = posts.slice(0, 6)
  return (
    <section className='mx-auto w-full max-w-7xl px-5 pt-24 sm:px-10'>
      <div className='flex w-full items-center justify-between'>
        <h2 className='mb-12 text-4xl font-semibold text-dark'>Recent Blogs</h2>
        <Link
          href='/catergories/all'
          className='rounded-full bg-accent/20 px-4 py-2 capitalize text-accent hover:text-light'
        >
          view all
        </Link>
      </div>
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
    </section>
  )
}

export default RecentBlogs
