const Loading = () => {
  return (
    <div className='animate-pulse'>
      <div className='skeleton-element mx-auto mt-40 h-10 w-[80%] md:max-w-2xl lg:max-w-3xl ' />
      <div className='skeleton-element mx-auto mt-8 h-10 w-[80%] md:max-w-2xl lg:max-w-3xl ' />
      <div className='skeleton-element mx-auto mt-8 h-10 w-[80%] md:max-w-2xl lg:max-w-3xl ' />
      <div className='skeleton-element mx-auto mt-20 h-72 w-[80%] md:max-w-2xl lg:max-w-3xl' />
    </div>
  )
}

export default Loading
