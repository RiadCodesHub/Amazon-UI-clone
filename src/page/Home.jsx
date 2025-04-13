import React, {useEffect, useState} from 'react'
import { useNavigate, Link} from 'react-router-dom';
import Header from '../component/Header';
import MobileHeader from '../component/MobileHeader';
import Navbar from '../component/Navbar';
import PosterImg from '../component/PosterImg';
import CardContainer from '../component/CardContainer';
import { ItemsData,
         TopDealsWithBangladesh,
         RelatedProductsItems,
         NewProducts,
         InternationalOrders  } from '../data/Data';
import RelatedProducts from '../component/ScrollProducts';
import Footer from '../component/Footer';
import Sidemenu from '../component/Sidemenu';

const Home = () => {
  const windowWidth = window.innerWidth;
  const [isMobile, setIsMobile] = useState(windowWidth < 840);


  useEffect(() => {
   const handleResize = () => {
    setIsMobile(window.innerWidth < 840);
   }

   window.addEventListener('resize', handleResize);
  
    return () => {
   window.removeEventListener('resize', handleResize)
    }
  }, [])
  

  const navigate = useNavigate();
  const signin = () => {
    navigate('/signIn')
  }


  return (
    <div className='w-full h-auto bg-white flex flex-col items-cenetr justify-center '>
    <div className='max-w-[1520px] justify-center items-center  mx-auto bg-slate-200 relative '>
    {/*header and navbar*/}
      <div className='flex flex-col w-[100%] sticky top-0 z-20'>
    {!isMobile ?
    <div className='w-full h-auto flex flex-col items-center'>
      <Header /> 
      <Navbar />
    </div> :
     <MobileHeader />}
    
    </div>
    
    {/*hero img section*/}
    <div className='relative w-full h-full overflow-y-hidden'>
    <PosterImg />
    <div className='absolute bottom-0 w-full h-[60%] bg-linear-to-t from-slate-200 via-slate-200/80 to-slate-200/0 '></div>
    </div>
{/*products card*/}
    <div className='relative w-full grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 -mt-18 md:-mt-28 lg:-mt-60 z-10 place-items-center overflow-hidden px-10 sm:px-6'>
      { ItemsData.map((categoryData, index) => (
        <CardContainer key={index} category={categoryData.category} items={categoryData.items} linkText={categoryData.linkText} />
      ))
      }
    </div>
   {/*Related product section*/}
  <div className= 'w-full h-[275px] mt-4 px-10 sm:px-6'>
    <RelatedProducts carouselProducts={RelatedProductsItems} title={`Related items you've viewed`} />
  </div>
  {/*Deals for bangladesh*/}
  <div className= 'w-full h-[275px] mt-4 px-10 sm:px-6'>
    <RelatedProducts carouselProducts={TopDealsWithBangladesh} title={"Top picks for Bangladesh"}/>
  </div>

  <div className='relative w-full mt-4  grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 z-10 place-items-center overflow-hidden px-10 sm:px-6 '>
      { NewProducts.map((categoryData, index) => (
        <CardContainer key={index} category={categoryData.category} items={categoryData.items} linkText={categoryData.linkText} />
      ))
      }
    </div>

    {/*New international customers purchased*/}
  <div className= 'w-full h-[300px] mt-4 px-10 sm:px-6 '>
    <RelatedProducts carouselProducts={InternationalOrders} title={"New international customers purchased"}/>
  </div>

  <hr  className='w-full h-[1px] bg-gray-500 mt-10 mb-10' />

  <div className='w-full h-auto flex flex-col items-center justify-center gap-2'>
    <h1>See personalized recommendations</h1>
    <button className=' bg-amber-500 h-[35px] sm:h-[35px] md:h-[40px] min-w-[250px] text-center rounded-full text-sm' onClick={signin}>Sign In</button>
    <p className='text-sm '>New customer? <Link to={"/registration"} className='text-blue-500 hover:text-black hover:underline'> Registration</Link></p>
  </div>

  <hr  className='w-full h-[1px] bg-gray-500 mt-10' />

  <div className='w-full max-h-[200px]'>
    <Footer />
  </div>
  
    </div>
    
    </div>
  )
}

export default Home