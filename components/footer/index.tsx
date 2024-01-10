import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/icons/ngworocks_logo.svg'
import getOnAppStore from '@/public/icons/app-store-badge.svg'
import getOnPlayStore from '@/public/icons/google-play-badge.svg'
import { footerPages } from '@/constants'
import { siteMetadata } from '@/utils/siteMetaData'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className=' w-full rounded-t-3xl border-t-[12px] border-accent  bg-black px-5 py-8 sm:px-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col justify-between text-gray sm:flex-row '>
          <Link
            href='/'
            title='Link to homepage'
            className='mb-3 ml-[10%] block h-12 w-12 justify-center sm:hidden'
          >
            <Image
              src={Logo}
              alt='NgwoRocks Logo'
              title='NgwoRocks Logo'
              className='h-full w-auto'
              width={64}
              height={64}
            />
          </Link>
          <div className='flex justify-around gap-8 sm:justify-between'>
            {/* Follow us on social media  */}
            <div className=''>
              <h3 className='mb-2 text-base font-semibold uppercase xs:text-lg'>
                follow us
              </h3>
              <span className='flex flex-col gap-1 text-xs xs:text-sm'>
                <a
                  aria-label='NgwoRocks facebook profile link'
                  title='NgwoRocks facebook profile link'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={siteMetadata.social.facebook}
                  className='flex items-center'
                >
                  <FaFacebookF className='mr-2' />
                  @ngworocks
                </a>
                <a
                  aria-label='NgwoRocks instagram profile link'
                  title='NgwoRocks instagram profile link'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={siteMetadata.social.instagram}
                  className='flex items-center'
                >
                  <FaInstagram className='mr-2' />
                  @ngworocks
                </a>
                <a
                  aria-label='NgwoRocks email link'
                  title='NgwoRocks email link'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`mailto:${siteMetadata.social.mail}`}
                  className='flex items-center'
                >
                  <MdOutlineMailOutline className='mr-2 text-base' />
                  {siteMetadata.social.mail}
                </a>
              </span>
            </div>

            {/* Pages  */}
            <div>
              <h3 className='mb-2 text-base font-semibold uppercase xs:text-lg'>
                Pages
              </h3>
              <span className='flex flex-col gap-1 text-xs xs:text-sm'>
                {footerPages.map((page, index) => (
                  <Link
                    href={page.url}
                    key={index}
                    title={`Link to ${page.name}`}
                    className=''
                  >
                    {page.name}
                  </Link>
                ))}
              </span>
            </div>
          </div>

          <div className='flex w-fit flex-col items-center gap-4 sm:gap-8'>
            <Link
              href='/'
              title='Link to homepage'
              className='hidden h-12 w-12 justify-center sm:flex sm:h-16 sm:w-16'
            >
              <Image
                src={Logo}
                alt='NgwoRocks Logo'
                title='NgwoRocks Logo'
                className='h-full w-auto'
                width={64}
                height={64}
              />
            </Link>
            <span className='-mt-6 ml-[2%] flex gap-4 xs:ml-[30%] sm:ml-0 sm:mt-0'>
              <Image
                src={getOnAppStore}
                alt='Get on app store badge'
                title='Get on app store badge'
                className='h-6 w-auto rounded-md border border-light'
                width={110}
                height={40}
              />
              <Image
                src={getOnPlayStore}
                alt='Get on play store badge'
                title='Get on play store store badge'
                className='h-6 w-auto rounded-md border border-light'
                width={110}
                height={40}
              />
            </span>
          </div>
        </div>
        <div className='flex flex-col justify-between text-gray sm:flex-row '>
          <p className='mt-8  text-center text-xs font-thin text-gray xs:text-sm sm:text-left'>
            © {currentYear} Ngworocks. All rights reserved.
          </p>
          <p className='mt-8 text-center text-xs font-thin text-gray xs:text-sm sm:text-left'>
            Built with care by&nbsp;
            <a
              aria-label='Software Developer (Christian Onoh) profile link'
              title='Software Developer (Christian Onoh) profile link'
              target='_blank'
              className='font-semibold text-accent dark:text-accent-dark'
              rel='noopener noreferrer'
              href='https://christianonoh.vercel.app/'
            >
              Christian Onoh
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
