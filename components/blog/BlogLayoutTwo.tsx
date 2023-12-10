import Link from 'next/link'
import Tag from '../shared/Tag'
import Image from 'next/image'
import { cx } from '@/utils'
import styles from '@/styles'
import { slug as slugger } from 'github-slugger'
import { Blog } from './BlogLayoutOne'

const BlogLayoutTwo = ({ blog }: { blog: Blog }) => {
  return (
    <div className=''>
      <div className='absolute left-0 top-0 z-0 h-full w-full rounded-xl bg-gradient-to-b from-transparent to-dark/90' />
      <Image
        src={blog.image.filePath.replace('../public', '')}
        alt={blog.title}
        placeholder='blur'
        blurDataURL={blog.image.blurhashDataUrl}
        width={blog.image.width}
        height={blog.image.height}
        className='h-full w-full rounded-xl object-cover object-center'
      />
      <div className='absolute bottom-0 z-20 p-4 text-light'>
        <Tag
          link={`/categories/${slugger(blog.tags[0])}`}
          title={blog.tags[0]}
          className='!border px-6 py-2 text-sm'
        />
        <Link href={blog.url} className='mt-6'>
          <h2 className='class="font-bold mt-4 text-2xl capitalize text-light'>
            <span className={cx(styles.underline)}>{blog.title}</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default BlogLayoutTwo
