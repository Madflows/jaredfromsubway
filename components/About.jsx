import Image from 'next/image';
import React from 'react';
import {GiMoebiusStar} from "react-icons/gi";

function About() {
  return (
    <section
      id='about'
      className='overflow-hidden  px-8 md:px-12 lg:px-16 lg:px-24 py-12'
    >
      <div
        className='sm:grid items-center sm:grid-cols-2 p-8 md:p-16 shadow-accent rounded-[4px] bg-[#DB6A00]'
      >
        <div className='flex flex-col gap-8 text-left'>
          <h2 className='font-bold text-2xl md:text-4xl text-lightGreen'>
            JaredFromSubway
          </h2>
          <p className='text-lg text-white max-w-lg'>
            Meb Bot is a decentralized application that provides a fair and
            transparent mechanism for extracting miner-extractable value (MEV)
            on the Etherum blockchain. By maximizing your potential for earning
            MEV, JaredFromSubway is the Key to unlocking the full power od decentralized
            finance (Defi)
          </p>
          <button className='py-4 px-8 rounded-sm w-fit text-sm bg-lightGreen shadow-button text-white font-bold'>
            Buy JaredFromSubway Coin
          </button>
        </div>
        <div className='p-4 hidden md:flex items-center justify-center'>
          <Image
            alt='jared'
            src='/assets/logo.png'
            width={368}
            height={368}
            className='min-h-56 w-full max-w-lg rounded-md object-cover sm:h-full'
          />
        </div>
      </div>
    </section>
  );
}

export default About
