import { cx } from '@/utils'
import Link from 'next/link'

const Tag = ({ link = '#', title, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        'inline-block rounded-full border border-light bg-dark/50 px-10 py-3 font-semibold capitalize text-light',
        'border-2 transition-all duration-200 ease-in-out hover:scale-105',
        props.className
      )}
    >
      {title}
    </Link>
  )
}

export default Tag
