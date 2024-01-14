import Image from 'next/image'
import LogoSrc from '@/public/icons/ngworocks_logo.svg'

const Logo = () => {
  return (
    <div className='flex items-center gap-2 text-2xl font-bold'>
      <Image
        src={LogoSrc}
        alt='NgwoRocks logo image'
        title='NgwoRocks logo image'
        width={40}
        height={40}
        priority
      />
      Admin
    </div>
  )
}

export default Logo
