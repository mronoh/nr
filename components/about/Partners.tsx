import Switchapp from '/public/partners/switchapp.png'
import Pepsi from '/public/partners/pepsi.png'
import Tecno from '/public/partners/tecno.png'
import Image from 'next/image'

const Partners = () => {
  const partners = [Switchapp, Pepsi, Tecno]
  return (
    <section
      id='partners'
      className='mx-auto w-full max-w-7xl px-5 py-24 sm:px-10'
    >
      <div>
        <h2 className='mb-8 text-4xl font-semibold  text-dark dark:text-light md:mb-12 lg:text-5xl'>
          Partners
        </h2>
        <div className='relative h-16 !overflow-hidden overflow-x-clip md:h-20 lg:h-24'>
          <div className='absolute bottom-2 top-2 flex animate-marquee items-center gap-8 pr-8 sm:gap-16 md:gap-16'>
            {partners.map((partner, index) => (
              <div key={index} className='h-full w-max overflow-clip'>
                <Image
                  src={partner}
                  alt='partner'
                  className='h-full w-full object-contain'
                />
              </div>
            ))}
          </div>
          <div className='absolute bottom-2 top-2 flex animate-marquee2 gap-8 pr-8 sm:gap-16 md:gap-16'>
            {partners.map((partner, index) => (
              <div key={index} className='h-full w-max overflow-clip'>
                <Image
                  src={partner}
                  alt='partner'
                  className='h-full w-full object-contain'
                />
              </div>
            ))}
          </div>
          <div className='fade-left' />
          <div className='fade-right' />
        </div>
      </div>
    </section>
  )
}

export default Partners
