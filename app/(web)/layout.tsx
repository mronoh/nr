import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '/styles/globals.css'
import WantATour from '@/components/shared/WantATour'
import Footer from '../../components/footer'
import Header from '@/components/header'
import { cx } from '@/utils'

const inter = Montserrat({ subsets: ['latin'] })

const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'NgwoRocks',
  description: 'The city on a hill cannot be hidden',
  authors: {
    name: 'Christian Onoh',
    url: 'https://github.com/christianonoh'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/* <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </head> */}
      <body
        className={cx(
          mont.variable,
          'relative overflow-x-hidden bg-bgColor font-mont'
        )}
      >
        <Header />
        {children}
        <WantATour />
        <Footer />
      </body>
    </html>
  )
}
