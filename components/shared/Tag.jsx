import { cx } from "@/utils"
import Link from "next/link"


const Tag = ({ link='#', title, ...props }) => {
  return (
    <Link href={link}
      className={cx('inline-block px-10 py-3 font-semibold capitalize border rounded-full border-light text-light bg-dark/50',
      'hover:scale-105 transition-all duration-200 ease-in-out border-2',
      props.className )}>
      {title}
    </Link>
  )
}

export default Tag
