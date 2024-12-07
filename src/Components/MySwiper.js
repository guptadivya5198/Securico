import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles
import 'swiper/css/scrollbar'; // Scrollbar styles

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules'; // Swiper modules

const MySwiper = ({ slides = [] }) => {
  if (!slides.length) {
    return <p>Loading slides...</p>; // Or a loading spinner
  }

  return (
    <div className="w-[1535px] h-[480px] ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Include Autoplay
        spaceBetween={50}
        slidesPerView={1}
        navigation // Enable navigation arrows
        scrollbar={{ draggable: true }} // Enable draggable scrollbar
        pagination={{ clickable: true }} // Enable clickable pagination
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false, // Keeps autoplay running even after manual interaction
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.image}>
            <div className="relative w-full h-[480px]">
              {/* Background Image */}
              <img
                src={slide.image}
                alt="Slide"
                className="w-full h-[480px] object-cover opacity-90"
              />
              {/* Overlay Text for the First Slide */}
              {index === 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-white text-8xl font-bold  px-4 py-1 ">
                    MAKE IN INDIA
                  </div>
                  <div>
                    {' '}
                    <p className="text-white text-4xl py-7  font-bold ">
                      INDIAN COMPANY | INDIAN PRODUCTS | INDIAN PRIDE
                    </p>
                  </div>
                </div>
              )}
              {/* Overlay Text for the third Slide */}
              {index === 2 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-white text-8xl font-bold  px-4 py-1 ">
                    SMART SECURITY SYSTEMS
                  </div>
                  <div>
                    {' '}
                    <p className="text-white text-4xl py-8  font-bold ">
                      TO PROTECT HOMES & BUSINESSES FROM BURGLARS
                    </p>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwiper;
