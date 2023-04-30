import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

export default function Carousel() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );


  const swiper = useSwiper();


//   const prepend = () => {
//     setSlides([
//       `Slide ${prependNumber.current - 2}`,
//       `Slide ${prependNumber.current - 1}`,
//       ...slides,
//     ]);
//     prependNumber.current = prependNumber.current - 2;
//     swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
//   };

//   const append = () => {
//     setSlides([...slides, 'Slide ' + ++appendNumber.current]);
//   };

//   const slideTo = (index) => {
//     swiperRef.slideTo(index - 1, 0);
//   };
    const handleclick = e =>{
        console.log(e.target);
    }

  return (
    <>
      <Swiper
        className={`border p-5 h-[400px] w-[400px]`}
        modules={[EffectFade]} effect="flip"
        onSwiper={setSwiperRef}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}

        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide className='h-[200px]' key={slideContent} virtualIndex={index} onClick={handleclick}>
            {({ isActive }) => (
                <div className={`w-full h-[200px] ${isActive?'border-2 border-blue-600 scale-110 duration-100':'border'}`}>{slideContent}</div>
            )}
          </SwiperSlide>
        ))}
        <div className='relative bottom-10'>
            <Prev></Prev>
            <Next></Next>
        </div>
      </Swiper>

      {/* <div>
        <button className='border px-5 py-2 rounded-md m-4' onClick={()=>{swiper.slidePrev()}}>left</button>
        <button className='border px-5 py-2 rounded-md m-4' onClick={()=>{swiper.slideNext()}}>right</button>
      </div> */}
    </>
  );
}

const Next = ()=>{
    const swiper = useSwiper();
    return (
        <button className='border px-5 py-2 rounded-md m-4' onClick={()=>{swiper.slideNext()}}>right</button>
    )
}

const Prev = ()=>{
    const swiper = useSwiper();
    return (
        <button className='border px-5 py-2 rounded-md m-4' onClick={()=>{swiper.slidePrev()}}>left</button>
    )
}
