import { cx } from '@/utils'
import '../styles/globals.css'
import { Montserrat, Poppins } from 'next/font/google'
import { siteMetadata } from '@/utils/siteMetaData'
import { Metadata } from 'next'
import { setThemeBeforeLoad } from '@/utils/setThemeOnLoad'

type MyMetadata = Metadata & {
  url: string
}

export const metadata: MyMetadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title // a default is required when creating a template
  },
  description: siteMetadata.description,
  authors: { name: siteMetadata.author },
  url: siteMetadata.siteUrl,
  keywords: siteMetadata.keywords,
  publisher: siteMetadata.author,
  alternates: {
    canonical: siteMetadata.siteUrl
  },

  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      {
        url: siteMetadata.socialBanner,
        width: 800,
        height: 600,
        alt: siteMetadata.title
      },
      {
        url: siteMetadata.socialBanner,
        width: 1800,
        height: 1600,
        alt: siteMetadata.title
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner]
  }
}

const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setThemeBeforeLoad }} />
      </head>
      <body
        className={cx(
          mont.variable,
          poppins.variable,
          'relative min-h-screen bg-bglight font-poppins dark:bg-bgdark'
        )}
      >
        {children}
      </body>
    </html>
  )
}
