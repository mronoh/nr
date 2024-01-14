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
import { FaCheck } from 'react-icons/fa'
import { FaCopy } from 'react-icons/fa6'
import { useState } from 'react'

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
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className='flex gap-4'>
      <div className='Demo__some-network'>
        <FacebookShareButton
          url={shareUrl}
          className=' rounded-md border border-gray-light p-2 hover:bg-[#4267B2] hover:text-light dark:border-gray-dark'
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
      <div
        className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur dark:bg-white/10'
        onClick={handleCopy}
      >
        {copied ? (
          <FaCheck className='text-green' />
        ) : (
          <FaCopy className='text-bgdark dark:text-gray-light' />
        )}
      </div>
    </div>
  )
}

export default ShareOnSocials
