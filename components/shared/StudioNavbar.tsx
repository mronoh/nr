import { IoMdArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'

const StudioNavbar = (props: any) => {
  return (
    <div>
      <Link
        href='/'
        className='m-1 flex w-fit items-center gap-1 rounded bg-light/10 p-1 text-sm text-accent-dark'
      >
        <IoMdArrowRoundBack className='text-base' />
        Back to Website
      </Link>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
