import HomeCover from '@/components/blog/HomeCover'
import RecentBlogs from '@/components/blog/RecentPosts'
import FeaturedBlogs from '@/components/home/FeaturedBlogs'

const BlogPage = () => {
  return (
    <main>
      <HomeCover />
      <FeaturedBlogs />
      <RecentBlogs />
    </main>
  )
}

export default BlogPage
