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

export default function IndexLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={cx(
        mont.variable,
        'relative overflow-x-hidden bg-bgColor font-mont'
      )}
    >
      <Header />
      {children}
      <WantATour />
      <Footer />
    </div>
  )
}
