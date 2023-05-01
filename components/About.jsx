import React from 'react';
import {GiMoebiusStar} from "react-icons/gi";

function About() {
  return (
    <section className='overflow-hidden bg-gray-50  sm:grid  sm:grid-cols-2 px-8 md:px-12 lg:px-16 py-12'>
      <div className='p-4 hidden md:flex items-center justify-center'>
        <img
          alt='Student'
          src='https://pbs.twimg.com/media/Fua6YvLWIAIik9k?format=png&name=small'
          className='min-h-56 w-full max-w-lg rounded-md object-cover sm:h-full'
        />
      </div>
      <div className='flex flex-col gap-4 text-left'>
        <h2 className='font-bold text-2xl md:text-4xl text-primary'>
          What is JaredFromSubway?
        </h2>
        <p className='text-lg text-primary'>
          JaredFromSubway is an ERC-20 token built on the Ethereum blockchain that is
          inspired by the popular meme-inspired cryptocurrency, Shiba Inu.
          However, instead of the regular Shiba Inu dog, JaredFromSubway is based on a
          fictional Shiba Inu dog named Floki that lives in the icy wilderness.
        </p>
        <div className='flex flex-col gap-2'>
          <div className='flex items-start gap-4'>
            <div className='min-w-[4rem] h-[4rem] rounded-full bg-red-400 text-white flex items-center justify-center'>
              <GiMoebiusStar className="text-3xl" />
            </div>
            <div>
              <p className='text-primary text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                dolore eius recusandae inventore sapiente rem saepe iusto.
                Reiciendis autem animi unde. Numquam minima totam error eum!
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <div className='min-w-[4rem] h-[4rem] rounded-full bg-emerald-400 text-white flex items-center justify-center'>
              <GiMoebiusStar className="text-3xl" />
            </div>
            <div>
              <p className='text-primary text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                dolore eius recusandae inventore sapiente rem saepe iusto.
                Reiciendis autem animi unde. Numquam minima totam error eum!
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <div className='min-w-[4rem] h-[4rem] rounded-full bg-sky-400 text-white flex items-center justify-center'>
              <GiMoebiusStar className="text-3xl" />
            </div>
            <div>
              <p className='text-primary text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                dolore eius recusandae inventore sapiente rem saepe iusto.
                Reiciendis autem animi unde. Numquam minima totam error eum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
