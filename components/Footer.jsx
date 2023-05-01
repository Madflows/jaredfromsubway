import React from 'react'
import {GrTwitter} from "react-icons/gr";
import {BsTelegram} from "react-icons/bs";

function Footer() {
  return (
    <footer className='p-4 md:px-16 flex flex-col md:flex-row items-center justify-between'>
      <div className='text-sm text-primary'>Copyright © 2023 JaredFromSubway. All Rights Reserved.</div>
      <div className='flex items-center gap-4'>
        <button className='text-lg w-[2rem] h-[2rem] rounded-md bg-primary text-white flex items-center justify-center'>
            <GrTwitter />
        </button>
        <button className='text-lg w-[2rem] h-[2rem] rounded-md bg-primary text-white flex items-center justify-center'>
            <BsTelegram />
        </button>
      </div>
    </footer>
  );
}

export default Footer
