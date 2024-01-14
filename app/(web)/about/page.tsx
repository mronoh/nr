// import OurTeam from '@/components/about/OurTeam'
import Partners from '@/components/about/Partners'
import CustomPortableText from '@/components/shared/CustomPortableText'
import { sanityFetch } from '@/sanity/lib/fetch'
import { aboutPageQuery, teamQuery } from '@/sanity/lib/queries'
import { siteMetadata } from '@/utils/siteMetaData'

export async function generateMetadata() {
  const ogUrl = new URL(`${siteMetadata.siteUrl}/api/og-image`)
  // contentType is required
  ogUrl.searchParams.set('contentType', 'tag')
  ogUrl.searchParams.set('title', 'About Us')
  ogUrl.searchParams.set('description', siteMetadata.description)

  return {
    title: 'About Us',
    description: siteMetadata.description,
    publisher: siteMetadata.title,
    openGraph: {
      title: 'About Us',
      description: siteMetadata.description,
      url: `/about`,
      siteName: 'NgwoRocks',
      locale: 'en_US',
      images: ogUrl.toString()
    },
    twitter: {
      card: 'summary_large_image',
      title: siteMetadata.title,
      description: siteMetadata.title,
      images: ogUrl.toString()
    }
  }
}

const AboutPage = async () => {
  const about = await sanityFetch<any>({
    query: aboutPageQuery,
    tags: ['about']
  })

  return (
    <main className='mx-auto w-full max-w-7xl px-5 pt-16 sm:px-10 md:pt-24'>
      <h1 className='mx-auto max-w-4xl text-center text-3xl font-bold capitalize text-dark dark:text-light md:text-4xl lg:text-5xl'>
        About us
      </h1>
      <div className='w-full  border-b-2 border-dark pb-16 dark:border-light'>
        <article className='prose prose-base prose-stone mx-auto flex w-full flex-col dark:prose-invert sm:prose-lg'>
          {about?.overview && (
            <section className=''>
              <h2>Overview</h2>
              <CustomPortableText body={about.overview} />
            </section>
          )}
          {about?.history && (
            <section className=''>
              <h2>Story of NgwoRocks</h2>
              <CustomPortableText body={about.history} />
            </section>
          )}
          {/* {about?.vision && (
            <section className=''>
              <h2>Vision and Values</h2>
              <CustomPortableText body={about.vision} />
            </section>
          )} */}
        </article>
      </div>
      {/* <OurTeam /> */}
      <Partners />
    </main>
  )
}

export default AboutPage
