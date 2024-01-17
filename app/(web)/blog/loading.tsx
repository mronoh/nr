import React from 'react'

const Loading = () => {
  return (
    <div className='mx-auto mt-4 w-full max-w-7xl animate-pulse xs:mt-8'>
      <div className='skeleton-element relative mx-5 flex h-[60vh] max-h-[630px]  flex-col items-start justify-end !rounded-3xl sm:mx-10 lg:h-[80vh]'>
        <svg
          className=' absolute right-1/2 top-1/2 h-20  w-20 -translate-y-1/2 translate-x-1/2 text-zinc-200 dark:text-zinc-600'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 18'
        >
          <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
        </svg>
        <div className='z-10 flex w-full flex-col items-start justify-center px-5 py-12 text-light xs:p-8 sm:p-8 md:w-3/4 md:p-12 lg:p-16'>
          <div className='skeleton-element2 h-6 w-20' />
          <div className='skeleton-element2 mt-4 h-8 w-full sm:h-10 md:mt-6' />

          <div className='skeleton-element2 mt-4 h-20 w-full' />
        </div>
      </div>
      {/* <div className='mx-auto w-full max-w-7xl  px-5 pt-24 sm:px-10'>
        <div>
          <div className='h-8 sm:h-10' />
          <div className='grid grid-cols-2 grid-rows-2 gap-6'>
            <article className='relative col-span-2 row-span-2 lg:col-span-1'>
              <div className='skeleton-element h-full w-full pt-[54%]' />
            </article>
            <article className='relative col-span-2 row-span-1 sm:col-span-1'>
              <div className='grid items-center gap-4 text-dark lg:grid-cols-12'>
                <div className='skeleton-element col-span-12 h-full w-full rounded-xl lg:col-span-4' />

                <div className='col-span-12 lg:col-span-8'>
                  <div className='skeleton-element2 h-6 w-20' />

                  <div className='h-4 w-full ' />
                </div>
              </div>
            </article>
            <article className='relative col-span-2 row-span-1 sm:col-span-1'>
              <div className='skeleton-element h-full w-full' />
            </article>
          </div>
          <div className='skeleton-element mt-8 w-24 sm:mt-12' />
        </div>
      </div> */}
    </div>
  )
}

export default Loading
