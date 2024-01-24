import { Post, Tag as TagType } from '@/components/blog/BlogLayoutOne'
import BlogLayoutThree from '@/components/blog/BlogLayoutThree'
import Button from '@/components/shared/Button'
import Tag from '@/components/shared/Tag'
import Transition from '@/components/shared/Transition'
import { client } from '@/sanity/lib/client'
import { sanityFetch } from '@/sanity/lib/fetch'
import {
  postsQuery,
  tagPathsQuery,
  tagQuery,
  tagWithPostsQuery,
  tagsQuery
} from '@/sanity/lib/queries'
import { siteMetadata } from '@/utils/siteMetaData'
import { notFound } from 'next/navigation'
import { BlogLoading } from './loading'
import { Suspense } from 'react'

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const tags = await client.fetch(tagPathsQuery)

  return tags.map((tag: any) => ({
    slug: tag.params.slug
  }))
}

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
  ogUrl.searchParams.set('title', `${tag.title} blogs`)
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
  // Get all tags.
  const allTags = await sanityFetch<any>({
    query: tagsQuery,
    tags: ['tag']
  })

  let tag = {
    title: 'All',
    slug: 'all',
    description:
      "Unlock the world's stories with Ngworocks Blogs. Dive into captivating tales of travel, culture, and values. Let the exploration begin!",
    blogs: []
  }

  if (slug === 'all') {
    tag = {
      title: 'All Blogs',
      slug: 'all',
      description:
        "Unlock the world's stories with Ngworocks Blogs. Dive into captivating tales of travel, culture, and values. Let the exploration begin!",
      blogs: await sanityFetch<any>({
        query: postsQuery,
        tags: ['post']
      })
    }
  } else {
    tag = await sanityFetch<any>({
      query: tagWithPostsQuery,
      params,
      tags: ['tag', 'post']
    })
  }

  // Sort all categories then prepend 'all' to the list.
  allTags
    .sort((a: TagType, b: TagType) => a.title.localeCompare(b.title))
    .unshift({ title: 'all', slug: 'all' })
  // 404 if the blog does not exist.
  // if (!blogs) notFound()
  return (
    <main className='mx-auto max-w-7xl'>
      <div className='mx-5 mt-5 flex flex-col sm:mx-10 sm:mt-10'>
        <section className='md:px-10 lg:px-20'>
          <h1 className='mt-6 text-2xl font-semibold capitalize text-dark dark:text-light md:text-4xl lg:text-5xl'>
            {tag.title}
          </h1>
          <p className='mt-2 text-dark dark:text-light'>{tag.description}</p>
        </section>

        {/* Categories */}
        <section className='mt-5 flex flex-wrap gap-2 border-y-2 px-0 py-2 dark:border-light sm:gap-4 sm:py-4 md:px-10 lg:px-20'>
          {allTags.map((tag: TagType) => (
            <Tag
              link={`/tags/${tag.slug}`}
              title={tag.title}
              key={tag.slug}
              scroll={false}
              className={`!sm:px-4 !sm:py-1 !border-dark !px-2 !py-0.5 text-sm !lowercase dark:!border-light sm:text-base ${
                slug == tag.slug
                  ? 'bg-dark text-accent-dark dark:bg-accent-dark dark:text-dark'
                  : 'bg-dark/20 text-dark dark:bg-light/10 dark:text-light'
              }`}
            />
          ))}
        </section>

        {/* Blogs */}
        <Suspense fallback={<BlogLoading />}>
          <Transition key={slug}>
            <div className='mt-4 grid gap-16  sm:mt-8 sm:grid-cols-2 md:mt-12 md:px-10 lg:grid-cols-3 lg:px-20'>
              {tag.blogs.length > 0 ? (
                tag.blogs.map((blog: Post, index: number) => (
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
          </Transition>
        </Suspense>
      </div>
    </main>
  )
}

export default CategoriesPage
