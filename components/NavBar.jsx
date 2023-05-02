import Link from 'next/link'
import React, { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

function NavBar() {
    const navRef = useRef(null);
    function changeNavbarColor() {
        var scroll = window.scrollY;
        if (scroll < 120) {
          navRef.current.style.backgroundColor = 'transparent';
          navRef.current.style.boxShadow = 'none';
        } else {
          navRef.current.style.backgroundColor = '#000000';
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
        <Link href={'/'}>
          <p className='text-2xl md:text-4xl font-bold text-lightGreen'>JaredFromSubway</p>
        </Link>
        <ul className='md:flex items-center gap-8 text-lg text-white hidden'>
          <li>
            <Link href={"#home"}>Home</Link>
          </li>
          <li>
            <Link href={"#about"}>About</Link>
          </li>
          <li>
            <Link href={"#tokenomics"}>Features</Link>
          </li>
        </ul>
        <button className='py-4 px-8 rounded-sm text-sm bg-lightGreen shadow-button hidden md:flex text-black font-bold'>
          Buy JaredFromSubway
        </button>

        <button onClick={() => toast.success('Soon :)')} className='flex md:hidden p-3 bg-black text-white rounded-sm'>
          <HiOutlineMenuAlt4 className='text-xl' />
        </button>
      </div>
    </nav>
  );
}

export default NavBar
