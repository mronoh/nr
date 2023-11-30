import React from 'react'
import BlogLayoutOne, { Blog } from '../blog/BlogLayoutOne'
import homeBgImg from '@/public/images/homeBgImg.png'

const dummyBlog: Blog = {
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
    <section className='px-5 sm:px-16 py-24 max-w-7xl mx-auto w-full'>
      <div>
      <h2 className="text-dark text-4xl mb-12 font-semibold">Featured Blogs</h2>
      <div className="flex gap-8">
        <div className="w-1/2">
          <BlogLayoutOne blog={dummyBlog} />
        </div>
        <div className="w-1/2">
          <BlogLayoutOne blog={dummyBlog} />
        </div>
      </div>
      </div>
    </section>
  )
}

export default FeaturedBlogs
