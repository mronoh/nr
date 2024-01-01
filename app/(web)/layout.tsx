import WantATour from '@/components/shared/WantATour'
import Footer from '../../components/footer'
import Header from '@/components/header'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { token } from '@/sanity/lib/fetch'
import Script from 'next/script'


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
    <div>
      {/* <Script id='theme' strategy='beforeInteractive'>
        {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }`}
      </Script> */}
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
