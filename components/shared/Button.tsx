import { cx } from '@/utils'
import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  href: string
  text: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({ href, text, className = '' }) => {
  const isExternal = href.startsWith('http') || href.startsWith('https')

  return isExternal ? (
    <a
      href={href}
      aria-label={text}
      target='_blank'
      rel='noopener noreferrer'
      title={`${text} button`}
      className={cx(
        'mx-auto block w-max rounded-full border border-dark bg-dark px-4 py-1.5 text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-dark dark:border-light dark:bg-transparent dark:hover:bg-light dark:hover:text-dark',
        className
      )}
    >
      {text}
    </a>
  ) : (
    <Link
      href={href}
      aria-label={text}
      title={`${text} button`}
      className={cx(
        'mx-auto block w-max rounded-full border border-dark bg-dark px-4 py-1.5 text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-dark dark:border-light dark:bg-transparent dark:hover:bg-light dark:hover:text-dark',
        className
      )}
    >
      {text}
    </Link>
  )
}

export default Button
