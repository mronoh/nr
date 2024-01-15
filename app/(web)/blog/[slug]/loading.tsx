function Loading() {
  return (
    <div className='mx-auto flex w-full max-w-7xl animate-pulse flex-col justify-center p-5 sm:pt-8 md:pt-12 lg:flex-row'>
      <div className=' mb-8 w-full lg:w-4/6'>
        {/* Date and Read Time */}
        <div className='mb-4 flex h-4 gap-8'>
          <div className='skeleton-element date h-4 w-40' />
          <div className='skeleton-element read-time h-4 w-40' />
        </div>

        {/* Blog Title */}
        <div className='skeleton-element mb-4 h-10' />

        {/* Blog Description */}
        <div className='skeleton-element blog-description mb-4 h-16' />

        {/* Blog Cover Image */}
        <div className='skeleton-element relative mb-8 flex h-64 items-center justify-center pt-[56.25%]'>
          <svg
            className='absolute top-1/2 h-20 w-20 -translate-y-1/2 text-zinc-200 dark:text-zinc-600'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 18'
          >
            <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
          </svg>
        </div>

        {/* Blog Body */}
        <div className='skeleton-element mb-2 p-10'>
          <div className='mb-2 h-4 animate-pulse rounded bg-zinc-200  dark:bg-zinc-600' />
          <div className='mb-2 h-4 animate-pulse rounded bg-zinc-200  dark:bg-zinc-600' />
          <div className='mb-2 h-4 animate-pulse rounded bg-zinc-200  dark:bg-zinc-600' />
          <div className='mb-2 h-4 animate-pulse rounded bg-zinc-200  dark:bg-zinc-600' />
        </div>
      </div>
      <div className='top-20 hidden h-max w-full flex-col gap-8 py-5 sm:flex-row  lg:flex lg:min-h-screen lg:w-2/6 lg:max-w-[320px] lg:flex-col lg:gap-4 lg:p-5'>
        {/* Author */}
        <div>
          <div className='skeleton-element mb-2 h-4' />

          <div className='flex w-full items-center gap-2'>
            <div className='skeleton-element flex h-12 w-12 items-center justify-center !rounded-full'>
              <svg
                className=' h-6 w-6  text-zinc-200 dark:text-zinc-600'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 18'
              >
                <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
              </svg>
            </div>
            <div className='skeleton-element author-name h-12 w-[80%]' />
          </div>
          <div className='skeleton-element mt-2 h-20 w-full' />
        </div>

        {/* Tags */}
        <div className=' mt-6 '>
          <div className='skeleton-element mb-2 h-6' />

          <div className='flex w-full flex-wrap justify-between gap-2'>
            <div className='skeleton-element h-4 w-20' />
            <div className='skeleton-element h-4 w-20' />
            <div className='skeleton-element h-4 w-20' />
            <div className='skeleton-element h-4 w-20' />
          </div>
        </div>
        {/* Author Description */}
        <div className=' mt-6 w-full'>
          <div className='skeleton-element mb-2 h-6' />

          <div className='skeleton-element mt-2 h-20 w-full pt-[56.25%]' />
          <div className='skeleton-element mt-2 h-20 w-full pt-[56.25%]' />
        </div>
      </div>
    </div>
  )
}

export default Loading
