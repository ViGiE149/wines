import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Wine',
  description: 'Welcome to "My Wines" - the ultimate solution for wine enthusiasts to manage and savor their favorite vintages with ease. Our comprehensive wine app empowers users to effortlessly input, organize, and update their wine collection while offering a seamless user experience from start to finish',
  icons:""
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
