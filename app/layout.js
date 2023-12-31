import './globals.css'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import Navbar from './Navbar'
const montserrat = Montserrat({
  weight:['400','700'],
  subsets:['latin'],
  variable:"--fint-montserrat",
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-black mx-32 my-12`}>
      <Navbar />
      {children}
      </body>
    </html>
  )
}
