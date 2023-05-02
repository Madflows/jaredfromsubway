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
      <div className={`${inter.className} relative bg-[#E38B39]`}>
        <NavBar />
        <div className='flex min-h-screen pt-[calc(100vh)-200px] flex-col items-center justify-between bg-[url(/assets/desktop-bg.png)] bg-no-repeat bg-cover bg-center relative'>
          <Hero />
        </div>
        <About />
        <Tokenomics />
        <div className='w-full p-4 py-8 flex items-center justify-center'>
          <iframe
            width={400}
            height={690}
            frameBorder={0}
            allow='clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *'
            src='https://flooz.trade/embed/trade?swapDisabled=false&swapLockToToken=false&onRampDisabled=true&onRampAsDefault=true&onRampDefaultAmount=200&onRampTokenAddress=eth&stakeDisabled=true&network=eth&lightMode=true&primaryColor=%2316a34a&backgroundColor=transparent&roundedCorners=10&padding=20&refId=VVKhTh'
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
