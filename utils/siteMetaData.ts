const remoteUrl = `https://nr-kappa.vercel.app`
const localUrl = `http://localhost:3000`
const isDevelopment = process.env.NODE_ENV === 'development'
const siteUrl = isDevelopment ? localUrl : remoteUrl

const seoKeywords = [
  'Ngworocks',
  'Cultural Events',
  'Tourism Hub',
  'Community Engagement',
  'Heritage Celebration',
  'Vibrant Exploration',
  'Young Creative Minds',
  'Ngwo Startups',
  'Regional Inspiration',
  'Dynamic Endeavor',
  'Ngwo Community',
  'Ngwo',
  'Pine Forest'
]
export const siteMetadata = {
  title: 'NgwoRocks',
  author: 'NgwoRocks',
  headerTitle: 'Ngworocks',
  description:
    'Discover Ngworocks: A vibrant cultural and tourism hub. Join us on our dynamic journey, embracing heritage and inspiring startups. Your platform for promoting untapped tourism potential, culture, and values.',
  language: 'en-us',
  theme: 'system',
  siteUrl: siteUrl,
  keywords: seoKeywords,
  siteLogo: '/favicon/icon-192x192.png',
  socialBanner: '/images/socialCover.webp',
  email: 'chibyk5000@gmail.com',
  social: {
    instagram: 'https://instagram.com/ngworocks',
    facebook: 'https://web.facebook.com/NgwoROCK',
    twitter: 'https://twitter.com/ngworocks',
    tiktok: 'https://www.tiktok.com/@ngworocks',
    mail: 'ngworocks@gmail.com'
  },
  locale: 'en-US'
}
