import HomeCover from '@/components/blog/HomeCover'
import RecentBlogs from '@/components/blog/RecentPosts'
import FeaturedBlogs from '@/components/home/FeaturedBlogs'
import { sanityFetch } from '@/sanity/lib/fetch'
import { featuredAndHomeCoverPostsQuery } from '@/sanity/lib/queries'
import Loading from './loading'

const BlogPage = async () => {
  const showCasePosts = await sanityFetch<any>({
    query: featuredAndHomeCoverPostsQuery,
    tags: ['showCasePost', 'post']
  })
  return false ? (
    <main>
      <HomeCover post={showCasePosts.homeCoverPost} />
      <FeaturedBlogs posts={showCasePosts.featuredPosts} />
      <RecentBlogs />
    </main>
  ) : (
    <Loading />
  )
}

export default BlogPage
