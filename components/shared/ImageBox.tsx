import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { ReactElement } from 'react'

import { getImageDimensions } from "@sanity/asset-utils";

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
}

export const ImageBox = ({ image }: any): ReactElement => {
  const alt = image?.alt ?? "image broke";
  const dimensions = image.asset
    ? getImageDimensions(image)
    : { width: 1200, height: 680 };
  return (
    <div>
      {image?.asset && (
        <Image
          src={urlForImage(image).url()}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          placeholder="blur"
          blurDataURL={urlForImage(image).width(24).height(24).blur(10).url()}
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
        />
      )}
    </div>
  );
}
