import HomePageCover from '@/components/home/HomePageCover'
import WhoAreWe from '@/components/home/WhoAreWe'
import FeaturedBlogs from '@/components/home/FeaturedBlogs'
import Achievements from '@/components/home/Achievements'
import { sanityFetch } from '@/sanity/lib/fetch'
import { SanityDocument } from 'next-sanity'
import { postsQuery } from '@/sanity/lib/queries'
import { Post } from '@/components/blog/BlogLayoutOne'

export default async function Home() {
  return (
    <main
      className={` transition-background relative flex min-h-screen flex-col justify-center bg-cover`}
    >
      <HomePageCover />
      <WhoAreWe />
      <FeaturedBlogs />
      <Achievements />
    </main>
  )
}
