import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tokenomics from '@/components/Tokenomics';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className} relative`}>
      <NavBar />
      <div className='flex min-h-screen pt-[calc(100vh)-200px] flex-col items-center justify-between bg-[url(/assets/hero-bg.avif)] bg-no-repeat bg-cover relative'>
        <span className='absolute inset-0 bg-white/20' />
        <Hero />
      </div>
      <About />
      <Tokenomics />
      <Footer />
    </div>
  );
}
