import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import curren1 from "../../assets/curren1.png"
import rolex2 from "../../assets/rolex2.webp"
import philip5 from "../../assets/philip4.webp"
import philip1 from "../../assets/philipe1.png"
import rolex4 from "../../assets/rolex4.png"
import pic2 from "../../assets/philipe2.jpeg"
import rolex_logo from "../../assets/logo/rolex_logo.webp"
import curren from "../../assets/logo/curren.png"
import hublot from "../../assets/logo/hublot.webp"
import philip from "../../assets/logo/philip.jpg"
import { ImPriceTags } from "react-icons/im";
import inhand from "../../assets/inhand.webp"
import onehand from "../../assets/onehand.webp"
import { GoArrowUpRight } from "react-icons/go";
import { useEffect } from 'react';
import { useState } from 'react';
const Home = () => {
  let [slide,setslide] = useState(()=>{
    if (window.innerWidth>=850) {
      return 3
    } else if(window.innerWidth <=550){
      return 1
    }else{
      return 2
    }
  })
  useEffect(()=>{
   addEventListener("resize",()=>{
    if (window.innerWidth>=850) {
      setslide(3)
    } else if(window.innerWidth <=550){
     setslide(1)
    }else{
      setslide(2)
    }
   })
  },[window.innerWidth])
  return (
    <>
    {/* the first section */}
    <section className='mt-20 w-[95%] lg:w-[90%] relative left-1/2 -translate-x-1/2 flex justify-center items-center '>
      <h1 className='text-[25px] sm:text-[55px] lg:text-[75px] font-bold '>SMART WATCHES FACILIATE YOUR EVERY ACTIVITY.</h1>
    </section>
    {/* the watches section that contain slider */}
    <section className='mt-20 w-[90%] h-96 mb-10 relative left-1/2 -translate-x-1/2 sh'>
      <Swiper 
        spaceBetween={50}
        slidesPerView={slide}
        className="h-full cursor-pointer"
        >
        <SwiperSlide className='sh transition-all duration-300 hover:scale-90'>
          <h1 className='w-[80px] h-7 text-white bg-amber-900 rounded-md flex justify-center items-center mt-1 ml-1'>Curren</h1>
          <div className='w-full h-full flex justify-center'>
            <img src={curren1} alt="pic" className='object-cover mix-blend-multiply'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sh transition-all duration-300 hover:scale-90'>
          <h1 className='w-[80px] h-7 text-white bg-amber-900 rounded-md flex justify-center items-center mt-1 ml-1'>Rolex</h1>
          <div className='w-full h-full flex justify-center'>
            <img src={rolex2} alt="pic" className='object-cover mix-blend-multiply'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sh transition-all duration-300 hover:scale-90'>
          <h1 className='w-[80px] h-7 text-white bg-amber-900 rounded-md flex justify-center items-center mt-1 ml-1'>Philip</h1>
          <div className='w-full h-full flex justify-center'>
            <img src={philip5} alt="pic" className='object-cover mix-blend-multiply'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sh transition-all duration-300 hover:scale-90'>
          <h1 className='w-[80px] h-7 text-white bg-amber-900 rounded-md flex justify-center items-center mt-1 ml-1'>Philip</h1>
          <div className='w-full h-full flex justify-center'>
            <img src={philip1} alt="pic" className='object-cover mix-blend-multiply'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sh transition-all duration-300 hover:scale-90'>
          <h1 className='w-[80px] h-7 text-white bg-amber-900 rounded-md flex justify-center items-center mt-1 ml-1'>Rolex4
          </h1>
          <div className='w-full h-full flex justify-center'>
            <img src={rolex4} alt="pic" className='object-cover mix-blend-multiply'/>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    {/* the section that contain the companies logo */}
    <section className='mt-20 w-[90%] h-auto mb-10 relative left-1/2 -translate-x-1/2'>
      <div className='w-full h-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='flex items-center justify-center'>
            <img src={rolex_logo} alt="logo" className ="w-[150px] object-cover"/>
          </div>
          <div className='flex items-center justify-center'>
            <img src={curren} alt="logo" className ="w-[150px] object-cover"/>
          </div>
          <div className='flex items-center justify-center'>
            <img src={hublot} alt="logo" className ="w-[150px] object-cover"/>
          </div>
          <div className='flex items-center justify-center'>
            <img src={philip} alt="logo" className ="w-[150px] object-cover"/>
          </div>
      </div>
    </section>
    {/*  the latest watches section*/}
    <section className='mt-20 w-[90%] h-auto mb-10 relative left-1/2 -translate-x-1/2'>
      <h1 className='text-[20px] sm:text-[40px] lg:text-[60px] font-bold text-center'>DISCOVER THE LATEST WATCH.</h1>
      <div className='h-auto grid grid-cols-1 md:grid-cols-3 mt-4 place-items-center gap-5 md:gap-0'>
        <div>
          <img src={pic2} alt="watch" className='w-auto'/>
        </div>
        <div className='self-center flex flex-col items-center gap-3'>
          <ImPriceTags size={40} className="text-amber-900"/>
          <p className='w-[90%] font-bold text-[25px] text-center'>Discover Your New Favorite Our Best Sellers Sale</p>
          <h1 className='font-bold text-[40px] text-amber-900'>50% Off</h1>
          <p className='text-[20px]'>Our All New Arrivals</p>
        </div>
        <div>
          <img src={inhand} alt="watch" />
        </div>
      </div>
    </section>
    {/* the  brand section*/}
    <section className='mt-20 w-[90%] h-auto mb-10 relative left-1/2 -translate-x-1/2 space-y-3'>
      <h1 className='text-[20px] sm:text-[40px] lg:text-[60px] font-bold'>OUR BRAND SELECTION.</h1>
      <div>
          <img src={onehand} alt="pic" />
      </div>
      <div className='h-16 flex items-center justify-between pl-5 pr-5 sh rounded-md transition-all duration-500 hover:text-amber-900 hover:bg-black'>
        <p className='font-bold text-[20px]'>Rolex</p>
        <GoArrowUpRight size={20}/>
      </div>
      <div className='h-16 flex items-center justify-between pl-5 pr-5 sh rounded-md transition-all duration-500 hover:text-amber-900 hover:bg-black'>
        <p className='font-bold text-[20px]'>Phillip</p>
        <GoArrowUpRight size={20}/>
      </div>
      <div className='h-16 flex items-center justify-between pl-5 pr-5 sh rounded-md transition-all duration-500 hover:text-amber-900 hover:bg-black'>
        <p className='font-bold text-[20px]'>Curren</p>
        <GoArrowUpRight size={20}/>
      </div>
    </section>
    </>
  )
}

export default Home