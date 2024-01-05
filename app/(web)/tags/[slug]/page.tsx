import { Post, Tag as TagType } from '@/components/blog/BlogLayoutOne'
import BlogLayoutThree from '@/components/blog/BlogLayoutThree'
import Button from '@/components/shared/Button'
import Tag from '@/components/shared/Tag'
import { sanityFetch } from '@/sanity/lib/fetch'
import { postsQuery, tagQuery, tagsQuery } from '@/sanity/lib/queries'
import { cx } from '@/utils'
import { siteMetadata } from '@/utils/siteMetaData'
import { notFound } from 'next/navigation'

// Dynamic metadata for SEO
export async function generateMetadata({ params }: any) {
  const slug = params.slug

  let tag: TagType = {
    title: '',
    description: '',
    slug: ''
  }

  if (slug === 'all') {
    tag = {
      title: 'All',
      slug: 'all',
      description:
        "Unlock the world's stories with Ngworocks Blogs. Dive into captivating tales of travel, culture, and values. Let the exploration begin!"
    }
  } else {
    tag = await sanityFetch<any>({
      query: tagQuery,
      params,
      tags: ['tag']
    })
  }

  const ogUrl = new URL(`${siteMetadata.siteUrl}/api/og-image`)
  // contentType is required
  ogUrl.searchParams.set('contentType', 'tag')
  ogUrl.searchParams.set('title', tag.title)
  ogUrl.searchParams.set('description', tag?.description)

  return {
    title: `${tag?.title} Blogs`,
    description: `Discover more blogs about ${
      slug === 'all' ? 'tourism, culture and wellness' : slug
    } and expand your knowledge!`,
    publisher: siteMetadata.title,
    openGraph: {
      title: tag.title,
      description: tag.description,
      url: `/tags/${tag.slug}`,
      siteName: siteMetadata.title,
      locale: 'en_US',
      images: ogUrl.toString()
    },
    twitter: {
      card: 'summary_large_image',
      title: tag.title,
      description: tag.description,
      images: ogUrl.toString()
    }
  }
}

const CategoriesPage = async ({ params }: any) => {
  let slug = params.slug

  // Add this condition at the beginning of your component or function
  if (!/^[a-z0-9-]+$/i.test(slug)) {
    notFound()
  }

  // Get all blogs.
  const allBlogs = await sanityFetch<any>({
    query: postsQuery,
    tags: ['post']
  })

  // Get all tags.
  const allTags = await sanityFetch<any>({
    query: tagsQuery,
    tags: ['tag']
  })

  /**
   * Filtered list of blogs based on the provided slug.
   *
   * @param {string} slug - The slug to filter the blogs by.
   * @returns {Array} - Filtered list of blogs.
   */
  const blogs = allBlogs.filter((blog: Post) => {
    return blog.tags.some((tag: TagType) => {
      if (slug === 'all') return true

      return tag.slug === slug
    })
  })

  // Sort all categories then prepend 'all' to the list.
  allTags
    .sort((a: TagType, b: TagType) => a.title.localeCompare(b.title))
    .unshift({ title: 'all', slug: 'all' })
  // 404 if the blog does not exist.
  // if (!blogs) notFound()
  return (
    <article>
      <div className='mx-5 mt-5 flex flex-col sm:mx-10 sm:mt-10'>
        <div className='md:px-10 lg:px-20'>
          <h1 className='mt-6 text-2xl font-semibold capitalize text-dark dark:text-light md:text-4xl lg:text-5xl'>
            {slug == 'all' ? 'All Blogs' : slug.replace('-', ' ')}
          </h1>
          <p className='mt-2 text-dark dark:text-light'>
            {allTags.find((tag: TagType) => {
              return tag.slug === slug
            })?.description ?? 'Discover more tags and expand your knowledge!'}
          </p>
        </div>

        {/* Categories */}
        <div className='mt-10 flex flex-wrap gap-2 border-y-2 px-0 py-6 dark:border-light sm:gap-6 md:px-10 lg:px-20'>
          {allTags.map((tag: TagType) => (
            <Tag
              link={`/tags/${tag.slug}`}
              title={tag.title}
              key={tag.slug}
              scroll={false}
              className={`!border-dark !lowercase dark:!border-light ${
                slug == tag.slug
                  ? 'dark:bg-accent-dark text-text-accent-dark bg-dark dark:text-dark'
                  : 'bg-dark/20 text-dark dark:bg-light/10 dark:text-light'
              }`}
            />
          ))}
        </div>

        {/* Blogs */}
        <div
          className={cx(
            'mt-5 grid gap-16  sm:mt-10 sm:grid-cols-2 md:mt-24 md:px-10 lg:mt-32 lg:grid-cols-3 lg:px-20'
          )}
        >
          {blogs.length > 0 ? (
            blogs.map((blog: Post, index: number) => (
              <article key={index}>
                <BlogLayoutThree post={blog} />
              </article>
            ))
          ) : (
            <div className='col-span-1 flex h-32 flex-col items-center justify-center gap-6 sm:col-span-2 lg:col-span-3'>
              <h2 className='mt-8 text-center  text-2xl  font-semibold text-dark dark:text-light'>
                No posts found for this tag.
              </h2>
              <Button
                text='View all blogs'
                href='/tags/all'
                className='mt-8 sm:mt-12'
              />
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default CategoriesPage
