import Button from '@/components/shared/Button'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className='relative -mb-24 flex h-screen items-center justify-center overflow-x-clip lg:max-h-[767px]'>
      <div className='relative flex flex-col items-center gap-8'>
        <h1 className='z-30 w-[80%] text-center text-xl font-semibold text-red-500 sm:text-3xl'>
          The requested blog was not found 📖
        </h1>
        <p className='text-center text-9xl font-bold text-accent dark:text-accent-dark sm:text-[12rem]'>
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
          alt='Silloutte illustration of birds flying'
          title='Silloutte illustration of birds flying'
          className='absolute -right-20 -top-full filter dark:invert lg:-top-20'
        />
      </div>
      <Image
        src='/images/404.svg'
        className='absolute left-0 top-20  h-48 w-48 sm:h-64 sm:w-64 md:h-auto md:w-auto'
        width={400}
        height={400}
        alt='Silloutte illustration of man hanging from a cliff'
        title='Silloutte illustration of man hanging from a cliff'
      />
    </main>
  )
}
