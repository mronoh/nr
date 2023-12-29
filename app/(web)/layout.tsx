import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import WantATour from '@/components/shared/WantATour'
import Footer from '../../components/footer'
import Header from '@/components/header'
import { cx } from '@/utils'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { token } from '@/sanity/lib/fetch'
import Script from 'next/script'

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

const PreviewProvider = dynamic(
  () => import('@/components/preview/PreviewProvider')
)

export default function IndexLayout({
  children
}: {
  children: React.ReactNode
}) {
  const draftModeEnabled = draftMode().isEnabled

  const layout = (
    <div className={cx(mont.variable, 'relative min-h-screen font-mont')}>
      <Script id='theme' strategy='beforeInteractive'>
        {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }`}
      </Script>
      <Header isDraftMode={draftModeEnabled} />
      {children}
      <WantATour />
      <Footer />
    </div>
  )
  if (draftModeEnabled && token) {
    return <PreviewProvider token={token!}>{layout}</PreviewProvider>
  }

  return layout
}
