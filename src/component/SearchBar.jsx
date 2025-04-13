import React, { useState } from 'react';
import { Search, ChevronDown} from 'lucide-react';
import Select from 'react-select'
import { Options } from '../data/Data';

const SearchBar = () => {
 
 const [selectedOption, setSelectedOption] = useState(null)

 const handleSelectChange = (option) => {
    setSelectedOption(option);
  };
 

const ListItems = () => {
  return (
    <div className='absolute top-0 left-0'>
      <Select
            options={Options}
            value={selectedOption}
            onChange={handleSelectChange}
            placeholder="Select Category"
            className="basic-single w-[230px]"
            classNamePrefix="select"
            isSearchable={true}
          />
      </div>
  )
}

  return (
    <div className='w-full h-full flex rounded-lg relative'>
     <div className='flex items-center justify-center'>
      <div className='w-fit bg-gray-200 flex items-center px-4 gap-2 h-full ' 
           onClick={<ListItems />}
      >
        <span>All</span>
        <span><ChevronDown size={20} /></span> 
      </div>
      
     </div>

     <div className='flex-1  '>
      <input type="text" placeholder='Search Amazon' className='w-full h-full outline-none bg-white px-2 text-sm' />
     </div>

     <div className=' bg-yellow-500 h-full w-fit px-3 flex items-center justify-center border-2 border-transparent hover:border-yellow-500 overflow-hidden'>
      
        <Search size={30} />

     </div>

    </div>
  )
}

export default SearchBar