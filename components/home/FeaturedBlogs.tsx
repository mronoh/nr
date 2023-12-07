import BlogLayoutOne, { Blog } from '../blog/BlogLayoutOne'
import BlogLayoutTwo from '../blog/BlogLayoutTwo';
import { cx } from '@/utils';

export const dummyBlog: Blog = {
  title: "Sample Blog Post",
  url: "https://example.com/sample-blog-post",
  publishedAt: "2023-11-30T12:00:00Z",
  tags: ["technology", "programming", "web development"],
  image: {
    filePath: "/images/homeBgImg.png",
    blurhashDataUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
    width: 1200,
    height: 800,
  },
};

const FeaturedBlogs = () => {
  return (
    <section className='px-5 sm:px-10 py-24 max-w-7xl mx-auto w-full'>
      <div>
      <h2 className="text-dark text-4xl mb-12 font-semibold">Featured Blogs</h2>
      <div className={cx("grid grid-cols-2 grid-rows-2 gap-6")}>
        <article className="relative col-span-2 row-span-2 lg:col-span-1">
          <BlogLayoutTwo blog={dummyBlog} />
        </article>
        <article className="relative col-span-2 row-span-1 sm:col-span-1">
          <BlogLayoutOne blog={dummyBlog} />
        </article>
        <article className="relative col-span-2 row-span-1 sm:col-span-1">
          <BlogLayoutOne blog={dummyBlog} />
        </article>
      </div>
      </div>
    </section>
  )
}

export default FeaturedBlogs
