const remoteUrl = `https://ngworocks.com`
const localUrl = `http://localhost:3000`
const isDevelopment = process.env.NODE_ENV === 'development'
const siteUrl = isDevelopment ? localUrl : remoteUrl
export const siteMetadata = {
  title: 'NgwoRocks',
  author: 'NgwoRocks',
  headerTitle: 'Ngworocks',
  description:
    'Your platform for promoting untapped tourism potential, culture, and values.',
  language: 'en-us',
  theme: 'system',
  siteUrl: siteUrl,
  keywords: [],
  siteLogo: '/favicon/icon-192x192.png',
  socialBanner: '/images/socialCover.webp', // add social banner in the public folder
  email: 'chibyk5000@gmail.com',
  github: 'https://github.com/christianonoh',
  facebook: 'https://web.facebook.com/NgwoROCK',
  locale: 'en-US'
}
