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
    document.body.classList.toggle('overflow-clip')
    setToggled(prev => {
      return !prev
    })
  }

  return (
    <header
      className={cx(
        isSticky
          ? 'sticky top-0 translate-y-0 transform shadow'
          : '-translate-y-full transform',
        'dark:bg-bgdark/80 relative z-30 block w-full bg-light/80 backdrop-blur-lg transition-transform duration-500 ease-in-out'
      )}
    >
      {isDraftMode && <PreviewBanner />}
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-base font-semibold capitalize  text-dark dark:text-light xs:py-6 sm:px-10'>
        <Link
          href='/'
          onClick={toggled ? handleToggle : () => {}}
          className='z-50 flex h-12 w-12 justify-center lg:absolute lg:right-1/2 lg:h-16 lg:w-16 lg:translate-x-1/2'
        >
          <Image
            src={Logo}
            alt='Christian Onoh'
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
              className={cx(
                pathname === link.url
                  ? 'dark:bg-accent-dark/10 bg-accent/10'
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
              className={cx(
                pathname === link.url
                  ? 'dark:bg-accent-dark/10 bg-accent/10'
                  : 'text-dark dark:text-light',
                'rounded-full px-4 py-1.5 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-accent/10'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button text='get in touch' href='/contact' />
          <ThemeButton mode={mode} setMode={setMode} />
        </div>

        {/* Mobile Navigation  */}
        <div className='flex items-center gap-3 xs:gap-6 lg:hidden'>
          <Link
            href='/blog'
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
              'dark:bg-bgdark absolute left-0 top-0 z-30 flex h-[384px] w-full transform flex-col justify-center bg-white shadow-sm transition-transform duration-300 ease-in-out lg:hidden'
            )}
          >
            <div className='mx-auto flex h-full w-full max-w-[287px] flex-col items-center gap-4 px-8 py-32 text-base font-semibold capitalize text-dark dark:text-light'>
              {mobileNavLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  onClick={handleToggle}
                  className='dark:hover:bg-accent-dark/10  rounded-full px-4 py-1.5 text-center transition-all duration-200 ease-in-out hover:scale-105 hover:bg-accent/10 '
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
