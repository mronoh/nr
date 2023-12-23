import HomePageCover from '@/components/home/HomePageCover'
import WhoAreWe from '@/components/home/WhoAreWe'
import FeaturedBlogs from '@/components/home/FeaturedBlogs'
import Achievements from '@/components/home/Achievements'

export default function Home() {
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
