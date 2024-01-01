import Footer from '@/components/footer'
import Header from '@/components/header'
import Button from '@/components/shared/Button'
import WantATour from '@/components/shared/WantATour'
import Image from 'next/image'

export default function NotFound() {
  return (
    <>
      <Header isDraftMode={false} />
      <main className='relative -mb-24 flex h-screen items-center justify-center lg:max-h-[767px]'>
        <div className='relative flex flex-col items-center gap-8'>
          <h1 className='z-50 text-xl text-center w-[80%] sm:text-3xl font-semibold text-red-500'> The requested page was not found 📖</h1>
          <p className='dark:text-accent-dark text-center text-9xl sm:text-[12rem] font-bold text-accent'>
            404
          </p>
          <span className='flex flex-col gap-4 sm:flex-row md:gap-8'>
            <Button text='Return to home' href='/' />
            <Button text='View all blogs' href='/tags/all' />
          </span>

          <Image
            src='/images/birds.svg'
            width={80}
            height={80}
            alt='Not found'
            className='absolute -right-20 -top-full filter dark:invert lg:-top-20'
          />
        </div>
        <Image
          src='/images/404.svg'
          className='absolute left-0 top-20 h-48 w-48 sm:h-64 sm:w-64 md:h-auto md:w-auto opacity-70 dark:opacity-100'
          width={400}
          height={400}
          alt='Not found'
          sizes='(max-width: 639px) 50vw, 400px'
        />
      </main>
      <WantATour />
      <Footer />
    </>
  )
}
