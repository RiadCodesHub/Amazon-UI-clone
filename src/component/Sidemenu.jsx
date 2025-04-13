
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from "motion/react"

const Content = ({ title }) => {
  return (
    <div className="w-full h-auto px-6 py-2 flex justify-between hover:bg-gray-200">
      <p className="text-lg text-gray-800">{title}</p>
      <span><ChevronRight /></span>
    </div>
  );
};

const Sidemenu = ({closer, isVisible}) => {

  const departments = [
    { title: 'Electronics' },
    { title: 'Computers' },
    { title: 'Smart Home' },
    { title: 'Arts & Crafts' },
  ];

  const sections = [
    { heading: 'Shop by department', items: departments },
    { heading: 'Digital Content & Devices', items: departments },
    { heading: 'Programs & Features', items: departments },
  ];

  return (
    <div className={`absolute top-0 left-0 w-full h-screen bg-black/80 z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} `}>
    <motion.div 
          initial={{x: '-100%'}}
          animate={{x: isVisible ? '100%' : '0%'}}
          exit={{x: '-100%'}}
          transition= {{duration: '0.5s', ease: 'easeInOut' }}    
          className={`lg:w-[30%] md:w-[35%] sm:w-[50%] w-[100%] h-screen relative bg-white z-50 transition-transform duration-700 ease-in-out`}>
      {/* Header */}
      <div className="max-h-[60px] px-6 py-2 bg-slate-800 w-full flex items-center gap-4 sticky top-0">
        <span className="rounded-full bg-white w-fit p-2">
          <FaUser className="text-2xl" />
        </span>
        <Link to="/SignIn" className="text-xl font-bold text-white">
          Hello, Sign in
        </Link>
      </div>

      {/* Scrollable Content */}
      <div className="w-full h-[90%] overflow-y-auto py-2">
        {sections.map((section, index) => (
          <div key={index} className="w-full mb-6">
            <h1 className="mb-4 px-6 text-lg font-bold text-gray-800">{section.heading}</h1>
            <div className="flex flex-col">
              {section.items.map((item, idx) => (
                <Content key={idx} title={item.title} />
              ))}
            </div>
            <hr className="w-full my-4" />
          </div>
        ))}

<div className='flex flex-col gap-5  '>
        <h1 className='px-6'>Help & Settings</h1>
      <div className='flex flex-col gap-1'>
        <p className='px-6 text-lg py-2   hover:bg-gray-200'>Your Accaount</p>
        <Link to={"/"} className='px-6 py-2 text-lg  hover:bg-gray-200'>Customer Services</Link>
        <Link to={"/SignIn"} className='px-6 py-2 text-lg  hover:bg-gray-200'>Sign in</Link>
      </div>
      </div>



      </div>

      {/* Close Button */}
      <button onClick={closer} className="absolute top-2 right-4 p-1 text-lg text-white border-2 border-transparent rounded-lg hover:border-white"
      >
        ✖
      </button>
    </motion.div>
    </div>
  );
};

export default Sidemenu;
