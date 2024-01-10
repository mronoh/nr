import { cx } from '@/utils'
import GalleryImage from './GalleryImage'

type GalleryType = {
  images: any[]
  display: string
  zoom: boolean
}
const Gallery = ({
  gallery,
  title
}: {
  gallery: GalleryType
  title: string
}) => {
  return (
    gallery.images?.length > 0 && (
      <section className='w-full py-24'>
        <h2 className='mb-8 text-center text-3xl font-semibold text-dark  dark:text-light xs:text-4xl md:mb-12 lg:text-5xl'>
          Gallery
        </h2>
        <div className={cx('grid gap-1 sm:grid-cols-2 lg:grid-cols-3')}>
          {gallery.images &&
            gallery.images.map((image: any, index: number) => (
              <GalleryImage title={title} key={index} image={image} />
            ))}
        </div>
      </section>
    )
  )
}

export default Gallery
