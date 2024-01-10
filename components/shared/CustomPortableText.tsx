import { PortableText } from '@portabletext/react'

import { FiExternalLink } from 'react-icons/fi'
import { ImageBox } from './ImageBox'
import { Image as ImageType } from 'sanity'

const CustomPortableText = ({ body }: { body: any }) => {
  return (
    <PortableText
      value={body}
      components={{
        marks: {
          link: ({ children, value }) => {
            return (
              <a
                href={value?.href}
                target='_blank'
                rel='noopener noreferrer'
                className=' text-blue-500 hover:underline'
              >
                {children}
                <FiExternalLink className='ml-1 inline-block text-sm' />
              </a>
            )
          }
        },
        types: {
          image: ({
            value
          }: {
            value: ImageType & { alt?: string; caption?: string }
          }) => {
            return (
              <div className='mx-auto my-8 w-[80%] space-y-2'>
                <ImageBox image={value} />
                {value?.alt && (
                  <p className='text-gray-600 text-center font-sans text-sm'>
                    {value.alt}
                  </p>
                )}
              </div>
            )
          }
        }
      }}
    />
  )
}

export default CustomPortableText
