import { cx } from "@/utils"
import BlogLayoutOne from "../blog/BlogLayoutOne"
import BlogLayoutTwo from "../blog/BlogLayoutTwo"
import styles from "@/styles"
import BlogLayoutThree from "../blog/BlogLayoutThree"
import Link from "next/link"
import { dummyBlog } from "../home/FeaturedBlogs"

const recentBlogs = [
  dummyBlog,
  dummyBlog,
  dummyBlog,
  dummyBlog,
  dummyBlog,
  dummyBlog,
]

const RecentBlogs = () => {
  
  return (
    <section className='px-5 sm:px-10 py-24 max-w-7xl mx-auto w-full'>
      <div className="flex items-center justify-between w-full">
      <h2 className="text-dark text-4xl mb-12 font-semibold">Recent Blogs</h2>
        <Link href='/catergories/all' className="px-4 py-2 capitalize rounded-full hover:text-light text-accent bg-accent/20">
          view all
        </Link>
      </div>
      <div className={cx("grid lg:grid-cols-3 sm:grid-cols-2 lg:grid-rows-2 grid-rows-3 gap-16")}>
        {recentBlogs.map((blog, index) => (
          <article key={index}>
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
        
      </div>
    </section>
  )
}

export default RecentBlogs;
