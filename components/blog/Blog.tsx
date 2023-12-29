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
import BlogLayoutThree from './BlogLayoutThree'
import { siteMetadata } from '@/utils/siteMetaData'
import BlogLayoutOne from './BlogLayoutOne'
import BlogLayoutTwo from './BlogLayoutTwo'
import Link from 'next/link'
import styles from '@/styles'

export default function Blog({ post }: { post: SanityDocument }) {
  const recentBlogs = [post, post, post]
  return (
    <main className='relative mx-auto max-w-7xl px-5 pt-24 sm:px-10'>
      <article className='mx-auto flex w-full flex-col justify-center gap-4 lg:flex-row'>
        <div className='w-full lg:w-4/6'>
          <div className='prose prose-lg w-full'>
            <p className='mb-8 flex items-center gap-2 text-base'>
              <BsFillCalendar2DateFill />
              {post?.publishedAt ? formatDate(post.publishedAt) : 'publishedAt'}
            </p>

            {post?.title ? <h1>{post.title}</h1> : <h1>Untitled</h1>}
            {post?.mainImage && (
              <div className='relative h-20 w-full overflow-clip rounded-xl pt-[56.25%]'>
                <Image
                  className='z-10 h-full w-full rounded-xl object-cover object-center'
                  src={urlForImage(post.mainImage.image).url()}
                  placeholder='blur'
                  fill
                  alt={`${post?.title} Cover Image`}
                  blurDataURL={post.mainImage.lqip}
                />
              </div>
            )}
            {post?.body && (
              <PortableText
                value={post.body}
                components={{
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
                            <div className='text-center font-sans text-sm text-gray-600'>
                              {value.alt}
                            </div>
                          )}
                        </div>
                      )
                    }
                  }
                }}
              />
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
        <aside className='sticky top-20 flex h-max w-full flex-col gap-4 border p-5 lg:h-screen lg:w-2/6 lg:max-w-[320px]'>
          <div>
            <h4 className='my-2 text-xl font-semibold'>Author</h4>
            <div className='flex items-center gap-2'>
              <Image
                className='rounded-full'
                src={urlForImage(post.author.image).url()}
                alt={post.author.name}
                width={50}
                height={50}
              />
              <div className='flex flex-col gap-2 font-semibold'>
                <p>{post.author.name}</p>
                <span className='flex justify-around'>
                  <a className='hover:bg-gray-light border-gray-light rounded-md border p-1 text-sm'>
                    <BsTwitterX />
                  </a>
                  <a className='hover:bg-gray-light border-gray-light rounded-md border p-1 text-sm'>
                    <FaFacebookF />
                  </a>
                  <a className='hover:bg-gray-light border-gray-light rounded-md border p-1 text-base'>
                    <MdOutlineMailOutline />
                  </a>
                </span>
              </div>
            </div>
            <p className='my-2 text-sm'>
              {blockContentToPlainText(post.author.bio)}
            </p>
          </div>

          <div>
            <h4 className='my-2 text-xl font-semibold'>Tags</h4>
            <ul className='flex gap-2'>
              {post.tags.map((tag: any, index: number) => (
                <li
                  key={tag.title}
                  className='text-accent-dark/70 dark:bg-gray-dark/20 bg-gray-light/30 whitespace-nowrap rounded px-1.5 py-[1px] text-center text-[8px] font-semibold uppercase shadow-sm dark:text-accent/70 sm:px-3 sm:py-1 sm:text-xs'
                >
                  {tag.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='my-2 text-xl font-semibold'>Share</h4>
            <div className='flex gap-4 text-xl'>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  post.title
                )}%0A%0A${encodeURIComponent(post.url)}`}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:bg-gray-light border-gray-light rounded-md border p-2'
              >
                <FaWhatsapp />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  post.url
                )}`}
                target='_blank'
                rel='noopener noreferrer'
                className='hover hover:bg-gray-light border-gray-light rounded-md border p-2'
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
                className='hover hover:bg-gray-light border-gray-light rounded-md border p-2'
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
                className='hover hover:bg-gray-light border-gray-light rounded-md border p-2'
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className=''>
            <h4 className='my-2 text-xl font-semibold'>Related Posts</h4>
            <div className={cx('grid gap-2 sm:grid-cols-2 lg:grid-cols-1')}>
              {recentBlogs.slice(0, 2).map((post: any, index: number) => (
                <article
                  key={index}
                  className='border-gray-light/50 relative rounded-xl border p-2'
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
                    <div className='absolute left-0 top-0 z-10 h-full w-full rounded-xl bg-gradient-to-b from-transparent to-dark/90' />
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
                      <p className='text-gray text-gray-light mt-1 flex items-center gap-2 text-xs'>
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
