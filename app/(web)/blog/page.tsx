import HomeCover from '@/components/blog/HomeCover'
import RecentBlogs from '@/components/blog/RecentPosts'
import FeaturedBlogs from '@/components/home/FeaturedBlogs'
import { sanityFetch } from '@/sanity/lib/fetch'
import { featuredAndHomeCoverPostsQuery } from '@/sanity/lib/queries'

const BlogPage = async () => {
  const showCasePosts = await sanityFetch<any>({
    query: featuredAndHomeCoverPostsQuery,
    tags: ['showCasePost', 'post']
  })
  return (
    <main>
      <HomeCover post={showCasePosts.homeCoverPost} />
      <FeaturedBlogs posts={showCasePosts.featuredPosts} />
      <RecentBlogs />
    </main>
  )
}

export default BlogPage
