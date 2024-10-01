import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { Analytics } from "@vercel/analytics/react"

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - ADH Automotive',
    default: 'ADH Automotive - Expert Vehicle Service & Repair in Digbeth, Birmingham City Centre',
  },
  description:
    'ADH Automotive offers top-notch vehicle service and repair in Digbeth and Birmingham City Centre. With over 10 years of experience, we provide professional and competitive auto services to keep your vehicle in prime condition. Discover our comprehensive range of services and get in touch today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased scroll-smooth', inter.variable)}>
      
      <body>{children}
        <Analytics />
      </body>
    </html>
  )
}
