type TagOgImageProps = { bgImage: any; title: string; description: string }

const TagOgImage = ({ bgImage, title, description }: TagOgImageProps) => {
  return (
    <div tw='relative flex w-full h-full flex items-center justify-center '>
      {/* Background */}
      <img
        tw='absolute left-0 top-0 bottom-0 w-full'
        src={bgImage}
        alt={title}
      />
      {/* Content */}
      <div tw='flex flex-col text-white w-[80%] mx-auto'>
        {/* Title */}
        <div tw='text-7xl font-bold  text-center'>{title}</div>
        {/* Tags */}
        <div tw='flex mt-6 items-center text-4xl text-white'>
          <div tw='font-semibold text-[#91E3A9]'>{description}</div>
        </div>
      </div>
    </div>
  )
}

export default TagOgImage
