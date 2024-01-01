import Image from 'next/image'
import { SanityDocument } from '@sanity/client'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image'
import { Image as ImageType } from 'sanity'
import { ImageBox } from '../shared/ImageBox'
import { cx, formatDate } from '@/utils'
import { BsFillCalendar2DateFill, BsTwitterX } from 'react-icons/bs'
import { blockContentToPlainText } from 'react-portable-text'
import { FaLinkedinIn } from 'react-icons/fa6'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { siteMetadata } from '@/utils/siteMetaData'
import Link from 'next/link'
import styles from '@/styles'
import { FiExternalLink } from 'react-icons/fi'
import { MdAccessTimeFilled } from 'react-icons/md'
import Tag from '../shared/Tag'

export default function Blog({ post }: { post: SanityDocument }) {
  const feauredPosts = [...post?.related, ...post?.recent]

  return (
    <main className='relative mx-auto max-w-7xl !overflow-x-clip px-5 pt-8 sm:px-10 sm:pt-16 md:pt-24'>
      <article className='dark:border-gray-dark border-gray-light mx-auto flex w-full flex-col justify-center gap-4 border-t lg:flex-row'>
        <div className=' mb-8 w-full pt-5 lg:w-4/6'>
          <div className='prose prose-stone dark:prose-invert prose-base sm:prose-lg w-full max-w-max '>
            <span className='flex gap-6 text-xs xs:text-base'>
              <p className='flex items-center gap-2'>
                <BsFillCalendar2DateFill />
                {post?.publishedAt
                  ? formatDate(post.publishedAt)
                  : 'publishedAt'}
              </p>
              <p className='flex items-center gap-2'>
                <MdAccessTimeFilled />
                {post?.estimatedReadingTime ? (
                  <>{post.estimatedReadingTime} min read</>
                ) : (
                  'publishedAt'
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
                  alt={`${post?.title} Cover Image`}
                  blurDataURL={post.mainImage.lqip}
                  sizes='(max-width: 1024px) 100vw, 450px'
                />
              </div>
            )}
            {post?.body && (
              <div className='first-letter:text-3xl sm:first-letter:text-5xl'>
                <PortableText
                  value={post.body}
                  components={{
                    marks: {
                      link: ({ children, value }) => {
                        return (
                          <a
                            href={value?.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className=' text-blue-500 hover:underline'
                          >
                            {children}
                            <FiExternalLink className='ml-1 inline-block text-sm' />
                          </a>
                        )
                      }
                    },
                    types: {
                      image: ({
                        value
                      }: {
                        value: ImageType & { alt?: string; caption?: string }
                      }) => {
                        return (
                          <div className='mx-auto my-8 w-[80%] space-y-2'>
                            <ImageBox image={value} />
                            {value?.alt && (
                              <p className='text-center font-sans text-sm text-gray-600'>
                                {value.alt}
                              </p>
                            )}
                          </div>
                        )
                      }
                    }
                  }}
                />
              </div>
            )}
          </div>
          {/* <div className='mt-16'>
            <h4 className='my-2 text-xl font-semibold'>Related Posts</h4>
            <div className={cx('grid gap-2 sm:grid-cols-2 lg:grid-cols-3')}>
              {recentBlogs.map((post: any, index: number) => (
                <article
                  key={index}
                  className='border-gray-light/50 rounded-xl border p-2'
                >
                  <BlogLayoutThree post={post} />
                </article>
              ))}
            </div>
          </div> */}
        </div>
        <aside className='dark:text-gray dark:border-gray-dark border-gray-light sticky top-20 flex h-max w-full flex-col flex-wrap gap-8 border-t py-5 sm:flex-row lg:min-h-screen lg:w-2/6 lg:max-w-[320px] lg:flex-col lg:gap-4 lg:border-l lg:p-5'>
          <div className='sm-w-1/2 lg:w-full'>
            <h4 className='my-2 text-xl font-semibold '>Author</h4>
            <div className='flex h-12 w-12 items-center gap-2'>
              <Image
                className='rounded-full'
                src={urlForImage(post.author.image).url()}
                alt={post.author.name}
                width={50}
                height={50}
              />
              <div className='flex flex-col gap-2 font-semibold'>
                <p className='whitespace-nowrap'>{post.author.name}</p>
                <span className='dark:text-gray-light flex justify-around'>
                  <a className='hover:bg-gray-light border-gray-light dark:border-gray-dark rounded-md border p-1 text-sm'>
                    <BsTwitterX />
                  </a>
                  <a className='hover:bg-gray-light border-gray-light dark:border-gray-dark rounded-md border p-1 text-sm'>
                    <FaFacebookF />
                  </a>
                  <a className='hover:bg-gray-light border-gray-light dark:border-gray-dark rounded-md border p-1 text-base'>
                    <MdOutlineMailOutline />
                  </a>
                </span>
              </div>
            </div>
            <p className='my-2 max-w-sm text-base'>
              {blockContentToPlainText(post.author.bio)}
            </p>
          </div>

          <div className='w-full sm:order-2 lg:order-1'>
            <h4 className='my-2 text-xl font-semibold'>Tags</h4>
            <ul className='flex gap-2'>
              {post.tags.map((tag: any, index: number) => (
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
            <h4 className='my-2 text-xl font-semibold'>Share</h4>
            <div className='flex gap-4 text-xl'>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  post.title
                )}%0A%0A${encodeURIComponent(post.url)}`}
                target='_blank'
                rel='noopener noreferrer'
                className='border-gray-light dark:border-gray-dark rounded-md border p-2 hover:bg-[#25D366] hover:text-light'
              >
                <FaWhatsapp />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  post.url
                )}`}
                target='_blank'
                rel='noopener noreferrer'
                className=' border-gray-light dark:border-gray-dark rounded-md border p-2 hover:bg-[#4267B2] hover:text-light'
              >
                <FaFacebookF />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(
                  `https://ngworocks.vercel.app/blog/${post.slug.current}`
                )}`}
                target='_blank'
                rel='noopener noreferrer'
                className='dark:hover:bg-gray-light/10 border-gray-light dark:border-gray-dark rounded-md border p-2 hover:bg-black hover:text-light'
              >
                <BsTwitterX />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  `${siteMetadata.siteUrl}/blog/${post.slug}`
                )}&title=${encodeURIComponent(
                  post.title
                )}&summary=${encodeURIComponent(
                  post.summary
                )}&source=${encodeURIComponent(siteMetadata.siteUrl)}`}
                target='_blank'
                rel='noopener noreferrer'
                className='border-gray-light dark:border-gray-dark rounded-md border p-2 hover:bg-[#0077b5] hover:text-light'
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className='w-full sm:order-3 lg:order-1'>
            <h4 className='my-2 text-xl font-semibold'>
              {post?.related.length > 0 ? 'Related Posts' : 'Recent Posts'}
            </h4>
            <div className={cx('grid gap-2 sm:grid-cols-2 lg:grid-cols-1')}>
              {feauredPosts.slice(0, 2).map((post: any, index: number) => (
                <article
                  key={index}
                  className='border-gray-light/50 relative rounded-xl border p-2 dark:border-transparent'
                >
                  <div className='relative flex flex-col gap-4 text-dark'>
                    <Link
                      className='col-span-4 h-full overflow-hidden rounded-xl'
                      href={`/blog/${post?.slug}`}
                    >
                      {post?.mainImage && (
                        <Image
                          src={urlForImage(post.mainImage.image).url()}
                          alt={post.mainImage.alt ?? post?.title}
                          placeholder='blur'
                          blurDataURL={post.mainImage.lqip}
                          width={post.mainImage.dimensions?.width ?? 1200}
                          height={post.mainImage.dimensions?.height ?? 630}
                          className='z-0 aspect-[4/3] h-full w-full object-cover object-center transition-all duration-200 ease-in-out hover:scale-105'
                        />
                      )}
                    </Link>
                    <div className='to-bgdark absolute left-0 top-0 z-10 h-full w-full rounded-xl bg-gradient-to-b from-transparent' />
                    <div className='absolute bottom-0 z-10 mt-1 flex w-full flex-col p-2'>
                      {post?.tags && (
                        <span className='w-max rounded bg-light px-1 py-0.5 text-xs font-semibold uppercase text-accent'>
                          {post?.tags[0].title}
                        </span>
                      )}
                      <Link href={`/blog/${post?.slug}`} className='mt-1'>
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
                      <p className=' text-gray-light mt-1 flex items-center gap-2 text-xs'>
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
