import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav className='p-3 w-full'>
      <div className='w-full flex items-center justify-between'>
        <Link href={'/'}>JaredFromSubway</Link>
        <ul className='flex items-center gap-3'>
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
        <button className='py-3 px-4 shadow-sm bg-yellow-600 text-white rounded-md'>
          Buy Now
        </button>
      </div>
    </nav>
  );
}

export default NavBar
