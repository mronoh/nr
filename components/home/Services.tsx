import { services } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Service = (service: any) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className='relative flex aspect-square w-1/2 max-w-[280px] flex-auto cursor-pointer items-center justify-center overflow-clip rounded-xl md:w-1/3'
    >
      <Image
        src={service.img}
        alt={service.alt}
        fill
        placeholder='blur'
        className='rounded-xl object-cover transition-all duration-300 ease-in-out hover:scale-105'
        sizes='(max-width: 768px) 280px, (max-width: 1200px) 280px, 280px'
      />
      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50' />
      <h3 className='z-10 p-6 text-center text-3xl font-bold text-white'>
        {service.title}
      </h3>
    </Link>
  )
}

const Services = () => {
  return (
    <section
      id='services'
      className='serviceshomepage relative mt-24 w-full py-24 '
    >
      <div className='mx-auto max-w-7xl px-5 sm:px-10'>
        <h2 className='mb-8 text-center text-4xl font-semibold text-light md:mb-12 lg:text-5xl'>
          Our Services
        </h2>
        <div className='flex w-full flex-wrap justify-center gap-8 lg:gap-16'>
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
