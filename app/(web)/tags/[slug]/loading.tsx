import React from 'react'

export const BlogLoading = () => {
  return (
    <div className='mt-4 grid gap-16  sm:mt-8 sm:grid-cols-2 md:mt-12 md:px-10 lg:grid-cols-3 lg:px-20'>
      {[1, 2, 3].map(index => (
        <div key={index} className='flex w-full flex-col'>
          <div className='skeleton-element aspect-[4/3] w-full' />
          <div className='mt-4 flex w-full flex-col'>
            <div className='skeleton-element mb-2 h-4 w-1/2 animate-pulse rounded' />
            <div className='skeleton-element mb-2 h-4 animate-pulse rounded' />
            <div className='skeleton-element mb-2 h-4 animate-pulse rounded' />
          </div>
        </div>
      ))}
    </div>
  )
}

const Loading = () => {
  return (
    <div className='mx-auto flex w-full max-w-7xl animate-pulse flex-col justify-center p-5 sm:pt-8 md:pt-12'>
      <div className='w-full md:px-10 lg:px-20'>
        <div className='skeleton-element mb-4 h-10' />
        <div className='skeleton-element blog-description mb-4 h-16' />
      </div>
      <div className='mt-5 flex flex-wrap gap-2 border-y-2 border-zinc-400 px-0 py-6 dark:border-zinc-400 sm:gap-6 md:px-10 lg:px-20'>
        <div className='skeleton-element h-4 w-20' />
        <div className='skeleton-element h-4 w-20' />
        <div className='skeleton-element h-4 w-20' />
        <div className='skeleton-element h-4 w-20' />
        <div className='skeleton-element h-4 w-20' />
        <div className='skeleton-element h-4 w-20' />
        <div className='skeleton-element h-4 w-20' />
        <div className='skeleton-element h-4 w-20' />
      </div>
      <BlogLoading />
    </div>
  )
}

export default Loading
