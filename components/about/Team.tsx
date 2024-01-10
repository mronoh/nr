import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { BsTwitterX } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa'

const Team = ({ team }: any) => {
  return (
    <div className='flex flex-col rounded-2xl border p-2 text-dark dark:text-light'>
      <div className='relative col-span-4 h-full overflow-hidden rounded-xl'>
        {team?.image && (
          <Image
            src={urlForImage(team.image.image).url()}
            alt={team.image.alt ?? `Portrait image of ${team?.title}`}
            title={team.image.alt ?? `Portrait image of ${team?.title}`}
            placeholder='blur'
            blurDataURL={team.image.lqip}
            width={team.image.dimensions?.width ?? 1200}
            height={team.image.dimensions?.height ?? 630}
            className='aspect-[4/3] h-full w-full object-cover object-center transition-all duration-200 ease-in-out hover:scale-105'
          />
        )}
        <span className='absolute bottom-0 right-0 flex min-w-max justify-between gap-4 rounded-tl-xl bg-black/70 p-2 text-base'>
          {team?.socialLinks?.twitter && (
            <a
              aria-label={`${team.name} Twitter Profile`}
              target='_blank'
              title={`Link to ${team.name} Twitter Profile`}
              rel='noopener noreferrer'
              href={team.socialLinks.twitter}
              className='text-white hover:text-accent dark:text-gray dark:hover:text-accent-dark'
            >
              <BsTwitterX />
            </a>
          )}
          {team?.socialLinks?.linkedin && (
            <a
              aria-label={`${team.name} LinkedIn Profile`}
              title={`Link to ${team.name} LinkedIn Profile`}
              target='_blank'
              rel='noopener noreferrer'
              href={team.socialLinks.linkedin}
              className='text-white hover:text-accent dark:text-gray dark:hover:text-accent-dark'
            >
              <FaLinkedinIn />
            </a>
          )}
          {team?.socialLinks?.facebook && (
            <a
              aria-label={`${team.name} Facebook Profile`}
              title={`Link to ${team.name} Facebook Profile`}
              target='_blank'
              rel='noopener noreferrer'
              href={team.socialLinks.facebook}
              className='text-white hover:text-accent dark:text-gray dark:hover:text-accent-dark'
            >
              <FaFacebookF />
            </a>
          )}
        </span>
      </div>
      <div className='mt-4 flex w-full flex-col'>
        <div className='flex items-center justify-between'>
          {team?.name && (
            <span className='text-base font-semibold uppercase text-accent dark:text-accent-dark'>
              {team.name}
            </span>
          )}
        </div>
        <p className='mt-1 flex items-center gap-2 text-sm text-gray-dark dark:text-gray-light/50'>
          Coordinator
        </p>
      </div>
    </div>
  )
}

export default Team
