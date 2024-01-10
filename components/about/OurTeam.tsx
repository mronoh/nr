import React from 'react'
import Team from './Team'
import { sanityFetch } from '@/sanity/lib/fetch'
import { teamQuery } from '@/sanity/lib/queries'
import { cx } from '@/utils'

const OurTeam = async () => {
  const theTeam = await sanityFetch<any>({
    query: teamQuery,
    tags: ['team']
  })
  return (
    theTeam.length > 0 && (
      <section className='mx-auto w-full max-w-7xl px-5 pt-24 sm:px-10'>
        <h2 className='mb- text-center text-3xl font-semibold text-dark  dark:text-light xs:text-4xl md:mb-12 lg:text-5xl'>
          Our Team
        </h2>
        <div className={cx('grid gap-16 py-8 sm:grid-cols-2 lg:grid-cols-3')}>
          {theTeam &&
            theTeam.map((team: any, index: number) => (
              <Team team={team} key={index} />
            ))}
        </div>
      </section>
    )
  )
}

export default OurTeam
