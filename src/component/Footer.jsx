import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full bg-gray-900 text-white flex flex-col gap-6 items-center  py-10 justify-center '>
    <div className='w-full h-auto flex flex-col md:flex-row items-centre justify-start md:justify-center gap-3 md:gap-4 text-white text-sm px-6 md:px-0 '>
        <a href="#" className='hover:underline'>Conditions of use</a>
        <a href="#" className='hover:underline'>Privecy Notice</a>
        <a href="#" className='hover:underline'>Consumer helth data privecy disclosuer</a>
        <a href="#" className='hover:underline'>Your ads privecy choices</a>
    </div>
    <p className="text-white/50 text-sm text-start md:text-center w-full px-4">
        © <span className='text-blue-500'>1996-{new Date().getFullYear()}</span>, Amazon.com, Inc. or its affiliates
    </p>
    </div>
  )
}

export default Footer