import Gallery from '@/components/services/Gallery'
import CustomPortableText from '@/components/shared/CustomPortableText'
import { client } from '@/sanity/lib/client'
import { sanityFetch } from '@/sanity/lib/fetch'
import { urlForImage } from '@/sanity/lib/image'
import { servicePathsQuery, serviceQuery } from '@/sanity/lib/queries'
import { siteMetadata } from '@/utils/siteMetaData'
import { SanityDocument } from 'next-sanity'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const services = await client.fetch(servicePathsQuery)

  return services.map((service: any) => ({
    slug: service.params.slug
  }))
}

// Dynamic metadata for SEO
export async function generateMetadata({
  params
}: {
  params: { slug: string }
}) {
  try {
    const slug = params.slug

    // Find the service for the current page.
    const service = await sanityFetch<SanityDocument>({
      query: serviceQuery,
      params,
      tags: [`service:${params.slug}`]
    })

    if (!service)
      return {
        title: 'Page not found',
        description: "The page you're looking for doesn't exist"
      }

    const ogUrl = new URL(`${siteMetadata.siteUrl}/api/og-image`)
    ogUrl.searchParams.set('contentType', 'service')
    ogUrl.searchParams.set('title', service.title)
    ogUrl.searchParams.set('image', service?.mainImage?.image)
    ogUrl.searchParams.set('description', service?.description)

    let imageList = [siteMetadata.socialBanner]

    if (service?.mainImage) {
      imageList = [
        urlForImage(service.mainImage.image).width(1200).height(630).url()
      ]
    }

    return {
      title: service.title,
      description: service.description,
      alternates: {
        canonical: `/service/${service.slug}`
      },
      publisher: siteMetadata.title,
      openGraph: {
        title: service.title,
        description: service.description,
        url: `/services/${service.slug}`,
        siteName: siteMetadata.title,
        images: ogUrl.toString()
      },
      twitter: {
        card: 'summary_large_image',
        title: service.title,
        description: service.description,
        images: ogUrl.toString()
      }
    }
  } catch (err) {
    console.error(err)
    return {
      title: 'Page not found',
      description: "The page you're looking for doesn't exist"
    }
  }
}

const ServicePage = async ({ params }: { params: { slug: string } }) => {
  const service = await sanityFetch<SanityDocument>({
    query: serviceQuery,
    params,
    tags: [`service:${params.slug}`]
  })

  if (!service) {
    notFound()
  }

  return (
    <main className='relative mx-auto max-w-7xl !overflow-x-clip px-5 pt-8 sm:px-10 sm:pt-16 md:pt-24'>
      <section className=' mb-8 w-full pt-5'>
        <div className='prose prose-base prose-stone mx-auto w-full dark:prose-invert sm:prose-xl'>
          <h1 className='lg:text-5x mx-auto mb-6 max-w-4xl text-2xl font-semibold capitalize text-dark dark:text-light md:text-4xl'>
            {service?.title ? service.title : 'Untitled'}
          </h1>
          {service?.description && <p>{service.description}</p>}
          {service?.mainImage && (
            <div className='relative w-full overflow-clip rounded-xl pt-[56.25%]'>
              <Image
                className='my-0 h-full w-full rounded-xl object-cover object-center'
                src={urlForImage(service.mainImage.image).url()}
                placeholder='blur'
                fill
                alt={service.mainImage.alt ?? `${service?.title} Cover Image`}
                title={service.mainImage.alt ?? `${service?.title} Cover Image`}
                blurDataURL={service.mainImage.lqip}
                sizes='(max-width: 1024px) 100vw, 450px'
              />
            </div>
          )}
          {service?.body && (
            <div className='first-letter:text-3xl sm:first-letter:text-5xl'>
              <CustomPortableText body={service.body} />
            </div>
          )}
        </div>
      </section>
      {service.gallery && (
        <Gallery gallery={service.gallery} title={service?.title ?? ''} />
      )}
    </main>
  )
}

export default ServicePage
