import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

function NavBar() {
    const navRef = useRef(null);
    function changeNavbarColor() {
        var scroll = window.scrollY;
        if (scroll < 120) {
          navRef.current.style.backgroundColor = 'transparent';
          navRef.current.style.boxShadow = 'none';
        } else {
          navRef.current.style.backgroundColor = 'white';
          navRef.current.style.boxShadow =
            'transparent 0 0 0 0, transparent 0 0 0 0, rgba(0, 0, 0, 0.05) 0 1px 2px 0';
        }
    }
    useEffect(() => {
        
        window.addEventListener('scroll', changeNavbarColor);
    }, [])
  return (
    <nav ref={navRef} className='p-4 md:py-4 lg:px-16 w-full bg-transparent transition-all fixed top-0 z-[12]'>
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
        <button className='py-3 px-4 shadow-sm text-sm bg-primary text-white rounded-md'>
          Buy Now
        </button>
      </div>
    </nav>
  );
}

export default NavBar
