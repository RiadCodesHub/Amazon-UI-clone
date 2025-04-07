
import CarouselItems from './CarouselItems'

const RelatedProducts = ({carouselProducts, title}) => {
   
  return (
    <div className='relative w-full h-full py-2 bg-white p-4'>
      <div className='bg-white w-full h-full flex flex-col gap-3'>
        <div className='w-full flex items-end gap-2'>
          <h1>{title}</h1>
          <a href="#" className='text-blue-500 text-sm hover:text-black hover:underline'>See more</a>
        </div>

        <div className='flex  overflow-hidden flex-nowrap gap-4 items-center'>
          <CarouselItems products={carouselProducts} />
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts
