import React from 'react'
import logo from '/public/logo/logo_white.png'
import { IoLocationOutline,  } from "react-icons/io5";
import { FaSearch, FaCaretDown } from 'react-icons/fa';
import usaFlag from '/public/us-flag.png' 
import CartIcon from '/public/cart.svg'
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate();
 
  const signIn = () => {
    navigate('/SignIn')
  }

  return (
   <div className=' w-full h-[60px] flex items-center bg-black px-4 py-2 justify-between gap-x-2'>
    {/*navigation left*/}
    <div className='w-auto flex items-center'>
    {/*Icon */}
    <div className='w-fit h-full border border-transparent hover:border-white px-2 py-2'>
        <a href="#">
        <img src={logo} alt="logo" className='w-[100px] h-[30px]' />
        </a>
    </div>
    {/*Delivery location */}
    <div className='flex items-center gap-1 border border-transparent hover:border-white px-2'>
     <span className='text-white text-xl'><IoLocationOutline /></span>
     <p className='flex flex-col'>
        <span className='text-white text-[12px]'>Deliver to</span>
        <span className='text-white text-sm font-bold'>Bangladesh</span>
     </p>
    </div>

    </div>
    {/*navigation fill*/}
    <div className='w-auto bg-amber-500 h-[40px]  flex flex-1 items-center rounded-lg overflow-hidden'>
      <div className='relative w-auto h-full'>
       <div className='relative w-fit flex px-4 h-full gap-1 items-center justify-center bg-slate-200'>
        <span>All</span>
        <span><FaCaretDown /></span>
       </div>
      <form action="" className='relative '>
       <label htmlFor="options" className='hidden'>Search on Amazon</label>
       
      
       </form>

      </div>
      <div className='w-auto h-[100%] bg-white flex items-center flex-1'>
        <input type="text" placeholder='Search Amazon' className='w-full flex flex-grow bg-white focus:outline-none pl-4' />
      </div>

      <div className='flex w-auto h-full items-center px-4'>
        <FaSearch />
      </div>
    </div>

    {/*navigation right*/}
    <div className='w-auto h-full flex items-center gap-3'>
    <div className='flex items-center gap-0 group h-full'>
      <div className='flex gap-1 px-[2px] border border-transparent hover:border-white h-full items-center'>
      <img src={usaFlag} alt="USA" className='w-[16px] h-[10px]'/>
      <span className='text-white text-[16px]'>EN</span>
      </div>
     <span className='text-gray-400 flex items-center transform translate-y-1'><FaCaretDown /></span>
    </div>

    <div className='flex items-center relative group h-full'>
      <button onClick={signIn} className='flex gap-1 px-1 border border-transparent hover:border-white h-full items-center'>
      <div className='text-white flex flex-col leading-4 text-start '>
        <p className='text-[12px]'>Hello, Sign in</p>
        <h3 className='text-[16px] font-semibold'>Accounts & Lists</h3>
      </div>
      </button>
     <span className='text-gray-400 transform translate-y-2'><FaCaretDown /></span>

     <div className='absolute top-0 right-0 z-50 w-md h-auto py-[20px] shadow-2xl
                     shadow-gray-900 bg-white transform translate-y-12 translate-x-20 
                     rounded-lg flex flex-col items-center justify-center gap-y-2 opacity-0 
                     invisible group-hover:opacity-100 group-hover:visible'>
      <button onClick={signIn} className='w-[50%] rounded-2xl py-1 text-sm bg-yellow-400 hover:underline '>Sign in</button>
      <div className='text-sm'>New customer? <Link to="/Registration" className='underline text-blue-500 hover:text-black' >Start hear</Link></div>
      <div className='bg-white w-[20px] h-[20px] absolute -top-1 right-15 transform -translate-x-4.5 rotate-45'></div>
     </div>
     
    </div>

    <div className='flex items-center group h-full'>
      <div className='flex gap-1 px-1 border border-transparent hover:border-white h-full items-center'>
      <div className='text-white flex flex-col leading-4'>
        <p className='text-[12px]'>Return</p>
        <h3 className='text-[16px] font-semibold'>& Orders</h3>
      </div>
      </div>
    </div>

    <div className='flex items-center group h-full'>
      <div className='flex gap-1 px-1 border border-transparent hover:border-white h-full items-end relative'>
      <a href="#" className='flex items-center  gap-1 relative '>
      <img src={CartIcon} alt="Cart" className='w-[30px] h-[30px] object-cover' />
      <p className='text-white text-[16px] font-bold'>Cart</p>
      </a>
      <p className='text-lg font-bold  text-orange-500 absolute top-0 left-0 transform translate-x-4 -tranlate-y-0'>0</p>
      </div>
    </div>

   </div>

   </div>
  )
}

export default Header