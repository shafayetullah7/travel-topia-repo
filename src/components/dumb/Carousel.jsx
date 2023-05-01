import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectFade } from 'swiper';
import { AiFillLeftCircle,AiFillRightCircle } from "react-icons/ai";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

export default function Carousel({data,current}) {
  const [swiperRef, setSwiperRef] = useState(null);
  // Create array with 500 slides
  const [slides, setSlides] = useState(data);
  // const [current,setCurrent];

  const swiper = useSwiper();


  const handleclick = e =>{
    console.log(e.target);
  }

  return (
    <>
      <Swiper
        className='p-5 h-[400px] w-full'
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        virtual
      >
        {slides.map((slide, index) => (
          <SwiperSlide className='h-[250px]' key={slide} virtualIndex={index} >
            {({ isActive }) => (
                <div>
                    <div className={`w-full h-[250px] ${isActive?'border-4 border-yellow-400 scale-110 duration-500':''} rounded-xl relative overflow-hidden bg-gradient-to-t from-black bg-opacity-40 `}>
                        <img className='-z-10 w-full h-full object-cover object-center absolute top-0' src={slide.image_link} alt="destination image" />
                        <h1 className='z-10 absolute font-bebas text-white bottom-6 left-4 text-4xl'>{slide.destination}</h1>
                    </div>
                </div>
                
            )}
          </SwiperSlide>
        ))}
        <div className='relative bottom-14 flex gap-3 z-10'>
            <Prev current={current} data={data}></Prev>
            <Next current={current} data={data}></Next>
        </div>
      </Swiper>

    </>
  );
}

const Next = ({current,data})=>{
    const swiper = useSwiper();

    const handleclick = ()=>{
      if(current.current!==data.length-1)current.setCurrent(current.current+1);
      swiper.slideNext(800);
    }
    return (
        <button className='text-5xl text-white rounded-md inline-block hover:scale-110 duration-300' onClick={()=>{handleclick()}}><AiFillRightCircle></AiFillRightCircle></button>
    )
}

const Prev = ({current,data})=>{
    const swiper = useSwiper();

    const handleclick = ()=>{
      if(current.current!==0)current.setCurrent(current.current-1);
      swiper.slidePrev(800);
    }
    return (
        <button className='text-5xl text-white rounded-md inline-block hover:scale-110 duration-300' onClick={()=>{handleclick()}}><AiFillLeftCircle></AiFillLeftCircle></button>
    )
}
