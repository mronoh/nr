import { cx } from '@/utils'
import Link from 'next/link'

const Tag = ({ link = '#', title, ...props }) => {
  return (
    <Link
      href={link}
      title={`Button to ${title} blogs`}
      className={cx(
        'inline-block rounded-lg bg-dark px-4 py-1 font-semibold capitalize text-accent-dark',
        'border- transition-all duration-200 ease-in-out hover:scale-105',
        props.className
      )}
    >
      {title}
    </Link>
  )
}

export default Tag
