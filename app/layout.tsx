import type { Metadata } from 'next'
import { Poppins, Quicksand, Comfortaa } from 'next/font/google'
import WhatsAppButton from '@/components/whatsapp-button'
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

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-comfortaa',
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
    <html lang="pt-BR" className={`${poppins.variable} ${quicksand.variable} ${comfortaa.variable}`}>
      <body className={`${poppins.className} font-sans`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
