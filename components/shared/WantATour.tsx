import Image from 'next/image'
import wantToTour from '/public/images/wantatourbg.png'
import Link from 'next/link'
import { IoArrowForwardOutline } from 'react-icons/io5'

const WantATour = () => {
  return (
    <section className='mx-auto w-full max-w-7xl px-5 py-24 sm:px-10'>
      <div className='relative flex flex-col items-center justify-center rounded-3xl border px-10 py-16 md:h-96 lg:h-[519px]'>
        <div className='absolute left-0 top-0 z-10 h-full w-full rounded-3xl bg-gradient-to-b from-dark/50 to-dark/90' />
        <Image
          src={wantToTour}
          alt='Background image'
          title='Background image'
          className='absolute right-0 top-0 h-full w-full rounded-3xl object-cover'
        />
        <div className='z-10 flex w-max flex-col items-center justify-center px-5 text-white'>
          <h2 className='mb-4 text-center text-2xl font-bold xs:text-3xl sm:text-4xl md:text-5xl'>
            Adventure awaits. <br className='sm:hidden' /> Ready?
          </h2>
          <p className='mb-8 w-[80vw] max-w-xs text-center text-base md:max-w-lg md:text-xl'>
            Reach out for tours, hikes, streaming events, or any questions.
            Let&apos;s plan your next great experience together!
          </p>
          <Link
            href='/contact'
            title='Link to Contact Us page'
            className='rounded-full border border-dark bg-dark px-4 py-2 font-semibold text-white transition-all duration-200 ease-in-out hover:bg-light hover:text-dark'
          >
            Get in touch
            <IoArrowForwardOutline className='ml-1 inline' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WantATour
