import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Bebas_Neue } from 'next/font/google'

import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['300', '400', '500', '600', '700'] })
const bebasNeue = Bebas_Neue({ subsets: ['latin'], variable: '--font-bebas', weight: '400' })

export const metadata: Metadata = {
  title: 'Hot Spot Cafe | Pizza, Burger & Broast',
  description: 'Experience the finest Pizza, Burgers, Broast, and fresh Juices at Hot Spot Cafe. Unbeatable deals and bold flavors in every bite.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${bebasNeue.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
