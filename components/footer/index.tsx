import React from 'react'
import { FacebookIcon, InstagramIcon, MailIcon } from '../icons'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/icons/ngworocks_logo.svg'
import getOnAppStore from '@/public/icons/app-store-badge.svg'
import getOnPlayStore from '@/public/icons/google-play-badge.svg'
import { footerPages } from '@/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='w-full rounded-t-3xl border-t-[12px] border-accent  bg-dark px-5 py-8 sm:px-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col justify-between text-light sm:flex-row '>
          <div className='flex justify-around gap-8 sm:justify-between'>
            {/* Follow us on social media  */}
            <div className=''>
              <h3 className='mb-2 text-lg font-semibold uppercase'>
                follow us
              </h3>
              <span className='flex flex-col gap-1 text-sm'>
                <a href='www.facebook.com' className='flex'>
                  <FacebookIcon className='mr-2 h-6 w-6' />
                  @ngworocks
                </a>
                <a href='www.instagram.com' className='flex'>
                  <InstagramIcon className='mr-2 h-6 w-6' />
                  @ngworocks
                </a>
                <a href='www.instagram.com' className='flex'>
                  <MailIcon className='mr-2 h-6 w-6' />
                  ngworocks@gmail.com
                </a>
              </span>
            </div>

            {/* Pages  */}
            <div>
              <h3 className='mb-2 text-lg font-semibold uppercase'>Pages</h3>
              <span className='flex flex-col gap-1 text-sm'>
                {footerPages.map((page, index) => (
                  <Link href={page.url} key={index} className=''>
                    {page.name}
                  </Link>
                ))}
              </span>
            </div>
          </div>

          <div className='flex w-fit flex-col items-center gap-8'>
            <Link href='/' className='flex h-16 w-fit justify-center'>
              <Image
                src={Logo}
                alt='Ngwo Rocks Logo'
                className='h-full w-auto'
              />
            </Link>
            <span className='flex gap-4'>
              <Image
                src={getOnAppStore}
                alt='Get on app store badge'
                className='h-9 w-auto rounded-md border border-light'
              />
              <Image
                src={getOnPlayStore}
                alt='Get on play store badge'
                className='h-9 w-auto rounded-md border border-light'
              />
            </span>
          </div>
        </div>
        <p className='mt-8 font-thin text-light'>
          © {currentYear} Ngworocks. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
