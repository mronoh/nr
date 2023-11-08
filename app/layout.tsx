import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '/styles/globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NgwoRocks',
  description: 'The city on a hill cannot be hidden',
  authors: {
    name: 'Christian Onoh',
    url: 'https://github.com/christianonoh',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head> 
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
