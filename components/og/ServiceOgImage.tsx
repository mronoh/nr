import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'

type ServiceProps = {
  title: string
  image: any
  description: string
}

const ServiceOgImage = ({ title, image, description }: ServiceProps) => {
  return (
    <div tw='relative flex w-full h-full flex items-center justify-center '>
      {/* Background */}
      <div tw='absolute flex inset-0'>
        <Image
          tw='flex flex-1'
          src={urlForImage(image).width(1200).height(630).url()}
          width={1200}
          height={630}
          placeholder='blur'
          blurDataURL={urlForImage(image).width(20).height(11).blur(10).url()}
          alt={title}
        />
        {/* Overlay */}
        <div tw='absolute flex inset-0 bg-black bg-opacity-60' />
      </div>
      {/* Content */}
      <div tw='flex flex-col text-neutral-50 px-10'>
        {/* Title */}
        <div tw='text-7xl font-bold  text-center'>{title}</div>
        {/* Description */}
        <div tw='flex mt-6 items-center text-4xl text-white'>
          <div tw='font-semibold text-[#91E3A9]'>{description}</div>
        </div>
      </div>
    </div>
  )
}

export default ServiceOgImage
