import ContactForm from '@/components/contact/ContactForm'
import { ContactImageStroke } from '@/components/icons'
import { siteMetadata } from '@/utils/siteMetaData'

export async function generateMetadata() {
  const ogUrl = new URL(`${siteMetadata.siteUrl}/api/og-image`)
  // contentType is required
  ogUrl.searchParams.set('contentType', 'tag')
  ogUrl.searchParams.set('title', 'About Us')
  ogUrl.searchParams.set('description', siteMetadata.description)

  return {
    title: 'Contact Us',
    description:
      "Contact us for all your tourism, cultural, and value-driven inquiries. Reach out through our contact form or via social media. We're here to enhance your Ngworocks experience!",
    publisher: siteMetadata.title,
    openGraph: {
      title: 'Contact Us',
      description:
        "Contact us for all your tourism, cultural, and value-driven inquiries. Reach out through our contact form or via social media. We're here to enhance your Ngworocks experience!",
      url: `/about`,
      siteName: 'NgwoRocks',
      locale: 'en_US',
      images: ogUrl.toString()
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Us',
      description:
        "Contact us for all your tourism, cultural, and value-driven inquiries. Reach out through our contact form or via social media. We're here to enhance your Ngworocks experience!",
      images: ogUrl.toString()
    }
  }
}

const ContactPage = () => {
  return (
    <main className='mx-auto w-full max-w-7xl px-5 pt-16 sm:px-10 md:pt-24'>
      <div className='border-b-2 border-dark dark:border-light'>
        <h1 className='lg:text-5x mx-auto mb-6 max-w-4xl text-2xl font-semibold capitalize text-dark dark:text-light md:text-4xl'>
          We'd love to hear your questions about our services, feel free to get
          in touch.
        </h1>
      </div>

      <section className='mt-6 flex flex-col sm:mt-8 md:mt-16 md:flex-row lg:gap-16'>
        <div className='hidden w-full items-center justify-center md:flex md:w-3/5 lg:w-1/2'>
          <ContactImageStroke className='flex w-full flex-1' />
        </div>
        <div className='w-full md:w-3/5 lg:w-1/2'>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default ContactPage
