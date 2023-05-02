import Image from 'next/image';
import React from 'react'

function BenefitCard({action}) {
    const {title, body, icon} = action;
  return (
    <article className='card text-white bg-black/10 border border-[#F5D544] flex flex-col items-center gap-4 p-8 py-12'>
      <Image width={100} height={100} src={icon} alt={title} />
      <h3 className='font-bold text-xl text-center'>{title}</h3>
      <p className='text-center'>{body}</p>
    </article>
  );
}

export default BenefitCard
