import React from 'react'

function Hero() {
  return (
    <section className='overflow-hidden bg-gray-50  sm:grid sm:grid-cols-2'>
      <div className='p-8 md:p-12 lg:px-16 lg:py-24 pt-[20vh] flex items-center'>
        <div className='mx-auto max-w-xl text-left'>
          <h2 className='text-2xl font-bold text-gray-900  md:text-3xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>
          <p className='hidden text-gray-500  md:mt-4 md:block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className='mt-4 md:mt-8'>
            <a
              href='#'
              className='inline-block rounded bg-primary/90 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary focus:outline-none focus:ring focus:ring-yellow-400'
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <img
        alt='Student'
        src='https://pbs.twimg.com/media/Fua6YvLWIAIik9k?format=png&name=small'
        className='h-56 w-full object-cover sm:h-full'
      />
    </section>
  );
}

export default Hero
