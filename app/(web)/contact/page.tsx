import ContactForm from '@/components/contact/ContactForm'
import { ContactImageStroke } from '@/components/icons'

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
