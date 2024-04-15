import type { Metadata } from 'next'
import './globals.css'
import { Livvic } from 'next/font/google'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const livvic = Livvic({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(livvic.className, 'bg-midnightGreen text-white')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
