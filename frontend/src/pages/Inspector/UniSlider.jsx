import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const UniSlider = () => {
  const top3=[
    {uniname:"UNI 1",image:"/src/assets/react.svg",pos:"1"},        
    {uniname:"UNI 2",image:"/src/assets/react.svg",pos:"2"},        
    {uniname:"UNI 3",image:"/src/assets/react.svg",pos:"3"},
    {uniname:"UNI 1",image:"/src/assets/react.svg",pos:"1"},        
    {uniname:"UNI 2",image:"/src/assets/react.svg",pos:"2"},        
    {uniname:"UNI 3",image:"/src/assets/react.svg",pos:"3"},
    {uniname:"UNI 1",image:"/src/assets/react.svg",pos:"1"},        
    {uniname:"UNI 2",image:"/src/assets/react.svg",pos:"2"},        
    {uniname:"UNI 3",image:"/src/assets/react.svg",pos:"3"},
]
  return (
    <div className='p-4 text-2xl h-72 rounded-md'>
      <h2 className='uppercase text-3xl md:text-4xl bg-white lg:text-5xl p-4 font-bold text-left'>Universities</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         {
        top3.map(({ uniname, image, pos }) => (
            <div className="text-black flex gap-4 items-center justify-center p-2  " key={uniname}>
                <SwiperSlide className='h-60 flex flex-col transition items-center hover:-translate-y-2 hover:scale-110 justify-center gap-4 drop-shadow-md rounded-md'>
                  <img src={image} className="md:h-[10rem] md:w-[10rem] h-[8rem] w-[8rem] drop-shadow-md" alt={uniname} /> 
                  <p className="text-xl capitalize text-black md:text-2xl">{uniname}</p>
                </SwiperSlide>              
                    
            </div>
        ))
       }
      </Swiper>
    </div>
  )
}

export default UniSlider