import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero';
import About from '@/components/About';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className} relative`}>
      <NavBar />
      <div className='flex min-h-screen pt-[calc(100vh)-200px] flex-col items-center justify-between bg-gray-50'>
        <Hero />
      </div>
      <About />
    </div>
  );
}
