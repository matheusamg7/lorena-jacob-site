import type { Metadata } from 'next'
import { Poppins, Quicksand } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
})

export const metadata: Metadata = {
  title: 'Lorena Jacob - Terapeuta Infantil',
  description: 'Terapeuta Infantil especializada em desenvolvimento infantil',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${quicksand.variable}`}>
      <body className={`${poppins.className} font-sans`}>{children}</body>
    </html>
  )
}
