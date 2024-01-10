'use client'

import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { useState } from 'react'

function GalleryImage({ image, title }: { image: any; title: string }) {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }
  return (
    <div
      className='relative h-full overflow-hidden '
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={urlForImage(image.image).url()}
        alt={image.alt ?? `${title} image`}
        title={image.alt ?? `${title} image`}
        placeholder='blur'
        blurDataURL={image.lqip}
        width={image.dimensions?.width ?? 1200}
        height={image.dimensions?.height ?? 630}
        className='aspect-square h-full w-full object-cover object-center transition-all duration-700 ease-in-out hover:scale-105'
      />
      {hover && (
        <div className='absolute right-0 top-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100'>
          <div className='absolute left-0 top-0 h-full w-full bg-bgdark/50' />

          <span className='z-10 p-5 text-center text-xl text-light dark:text-light'>
            {image.alt}
          </span>
        </div>
      )}
    </div>
  )
}

export default GalleryImage
