import styles from "@/styles"
import { cx, formatDate } from "@/utils"
import Image from "next/image"
import Link from "next/link"
import { Blog } from "./BlogLayoutOne"


const BlogLayoutThree = ({blog}: {blog:Blog}) => {
  return (
    <div className="flex flex-col gap-4 text-dark">
      <Link
        className="h-full col-span-4 overflow-hidden rounded-xl"
        href={blog.url}>
        <Image 
          src={blog.image.filePath.replace('../public', '')} 
          alt={blog.title}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          width={blog.image.width}
          height={blog.image.height}
          className="object-cover object-center w-full h-full transition-all duration-200 ease-in-out hover:scale-105 aspect-[4/3]"
        />
      </Link>
      <div className="flex flex-col w-full mt-4">
        <span className="text-sm font-semibold uppercase text-accent">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className='mt-1'>
          <h2 className='text-lg font-semibold capitalize text-dark'>
            <span className={cx(styles.underline, 'from-accent/50 to-accent/50')}>
              {blog.title}
            </span>
          </h2>
        </Link>
        <p className="text-base text-gray">
          {formatDate(blog.publishedAt)}
        </p>
        </div>
    </div>
  )
}

export default BlogLayoutThree;
