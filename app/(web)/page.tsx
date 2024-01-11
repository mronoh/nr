import HomePageCover from '@/components/home/HomePageCover'
import WhoAreWe from '@/components/home/WhoAreWe'
import FeaturedBlogs from '@/components/home/FeaturedBlogs'
import Achievements from '@/components/home/Achievements'
import { sanityFetch } from '@/sanity/lib/fetch'
import { featuredAndHomeCoverPostsQuery } from '@/sanity/lib/queries'
import Services from '@/components/home/Services'

export default async function Home() {
  const showCasePosts = await sanityFetch<any>({
    query: featuredAndHomeCoverPostsQuery,
    tags: ['showCasePost', 'post']
  })
  return (
    <main
      className={` transition-background relative flex min-h-screen flex-col justify-center bg-cover`}
    >
      <HomePageCover />
      <WhoAreWe />
      <FeaturedBlogs posts={showCasePosts.featuredPosts} />
      <Services />
      <Achievements />
    </main>
  )
}
