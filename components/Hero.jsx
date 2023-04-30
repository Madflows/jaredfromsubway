import React from 'react'

function Hero() {
  return (
    <section className='overflow-hidden bg-gray-50  sm:grid pt-[10vh] md:pt-[20vh] sm:grid-cols-2'>
      <div className='p-8 md:p-12 lg:px-16 lg:py-24  flex items-center'>
        <div className='mx-auto max-w-xl text-left'>
          <h2 className='text-2xl font-bold text-gray-900  md:text-3xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>
          <p className=' text-gray-500 mt-4 '>
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
      <div className='flex items-center justify-center'>
        <img
          alt='Student'
          src='https://pbs.twimg.com/media/Fua6YvLWIAIik9k?format=png&name=small'
          className='min-h-56 w-[90vw] max-w-sm rounded-md object-cover sm:h-full'
        />
      </div>
    </section>
  );
}

export default Hero
