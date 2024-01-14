import { urlForImage } from '@/sanity/lib/image'
import { formatDate } from '@/utils'

type BlogProps = {
  title: string
  tag: string
  image: any
  author: string
  estimatedReadingTime: string
  publishedAt: string
}

const BlogOgImage = ({
  title,
  tag,
  image,
  author,
  estimatedReadingTime,
  publishedAt
}: BlogProps) => {
  return (
    <div tw='relative flex w-full h-full flex items-center justify-center '>
      {/* Background */}
      <div tw='absolute flex inset-0'>
        <img
          tw='flex flex-1'
          src={urlForImage(image).width(1200).height(630).url()}
          alt={title}
        />
        {/* Overlay */}
        <div tw='absolute flex inset-0 bg-black bg-opacity-60' />
      </div>
      {/* Content */}
      <div tw='flex flex-col text-neutral-50 px-10'>
        {/* Title */}
        <div tw='text-7xl font-bold  text-center'>{title}</div>
        {/* Tags */}
        <div tw='flex mt-6 flex-wrap items-center text-4xl text-neutral-200 justify-center'>
          <div tw='font-semibold text-emerald-600'>{tag && tag}</div>
          <div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300 ' />
          <div>{author && author}</div>
          <div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300' />
          <div>{`${estimatedReadingTime} min read`}</div>
          <div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300' />
          <div>{formatDate(publishedAt, 'short')}</div>
        </div>
      </div>
    </div>
  )
}

export default BlogOgImage
