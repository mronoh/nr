import Image from 'next/image'
import homeBgImg from '@/public/images/homeBgImg.png'

const HomePageCover = () => {
  return (
    <section className='px-5 sm:px-16  bg-light'>
      <div className='h-[90vh] flex flex-col items-center justify-start relative max-w-7xl mx-auto w-full'>
          <h1 className='text-5xl leading-[4rem] text-dark font-bold max-w-3xl text-center mx-auto mt-48'>
            Embark on a Journey of Culture, Heritage, and Adventure with Ngworocks
          </h1>
          <div className="absolute max-w-3xl w-9/12 mx-auto -bottom-32">
          <Image src={homeBgImg} placeholder='blur' priority alt='Home background image' className='h-full w-full object-contain' />
          </div>
      </div>
    </section>
  )
}

export default HomePageCover
