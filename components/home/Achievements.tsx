import { achievements } from '@/constants'
import React from 'react'

const Achievements = () => {
  return (
    <section
      id='achievements'
      className='mx-auto w-full max-w-7xl px-5 py-24 sm:px-10'
    >
      <div>
        <h2 className='mb-8 text-4xl font-semibold  text-dark dark:text-light md:mb-12 lg:text-5xl'>
          Achievements
        </h2>
        <div className='relative h-24 overflow-x-hidden'>
          <div className='absolute bottom-2 top-2 flex  animate-marquee gap-16 whitespace-nowrap pr-8'>
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center gap-2 '
              >
                <span className='dark:text-accent-dark text-5xl font-bold  capitalize text-accent'>
                  {achievement.stat}
                </span>
                <span className='text-lg font-semibold capitalize text-dark dark:text-light'>
                  {achievement.title}
                </span>
              </div>
            ))}
          </div>
          <div className='absolute bottom-2 top-2 flex animate-marquee2 gap-16 whitespace-nowrap pr-8'>
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center gap-2 text-dark dark:text-light'
              >
                <span className='dark:text-accent-dark text-5xl font-bold capitalize text-accent'>
                  {achievement.stat}
                </span>
                <span className='text-lg font-semibold capitalize'>
                  {achievement.title}
                </span>
              </div>
            ))}
          </div>
          <div className='from-bglight dark:from-bgdark absolute bottom-0 left-0 top-0 z-10 h-full w-1/4 bg-gradient-to-r to-transparent' />
          <div className='from-bglight dark:from-bgdark absolute bottom-0 right-0 top-0 z-10 h-full w-1/4 bg-gradient-to-l to-transparent' />
        </div>
      </div>
    </section>
  )
}

export default Achievements
