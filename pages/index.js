import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-4 md:p-12 ${inter.className}`}
    >
      <NavBar />
    </div>
  )
}
