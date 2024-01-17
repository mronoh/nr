'use client'

import Logo from '@/public/icons/ngworocks_logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cx } from '@/utils'
import { usePathname } from 'next/navigation'
import { mobileNavLinks, navLinks1, navLinks2 } from '@/constants'
import { PreviewBanner } from '../preview/PreviewBanner'
import { useThemeSwitch } from '../hooks/useThemeSwitch'
import { Hamburger, ThemeButton } from '../icons'
import Button from '../shared/Button'
import { siteMetadata } from '@/utils/siteMetaData'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'

const Header = ({ isDraftMode }: { isDraftMode: boolean }) => {
  const [mode, setMode] = useThemeSwitch()
  const [toggled, setToggled] = useState(false)
  const pathname = usePathname()
  const [isSticky, setSticky] = useState(true)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop && lastScrollTop > 100) {
        // downscroll
        setSticky(false)
      } else {
        // upscroll
        setSticky(true)
      }
      setLastScrollTop(st <= 0 ? 0 : st)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])

  const handleToggle = () => {
    setToggled(prev => {
      return !prev
    })
    document.body.classList.toggle('overflow-clip')
  }

  return (
    <header
      className={cx(
        isSticky
          ? 'sticky top-0 translate-y-0 transform shadow'
          : '-translate-y-full transform',
        'relative z-30 block w-full bg-light/80 backdrop-blur-lg transition-transform duration-500 ease-in-out dark:bg-bgdark/80'
      )}
    >
      {isDraftMode && <PreviewBanner />}
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-base font-semibold capitalize  text-dark dark:text-light xs:py-6 sm:px-10'>
        <Link
          href='/'
          title='Link to homepage'
          onClick={toggled ? handleToggle : () => {}}
          className='z-50 flex h-12 w-12 justify-center lg:absolute lg:right-1/2 lg:h-16 lg:w-16 lg:translate-x-1/2'
        >
          <Image
            src={Logo}
            alt='NgwoRocks logo image'
            title='NgwoRocks logo image'
            width={64}
            height={64}
            priority
          />
        </Link>

        {/* Desktop Navigation  */}
        <div className='hidden items-center justify-between gap-4 lg:flex lg:gap-6'>
          {navLinks1.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              title={`Link to ${link.name}`}
              className={cx(
                pathname === link.url
                  ? 'bg-accent/10 dark:bg-accent-dark/10'
                  : 'text-dark dark:text-light',
                'rounded-full px-4 py-1.5 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-accent/10'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          className={`hidden items-center justify-between gap-4 lg:flex lg:gap-6`}
        >
          {navLinks2.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              title={`Link to ${link.name}`}
              className={cx(
                pathname === link.url
                  ? 'bg-accent/10 dark:bg-accent-dark/10'
                  : 'text-dark dark:text-light',
                'rounded-full px-4 py-1.5 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-accent/10'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button text='get in touch' href='/contact' />
          <span className='flex gap-2'>
            <a
              aria-label='NgwoRocks facebook profile link'
              title='NgwoRocks facebook profile link'
              target='_blank'
              rel='noopener noreferrer'
              href={siteMetadata.social.facebook}
              className='text-xl text-gray-dark hover:text-accent dark:text-gray dark:hover:text-accent-dark '
            >
              <FaFacebookF />
            </a>
            <a
              aria-label='NgwoRocks instagram profile link'
              title='NgwoRocks instagram profile link'
              target='_blank'
              rel='noopener noreferrer'
              href={siteMetadata.social.instagram}
              className='text-xl text-gray-dark hover:text-accent dark:text-gray dark:hover:text-accent-dark'
            >
              <FaInstagram />
            </a>
            <a
              aria-label='NgwoRocks Tiktok profile link'
              title='NgwoRocks Tiktok profile link'
              target='_blank'
              rel='noopener noreferrer'
              href={siteMetadata.social.tiktok}
              className='text-xl text-gray-dark hover:text-accent dark:text-gray dark:hover:text-accent-dark'
            >
              <FaTiktok />
            </a>
          </span>
          <ThemeButton
            mode={mode}
            setMode={setMode}
            suppressHydrationWarning={true}
          />
        </div>

        {/* Mobile Navigation  */}
        <div className='flex items-center gap-3 xs:gap-6 lg:hidden'>
          <Link
            href='/blog'
            title='Link to Blogs Page'
            onClick={toggled ? handleToggle : () => {}}
            className='z-50 rounded-full px-4 py-1.5 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-accent/10'
          >
            blog
          </Link>
          <ThemeButton mode={mode} setMode={setMode} />
          <Hamburger handleToggle={handleToggle} toggled={toggled} />
          {toggled && (
            <div className='absolute inset-0 h-screen w-full bg-light/50 dark:bg-black/50 lg:hidden' />
          )}
          <div
            className={cx(
              toggled ? 'origin-top scale-y-100' : 'origin-top scale-y-0',
              'height__screen absolute left-0 top-0 z-30 flex w-full transform flex-col justify-center bg-white shadow-sm transition-transform duration-300 ease-in-out dark:bg-bgdark lg:hidden'
            )}
          >
            <div className='mx-auto flex h-full w-full flex-col items-center justify-between gap-8 px-8 py-32 font-semibold capitalize text-dark dark:text-light'>
              <div className='flex flex-col gap-4 pt-10 text-xl sm:text-2xl'>
                {mobileNavLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    title={`Link to ${link.name}`}
                    onClick={handleToggle}
                    className='rounded-full  px-4 py-1.5 text-center transition-all duration-200 ease-in-out hover:scale-105 hover:bg-accent/10 dark:hover:bg-accent-dark/10 '
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div>
                <h4 className='mb-4 text-center text-base xs:text-xl'>
                  Follow our socials:
                </h4>
                <span className='flex gap-4 text-xl xs:text-3xl'>
                  <a
                    aria-label='NgwoRocks facebook profile link'
                    title='NgwoRocks facebook profile link'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={siteMetadata.social.facebook}
                    className=' text-gray-dark hover:text-accent dark:text-gray dark:hover:text-accent-dark '
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    aria-label='NgwoRocks instagram profile link'
                    title='NgwoRocks instagram profile link'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={siteMetadata.social.instagram}
                    className=' text-gray-dark hover:text-accent dark:text-gray dark:hover:text-accent-dark'
                  >
                    <FaInstagram />
                  </a>
                  <a
                    aria-label='NgwoRocks Tiktok profile link'
                    title='NgwoRocks Tiktok profile link'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={siteMetadata.social.tiktok}
                    className=' text-gray-dark hover:text-accent dark:text-gray dark:hover:text-accent-dark'
                  >
                    <FaTiktok />
                  </a>
                  <a
                    aria-label='NgwoRocks Twitter profile link'
                    title='NgwoRocks Twitter profile link'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`mailto:${siteMetadata.social.twitter}`}
                    className='text-gray-dark hover:text-accent dark:text-gray dark:hover:text-accent-dark'
                  >
                    <BsTwitterX />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
