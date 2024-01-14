import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { ReactElement } from 'react'

import { getImageDimensions } from '@sanity/asset-utils'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
}

export const ImageBox = ({ image }: any): ReactElement => {
  const alt = image?.alt ?? 'image broke'
  const blurDataURL = urlForImage(image).width(8).height(8).url()
  const dimensions = image.asset
    ? getImageDimensions(image)
    : { width: 1200, height: 680 }
  return (
    <div>
      {image?.asset && (
        <Image
          src={urlForImage(image).url()}
          alt={alt}
          title={alt}
          width={dimensions.width}
          height={dimensions.height}
          placeholder='blur'
          blurDataURL={blurDataURL}
          sizes='
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            767px'
          className='!my-0'
        />
      )}
    </div>
  )
}
