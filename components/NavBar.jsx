import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav className='p-8 md:py-4 lg:px-16 w-full bg-white fixed top-0'>
      <div className='w-full flex items-center justify-between'>
        <Link href={'/'}>JaredFromSubway</Link>
        <ul className='md:flex items-center gap-3 hidden'>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Tokenomics</Link>
          </li>
        </ul>
        <button className='py-3 px-4 shadow-sm bg-primary text-white rounded-md'>
          Buy Now
        </button>
      </div>
    </nav>
  );
}

export default NavBar
