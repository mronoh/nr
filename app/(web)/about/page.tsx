import CustomPortableText from '@/components/shared/CustomPortableText'
import Team from '@/components/shared/Team'
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

  const theTeam = await sanityFetch<any>({
    query: teamQuery,
    tags: ['team']
  })

  return (
    <main className='mx-auto w-full max-w-7xl px-5 pt-16 sm:px-10 md:pt-24'>
      <h1 className='mx-auto mb-6 max-w-4xl text-center text-2xl font-semibold capitalize text-dark dark:text-light md:text-4xl lg:text-5xl'>
        About us
      </h1>
      <div className='w-full  border-b-2 border-dark pb-16 dark:border-light'>
        <article className='prose prose-stone dark:prose-invert prose-base sm:prose-lg mx-auto flex w-full flex-col'>
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

        {theTeam && theTeam.map((team: any) => <Team />)}
      </div>
    </main>
  )
}

export default AboutPage
