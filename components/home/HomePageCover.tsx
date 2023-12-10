import Image from 'next/image'
import homeBgImg from '@/public/images/homeBgImg.png'

const HomePageCover = () => {
  return (
    <section className='bg-light px-5  sm:px-10'>
      <div className='relative mx-auto flex h-[90vh] w-full max-w-7xl flex-col items-center justify-start'>
        <h1 className='mx-auto mt-48 max-w-3xl text-center text-5xl font-bold leading-[4rem] text-dark'>
          Embark on a Journey of Culture, Heritage, and Adventure with Ngworocks
        </h1>
        <div className='absolute -bottom-32 mx-auto w-9/12 max-w-3xl'>
          <Image
            src={homeBgImg}
            placeholder='blur'
            priority
            alt='Home background image'
            className='h-full w-full object-contain'
          />
        </div>
      </div>
    </section>
  )
}

export default HomePageCover
