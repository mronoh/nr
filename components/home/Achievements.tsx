import { achievements } from '@/constants'
import React from 'react'

const Achievements = () => {
  return (
    <section className='px-5 sm:px-16 py-24 max-w-7xl mx-auto w-full'>
      <div>
      <h2 className="text-dark text-4xl mb-12 font-semibold">Achievements</h2>
      <div className="relative h-24 overflow-x-hidden">
        <div className='flex gap-16 whitespace-nowrap animate-marquee  absolute top-2 bottom-2 pr-8'>
          {
            achievements.map((achievement, index) => (
              <div key={index} className='flex flex-col items-center justify-center gap-2 text-dark'>
                <span className='text-5xl font-bold capitalize  text-accent'>{achievement.stat}</span>
                <span className='text-lg font-semibold capitalize'>{achievement.title}</span>
              </div>
            ))
          }
        </div>
        <div className='flex gap-16 whitespace-nowrap animate-marquee2 absolute top-2 bottom-2 pr-8'>
          {
            achievements.map((achievement, index) => (
              <div key={index} className='flex flex-col items-center justify-center gap-2 text-dark'>
                <span className='text-5xl font-bold capitalize text-accent'>{achievement.stat}</span>
                <span className='text-lg font-semibold capitalize'>{achievement.title}</span>
              </div>
            ))
          }
        </div>
        <div className="absolute top-0 bottom-0 left-0 z-10 w-1/4 h-full from-bgColor bg-gradient-to-r to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 z-10 w-1/4 h-full from-bgColor bg-gradient-to-l to-transparent" />
      </div>
      </div>
    </section>
  )
}

export default Achievements
