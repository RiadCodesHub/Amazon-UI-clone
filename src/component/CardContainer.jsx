import React from 'react'
 
const Card = ({name, src}) => {
    return (
        <div className='w-fit h-auto flex flex-col gap-1'>
            <div className='w-full max-h-full  '>
                <img src={src} alt={name} className='max-w-full min-h-full object-cover object-center' />
            </div>
            <div className='text-xs'>{name}</div>
        </div>
    )
}

const CardContainer = ({category, items, linkText}) => {
  return (
    <div className='w-full min-h-full bg-white overflow-hidden justify-between  flex flex-col flex-wrap items-stretch shadow-2xl p-6  md:gap-4 gap-2'>
        <div className='relative w-full'>
            <h1>{category}</h1>
        </div>
        <div className={`${items.length > 1 ? 'grid grid-cols-2 gap-4' : 'w-full h-full'} place-items-center`}>
       {
        items.map((item, index) =>
            <Card key={index} src={item.src} name={item.name} 
            className={`${item.name === '' ? 'hidden': 'block'}`}
        />
        )
       }
      </div>
     <div className='text-blue-500 hover:text-black text-xs'>
        <a href="#">{linkText}</a>
     </div>
    </div>
  )
}

export default CardContainer