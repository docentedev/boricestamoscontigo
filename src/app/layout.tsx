import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Boric estamos contigo',
  description: 'Sitio web creado por adherentes del gobierno de Gabriel Boric Font',
  openGraph: {
    url: 'https://www.boricestamoscontigo.cl/',
    images: ['https://www.boricestamoscontigo.cl/og-image.png'],
    type: 'website',
    description: 'Sitio web creado por adherentes del gobierno de Gabriel Boric Font',
    siteName: 'Boric estamos contigo',
    title: 'Boric estamos contigo',
  },
  verification: {
    google: 'l8qnn6nFNEnrLlu5etFT2h2tR6LJ3-OEaUpHxACK3Bs',
  },
  themeColor: '#f0f0f0',
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
