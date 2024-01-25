import bonfire from '@/public/images/bonfire.webp'
import hiking from '@/public/images/hiking.webp'
import carnival from '@/public/images/carnival.webp'
import streaming from '@/public/images/streaming.webp'
import tours from '@/public/images/tours.webp'

export const socials = [
  {
    name: 'twitter',
    url: '/icons/twitter.svg'
  },
  {
    name: 'linkedin',
    url: '/icons/linkedin.svg'
  },
  {
    name: 'instagram',
    url: '/icons/instagram.svg'
  },
  {
    name: 'facebook',
    url: '/icons/facebook.svg'
  }
]

export const footerPages = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Contact',
    url: '/contact'
  },
  {
    name: 'Blog',
    url: '/blog'
  },
  {
    name: 'Achievements',
    url: '/#achievements'
  }
]

export const achievements = [
  {
    title: 'Location Discovered',
    stat: '50+'
  },
  {
    title: 'Covered on foot',
    stat: '500+ ml'
  },
  {
    title: 'Location Discovered',
    stat: '50+'
  },
  {
    title: 'Location Discovered',
    stat: '50+'
  },
  {
    title: 'Covered on foot',
    stat: '500+ ml'
  },
  {
    title: 'Location Discovered',
    stat: '50+'
  }
]

export const navLinks1 = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Services',
    url: '/#services'
  }
]

export const navLinks2 = [
  {
    name: 'Blog',
    url: '/blog'
  }
]

export const mobileNavLinks = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Services',
    url: '/#services'
  },
  {
    name: 'Contact',
    url: '/contact'
  }
]
export type ServiceType = {
  title: string
  img: any
  slug: string
  alt: string
}
export const services: ServiceType[] = [
  {
    title: 'Hiking',
    img: hiking,
    slug: 'hiking',
    alt: 'Man hiking'
  },
  {
    title: 'Event Streaming',
    img: streaming,
    alt: 'Man smiling when videographing an event',
    slug: 'event-streaming'
  },
  {
    title: 'Bonfire',
    img: bonfire,
    alt: 'Bonfire at night',
    slug: 'bonfire'
  },
  {
    title: 'Unity Walk Carnival',
    img: carnival,
    alt: 'Ladies in green costumes at carnival',
    slug: 'unity-walk-carnival'
  },
  {
    title: 'Tours',
    img: tours,
    alt: 'Lady sitting in car trunk reading a map',
    slug: 'tours'
  }
]
