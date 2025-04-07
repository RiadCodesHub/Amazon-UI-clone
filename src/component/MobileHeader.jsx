import React from 'react'
import { logo, NavItems } from '../data/Data'
import { MenuIcon, Search, User, } from 'lucide-react'
import { Link } from 'react-router-dom'
import CartIcon from '/public/cart.svg'

const MobileHeader = () => {
  return (
    <div className=' overflow-hidden w-full h-auto bg-gray-800 flex flex-col items-center justify-center px-4 py-2'>
       {/*Header icon part*/}
       <div className='w-full h-auto flex items-center justify-between '>
        <div className='flex items-end gap-2 '>
            <button className='text-white'><MenuIcon size='30'/></button>
            <a href=""><img src={logo} alt="logo" className='max-w-[80px] max-h-[30px] ' /></a>
        </div>
        <div className='flex items-center gap-2'>
         <div className='flex items-center'>
             <Link to="/SignIn" className= ' h-full w-fit px-2 py-2 border border-transparent hover:border-white text-white text-sm hover:text-blue-500 flex items-center '>Sign in {">"} 
              <span> <User /></span>
             </Link>

             <div className='flex items-center relative h-full'>
                   <div className='flex gap-1 p-2 border border-transparent hover:border-white h-full items-end relative'>
                   <a href="#" className='flex items-center  gap-1 relative '>
                   <img src={CartIcon} alt="Cart" className='w-[30px] h-[30px] object-cover' />
                   </a>
                   <p className='text-lg font-bold  text-orange-500 absolute top-0 left-0 transform translate-x-5 -translate-y-2'>0</p>
                   </div>
                 </div> 
         </div>
        </div>

       </div>

    {/*Header search input part*/}

      <div className='relative w-full h-auto bg-white rounded-lg overflow-hidden'>
        <input type="text" placeholder='Search Amazon' className='w-full h-full  px-2 py-2 focus:outline-0 text-sm' />

        <button type='button' className='absolute top-0 right-0 bg-yellow-500 h-full w-fit px-2 rounded-lg' ><Search /></button>
      </div>

       {/*Header nav part*/}

       <div className='w-full f-auto flex items-center justify-start'>
        <ul className='w-fit flex gap-6 text-sm text-white list-none py-2 '>
        {
        NavItems.map((item, index) => (
         <li key={index} className=''>{item}</li>   
        ))
        }
        </ul>
       </div>
    </div>
  )
}

export default MobileHeader