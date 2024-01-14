import Image from 'next/image'
import WhoAreWeImg from '@/public/images/whoarewe.svg'
import Button from '../shared/Button'

const WhoAreWe = () => {
  return (
    <section className='mx-auto w-full max-w-7xl px-5 pt-64 sm:px-10'>
      <div className='flex flex-col gap-8 md:flex-row'>
        <div className='flex w-full max-w-3xl flex-col justify-center md:w-1/2'>
          <h2 className='mb-8 text-4xl font-semibold  text-dark dark:text-light md:mb-12 lg:text-5xl'>
            Who we are?
          </h2>
          <p className='text-base leading-relaxed text-gray-dark dark:text-gray-light lg:text-xl'>
            <span className='text-accent dark:text-accent-dark'>Ngworocks</span>
            , a dynamic endeavor driven by young creative minds, celebrating
            culture and tourism through vibrant events, guided exploration, and
            community engagement. Embracing heritage, we aspire to make Ngwo a
            vibrant tourism hub while inspiring startups across regions.
          </p>
          <div className='w-full'>
            <Button href='/about' text='Learn more' className=' ml-0 mt-8' />
          </div>
        </div>
        <div className='flex w-full flex-col items-center px-10 md:w-1/2 lg:px-0'>
          <Image
            src={WhoAreWeImg}
            alt='About us illustration'
            title='About us illustration'
            priority
            className='h-full w-full max-w-md object-contain'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </div>
    </section>
  )
}

export default WhoAreWe
