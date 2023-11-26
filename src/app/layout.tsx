import type { Metadata } from 'next'
import { montserrat } from './ui/fonts'
import './globals.css'


export const metadata: Metadata = {
  title: 'Business - Webflow template in NextJS',
  description: 'Business - Webflow HTML website template in NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
