'use client'

import Logo from '@/public/icons/ngworocks_logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'
import { cx } from '@/utils'
import { useScrollPosition } from '../hooks'
import { usePathname } from 'next/navigation'
import { mobileNavLinks, navLinks1, navLinks2 } from '@/constants'

const Header = () => {
  const [toggled, setToggled] = useState(false)
  const scrollPosition = useScrollPosition()
  const pathname = usePathname()

  return (
    <header
      className={cx(
        scrollPosition > 0 ? 'fixed top-0 shadow ' : 'shadow-none',
        'z-30 block w-full bg-white py-6 transition-all duration-200 ease-in-out'
      )}
    >
      <nav className='relative mx-auto flex max-w-7xl items-center justify-between px-5 text-base font-semibold  capitalize text-dark sm:px-10'>
        <Link
          href='/'
          className='flex h-full justify-center lg:absolute lg:right-1/2 lg:translate-x-1/2'
        >
          <Image src={Logo} alt='Christian Onoh' width={60} height={60} />
        </Link>

        {/* Desktop Navigation  */}
        <div className='hidden items-center justify-between gap-4 lg:flex lg:gap-6'>
          {navLinks1.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={cx(
                pathname === link.url ? 'bg-accent/10' : 'text-dark',
                'rounded-lg px-4 py-1.5 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-accent/10'
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
                pathname === link.url ? 'bg-accent/10' : 'text-dark',
                'rounded-lg px-4 py-1.5 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-accent/10'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href='/'
            className='rounded-lg border border-dark bg-dark px-4 py-2 text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-dark'
          >
            get in touch
          </Link>
        </div>

        {/* Mobile Navigation  */}
        <div className='flex items-center gap-6 lg:hidden'>
          <Link
            href='/blog'
            className='rounded-lg px-4 py-1.5 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-accent/10'
          >
            blog
          </Link>
          <div className='z-50 rounded-full text-dark hover:bg-accent/10'>
            <Hamburger
              toggle={setToggled}
              toggled={toggled}
              size={27}
              label='menu'
            />
          </div>
          <div
            className={cx(
              toggled ? 'origin-top scale-y-100' : 'origin-top scale-y-0',
              'absolute left-0 top-0 z-30 flex h-[384px] w-full transform flex-col justify-center bg-white shadow-sm transition-transform duration-300 ease-in-out lg:hidden'
            )}
          >
            <div className='mx-auto flex h-full w-full max-w-[287px] flex-col items-center gap-4 px-8 py-32 text-base font-semibold capitalize text-black'>
              {mobileNavLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className='rounded-lg  px-4 py-1.5 text-center transition-all duration-200 ease-in-out hover:scale-105 hover:bg-accent/10'
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
