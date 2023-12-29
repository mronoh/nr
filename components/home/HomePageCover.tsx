import Image from 'next/image'
import homeBgImg from '@/public/images/homeBgImg.png'

const HomePageCover = () => {
  return (
    <section className='bg-light px-5  sm:px-10'>
      <div className='relative mx-auto flex h-[50vh] w-full max-w-7xl flex-col items-center justify-start lg:h-[90vh] lg:max-h-[800px]'>
        <h1 className='relative mx-auto mt-48 max-w-3xl text-center text-5xl font-bold leading-[4rem] text-dark'>
          Embark on a Journey of Culture, Heritage, and Adventure with Ngworocks
          <div className='absolute -right-20 -top-20'>
            <Image
              src='/images/birds.svg'
              width={100}
              height={100}
              alt='Not found'
              className=''
            />
          </div>
        </h1>
        <div className='absolute -bottom-32 z-20 mx-auto w-9/12 max-w-3xl'>
          <Image
            src={homeBgImg}
            placeholder='blur'
            priority
            alt='Home background image'
            className='h-full w-full object-contain'
          />
        </div>
        <div className='absolute bottom-8 left-[11%] z-0'>
          <Image
            src='/images/leaves.svg'
            width={300}
            height={300}
            alt='shape'
          />
        </div>
      </div>
    </section>
  )
}

export default HomePageCover
