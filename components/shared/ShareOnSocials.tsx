'use client'

import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon
} from 'react-share'

const ShareOnSocials = ({
  shareUrl,
  title,
  description,
  classNames
}: {
  shareUrl: any
  title: any
  description?: string
  classNames?: string
}) => {
  return (
    <div className='flex gap-4'>
      <div className='Demo__some-network'>
        <FacebookShareButton
          url={shareUrl}
          className=' border-gray-light dark:border-gray-dark rounded-md border p-2 hover:bg-[#4267B2] hover:text-light'
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>

      <div className='Demo__some-network'>
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className='Demo__some-network__share-button'
        >
          <XIcon size={32} round />
        </TwitterShareButton>
      </div>

      <div className='Demo__some-network'>
        <TelegramShareButton
          url={shareUrl}
          title={title}
          className='Demo__some-network__share-button'
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </div>

      <div className='Demo__some-network'>
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=':: '
          className='Demo__some-network__share-button'
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>

      <div className='Demo__some-network'>
        <LinkedinShareButton
          url={shareUrl}
          className='Demo__some-network__share-button'
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  )
}

export default ShareOnSocials
