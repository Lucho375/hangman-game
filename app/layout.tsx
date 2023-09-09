import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'

const roboto = Roboto({ subsets: ['cyrillic'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Hangman Game',
  description: 'A hangman game with NextJS'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-gradient-to-tl from-red-500 via-cyan-500 to-cyan-700 text-white flex flex-col min-h-screen`}
      >
        <main className="flex-grow p-5">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
