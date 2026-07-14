import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Volterra Energy - Premium EV Charging Solutions',
  description: 'Revolutionizing electric vehicle charging with sustainable, innovative solutions for a greener future. Premium charging infrastructure for businesses and individuals.',
  keywords: 'EV charging, electric vehicle, sustainable energy, charging stations, green technology',
  authors: [{ name: 'Volterra Energy' }],
  openGraph: {
    title: 'Volterra Energy - Premium EV Charging Solutions',
    description: 'Revolutionary EV charging solutions for a sustainable future',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#22c55e',
  userScalable: true,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-white text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
