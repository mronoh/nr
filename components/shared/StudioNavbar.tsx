import { IoMdArrowRoundBack } from 'react-icons/io'
import { SiGoogledocs } from 'react-icons/si'
import Link from 'next/link'

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className='flex justify-between'>
        <Link
          href='/'
          className='m-1 flex w-fit items-center gap-1 rounded bg-light/10 p-1 text-sm text-accent-dark'
        >
          <IoMdArrowRoundBack className='text-base' />
          Back to Website
        </Link>
        <a
          href='https://nrblogdocs.my.canva.site/'
          target='_blank'
          rel='noopener noreferrer'
          className='m-1 flex w-fit items-center gap-1 rounded bg-light/10 p-1 text-sm text-accent-dark'
        >
          <SiGoogledocs className='text-base' />
          Blog Documentation
        </a>
      </div>

      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
