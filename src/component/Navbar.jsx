import React from 'react'
import { NavItems } from '../data/Data'
import { FaBars } from 'react-icons/fa'


const Navbar = () => {
  return (
    <div className='w-full h-[40px] bg-slate-700 flex items-center justify-start gap-2 px-4'>
    <div className='flex gap-1 items-center text-white border-1.5 border-transparent hover:border-white w-fit h-full px-2'>
        <span className='text-xl'>
            <FaBars />
        </span>
        <h2 className='text-[16px] font-bold'>All</h2>
    </div>
    <ul className='w-full flex items-center gap-2 h-full'>
     {
      NavItems.map((item, index) => 
        <li key={index} className='text-[16px] w-fit h-full px-2 text-white border-[1.5px] border-transparent hover:border-white flex items-center justify-center'><a href="" className=''>{item}</a></li>
    )
     }
     </ul>
    </div>

  )
}

export default Navbar