import React, {useRef, useState} from 'react'
import { ChevronRight, ChevronLeft} from 'lucide-react'

const CarouselItems = ({products}) => {
  let itemWidth = 275;
  const containerWidth = products.length * itemWidth;

  const productRef = useRef(null)
  let [currentIndex, setCurrentIndex] = useState(0);


  const handleNext = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
      productRef.current.scrollLeft += itemWidth
    }
  }

  const handlePrev = () => {
    if(currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      productRef.current.scrollLeft -= itemWidth;
    }
  }

  const handleScroll = () => {
    const scrollLeft = productRef.current.scrollLeft;
    const index = Math.round(scrollLeft / itemWidth);
    setCurrentIndex(index);
  };

  return (
    <div className='relative w-full h-fit py-2 bg-white p-4 group'>
      <div className={`overflow-x-auto flex items-center py-2 gap-6 transition-all duration-500 ease-in-out scroll-smooth`}
          style={{width: `${containerWidth}`}}
          ref={productRef}
          onScroll={handleScroll}

            >
        {products.map((product,index) => (
          <div key={index} className={`max-h-[150px]md:max-h-[200px] flex flex-shrink-0 max-w-[200px] md:max-w-[275px] h-auto ` }
              style={{width: `${itemWidth}`}}>
          <img src={product.url} 
               alt={product.name} 
               className={`w-full h-full object-cover object-center bg-transparent`}
                />
          </div>
        ))}
      </div>
      <div className='absolute w-full h-auto top-0 left-0 transform translate-y-10 flex items-center justify-between'>
        <button onClick={handlePrev} className={`${currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} w-20px py-6  rounded-sm bg-white shadow-2xl `}
                style={{ boxShadow: '40px 60px 80px rgba(0, 0, 0, 0.5)' }}
        ><ChevronLeft size={50} /></button>
        <button onClick={handleNext} className={`${currentIndex === products.length - 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} cursor-pointer w-20px  rounded-sm  py-6 bg-white`}
                style={{ boxShadow: '-40px 60px 80px rgba(0, 0, 0, 0.5)' }}
                ><ChevronRight size={50} /></button>
      </div>
    </div>
  )
}

export default CarouselItems