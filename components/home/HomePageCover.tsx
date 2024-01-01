import Image from 'next/image'
import homeBgImg from '@/public/images/homeBgImg.png'

const HomePageCover = () => {
  return (
    <section className='dark:bg-bgdark bg-light px-5 sm:px-10'>
      <div className='homecover__container relative mx-auto flex h-[60vh] min-h-[500px] w-full max-w-7xl flex-col items-center justify-start sm:min-h-[500px] md:max-h-[800px] md:min-h-[700px] lg:h-[90vh]'>
        <h1 className='home__header relative mx-auto mt-36 text-center text-4xl font-bold text-dark dark:text-light md:max-w-2xl md:text-5xl md:leading-[4rem] lg:mt-48 lg:max-w-3xl lg:text-6xl'>
          Embark on a Journey of Culture, Heritage, and Adventure with Ngworocks
          <div className='home__birds absolute -top-[80%] right-0 w-20 md:-top-20  lg:-right-20 lg:w-max'>
            <Image
              src='/images/birds.svg'
              width={100}
              height={100}
              alt='Birds flying silloutte'
              className='filter dark:invert'
            />
          </div>
        </h1>
        <div className='absolute -bottom-32 z-20 mx-auto w-full max-w-3xl md:w-9/12'>
          <Image
            src={homeBgImg}
            placeholder='blur'
            priority
            alt='Home background image'
            className='h-full w-full object-contain'
          />
        </div>
        <div className='absolute left-[2%] top-2/3 z-0 w-32 md:-bottom-20 md:w-max lg:bottom-8 lg:left-[11%]'>
          <Image
            src='/images/leaves.svg'
            width={300}
            height={300}
            alt='shape'
            className='hidden filter dark:invert md:block'
          />
        </div>
      </div>
    </section>
  )
}

export default HomePageCover
