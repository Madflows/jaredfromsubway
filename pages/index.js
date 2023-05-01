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
    <>
    <title>Home - JaredFromSubway</title>
    <div className={`${inter.className} relative bg-[#304F55]`}>
      <NavBar />
      <div className='flex min-h-screen pt-[calc(100vh)-200px] flex-col items-center justify-between bg-[url(/assets/desktop-bg.png)] bg-no-repeat bg-cover relative'>
      
        <Hero />
      </div>
      <About />
      <Tokenomics />
      <Footer />
    </div>
    </>
  );
}
