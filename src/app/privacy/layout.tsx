import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - ADH Automotive',
    default: 'ADH Automotive - Car Repair in Digbeth, Birmingham.',
  },
  description:
    'Insert website description here',
}

export default function Privacy({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
