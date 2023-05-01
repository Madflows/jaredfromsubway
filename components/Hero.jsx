import Link from 'next/link';
import React from 'react'

function Hero() {
  return (
    <section id='home' className='overflow-hidden bg-transparent relative  flex flex-col items-center gap-8 pt-[10vh] md:pt-[20vh]  w-full'>
      <div className='flex flex-col items-center justify-center pt-14'>
        <h2 className='text-5xl md:text-[82px] leading-[100%] w-[90vw] max-w-7xl uppercase text-white font-black text-center '>
          Maximize your Defi Potential <span className='text-lightGreen'>with MEV Bot</span>
        </h2>
      </div>
      <div className='flex items-center justify-center'>
        <img
          alt='Student'
          src='/assets/logo.png'
          className='min-h-56 w-[90vw] max-w-sm rounded-md object-cover sm:h-full'
        />
      </div>
    </section>
  );
}

export default Hero
