import Image from 'next/image'
import { SanityDocument } from '@sanity/client'
import { urlForImage } from '@/sanity/lib/image'
import { cx, formatDate } from '@/utils'
import { BsFillCalendar2DateFill, BsTwitterX } from 'react-icons/bs'
import { blockContentToPlainText } from 'react-portable-text'
import { FaFacebookF } from 'react-icons/fa'
import { siteMetadata } from '@/utils/siteMetaData'
import Link from 'next/link'
import styles from '@/styles'
import { MdAccessTimeFilled } from 'react-icons/md'
import Tag from '../shared/Tag'
import ShareOnSocials from '../shared/ShareOnSocials'
import CustomPortableText from '../shared/CustomPortableText'
import { FaLinkedinIn } from 'react-icons/fa6'

export default function Blog({ post }: { post: SanityDocument }) {
  const feauredPosts = [...post?.related, ...post?.recent]

  return (
    <main className='relative mx-auto max-w-7xl !overflow-x-clip px-5 pt-4 sm:px-10 sm:pt-8 md:pt-12'>
      <article className='mx-auto flex w-full flex-col justify-center gap-4 border-gray-light dark:border-gray-dark lg:flex-row lg:border-t'>
        <div className=' mb-8 w-full lg:w-4/6'>
          <div className='prose prose-base prose-stone w-full max-w-max dark:prose-invert sm:prose-lg '>
            <span className='flex gap-6 text-xs xs:text-base'>
              <p className='flex items-center gap-2'>
                <BsFillCalendar2DateFill />
                {post?.publishedAt
                  ? formatDate(post.publishedAt)
                  : 'published date is not available'}
              </p>
              <p className='flex items-center gap-2'>
                <MdAccessTimeFilled />
                {post?.estimatedReadingTime ? (
                  <>{post.estimatedReadingTime} min read</>
                ) : (
                  'Reading time is not available'
                )}
              </p>
            </span>

            {post?.title ? <h1>{post.title}</h1> : <h1>Untitled</h1>}
            {post?.description && <p>{post.description}</p>}
            {post?.mainImage && (
              <div className='relative w-full overflow-clip rounded-xl pt-[56.25%]'>
                <Image
                  className='my-0 h-full w-full rounded-xl object-cover object-center'
                  src={urlForImage(post.mainImage.image).url()}
                  placeholder='blur'
                  fill
                  alt={post.mainImage.alt ?? `${post?.title} cover image`}
                  title={post.mainImage.alt ?? `${post?.title} cover image`}
                  blurDataURL={post.mainImage.lqip}
                  sizes='(max-width: 1024px) 100vw, 450px'
                />
              </div>
            )}
            {post?.body && (
              <div className='first-letter:text-3xl sm:first-letter:text-5xl'>
                <CustomPortableText body={post.body} />
              </div>
            )}
          </div>
        </div>
        <aside className='sticky top-20 flex h-max w-full flex-col flex-wrap gap-8 border-t border-gray-light py-5 dark:border-gray-dark dark:text-gray sm:flex-row lg:min-h-screen lg:w-2/6 lg:max-w-[320px] lg:flex-col lg:gap-4 lg:border-l lg:p-5'>
          {post.author && (
            <div className='w-full sm:w-1/2 lg:w-full'>
              <p className='mb-4 text-sm '>Written by</p>
              <div className='flex h-12 w-12 items-center gap-2'>
                <Image
                  className='rounded-full'
                  src={urlForImage(post.author.image).url()}
                  alt={`Portrait image of ${post.author.name}`}
                  title={`Portrait image of ${post.author.name}`}
                  width={48}
                  height={48}
                />
                <div className='flex flex-col gap-2 font-semibold'>
                  <h3 className='whitespace-nowrap dark:text-light'>
                    {post.author.name}
                  </h3>
                  <span className='flex gap-x-4 dark:text-gray-light'>
                    {post.author?.socialLinks?.twitter && (
                      <a
                        aria-label={`${post.author.name} Twitter Profile`}
                        target='_blank'
                        title={`Link to ${post.author.name} Twitter Profile`}
                        rel='noopener noreferrer'
                        href={post.author?.socialLinks.twitter}
                        className='text-gray-dark hover:text-accent dark:text-gray dark:hover:text-accent-dark'
                      >
                        <BsTwitterX />
                      </a>
                    )}
                    {post.author?.socialLinks?.linkedin && (
                      <a
                        aria-label={`${post.author.name} LinkedIn Profile`}
                        title={`Link to ${post.author.name} LinkedIn Profile`}
                        target='_blank'
                        rel='noopener noreferrer'
                        href={post.author.socialLinks.linkedin}
                        className='text-gray-dark hover:text-accent dark:text-gray dark:hover:text-accent-dark'
                      >
                        <FaLinkedinIn />
                      </a>
                    )}
                    {post.author?.socialLinks?.facebook && (
                      <a
                        aria-label={`${post.author.name} Facebook Profile`}
                        title={`Link to ${post.author.name} Facebook Profile`}
                        target='_blank'
                        rel='noopener noreferrer'
                        href={post.author.socialLinks.facebook}
                        className='text-gray-dark hover:text-accent dark:text-gray dark:hover:text-accent-dark'
                      >
                        <FaFacebookF />
                      </a>
                    )}
                  </span>
                </div>
              </div>
              <p className='my-2 max-w-md text-sm'>
                {blockContentToPlainText(post.author.bio)}
              </p>
            </div>
          )}

          <div className='w-full sm:order-2 lg:order-1'>
            <h4 className='mb-4 text-base font-semibold dark:text-light sm:text-xl'>
              Tags
            </h4>
            <ul className='flex gap-2'>
              {post.tags &&
                post.tags.map((tag: any, index: number) => (
                  <Tag
                    title={tag.title}
                    link={`/tags/${tag.slug}`}
                    key={index}
                    className='text-xs opacity-80'
                  />
                ))}
            </ul>
          </div>
          <div className='sm:order-1'>
            <h4 className='mb-4 text-base font-semibold dark:text-light sm:text-xl'>
              Share
            </h4>
            <ShareOnSocials
              shareUrl={`${siteMetadata.siteUrl}/blog/${post.slug}/`}
              title={post.title}
              description={post.description}
            />
          </div>
          <div className='w-full sm:order-3 lg:order-1'>
            <h4 className='my-2 text-base font-semibold dark:text-light sm:text-xl'>
              {post?.related.length > 0 ? 'Related Posts' : 'Recent Posts'}
            </h4>
            <div className={cx('grid gap-2 sm:grid-cols-2 lg:grid-cols-1')}>
              {feauredPosts.slice(0, 2).map((post: any, index: number) => (
                <article
                  key={index}
                  className='relative rounded-xl border border-gray-light/50 p-2 dark:border-transparent'
                >
                  <div className='relative flex flex-col gap-4 text-dark'>
                    <Link
                      className='col-span-4 h-full overflow-hidden rounded-xl'
                      href={`/blog/${post?.slug}`}
                      title={`${post.title} blog link`}
                    >
                      {post?.mainImage && (
                        <Image
                          src={urlForImage(post.mainImage.image).url()}
                          alt={
                            post.mainImage.alt ?? `${post?.title} cover image`
                          }
                          title={
                            post.mainImage.alt ?? `${post?.title} cover image`
                          }
                          placeholder='blur'
                          blurDataURL={post.mainImage.lqip}
                          width={post.mainImage.dimensions?.width ?? 1200}
                          height={post.mainImage.dimensions?.height ?? 630}
                          className='z-0 aspect-[4/3] h-full w-full object-cover object-center transition-all duration-200 ease-in-out hover:scale-105'
                        />
                      )}
                    </Link>
                    <div className='absolute left-0 top-0 z-10 h-full w-full rounded-xl bg-gradient-to-b from-transparent to-bgdark' />
                    <div className='absolute bottom-0 z-10 mt-1 flex w-full flex-col p-2'>
                      {post?.tags && (
                        <span className='w-max rounded bg-light px-1 py-0.5 text-xs font-semibold uppercase text-accent'>
                          {post?.tags[0].title}
                        </span>
                      )}
                      <Link
                        href={`/blog/${post?.slug}`}
                        title={`${post.title} blog link`}
                        className='mt-1'
                      >
                        <h2 className='text-base font-semibold capitalize text-light'>
                          <span
                            className={cx(
                              styles.underline,
                              'from-accent/50 to-accent/50'
                            )}
                          >
                            {post?.title}
                          </span>
                        </h2>
                      </Link>
                      <p className=' mt-1 flex items-center gap-2 text-xs text-gray-light'>
                        <BsFillCalendar2DateFill />
                        {formatDate(post?.publishedAt)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </aside>
      </article>
    </main>
  )
}
