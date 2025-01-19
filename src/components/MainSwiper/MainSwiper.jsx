import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './MainSwiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// import img
import img1 from"../../imgs/cover-3.jpg"
import img2 from"../../imgs/cover-1.jpg"
import img3 from"../../imgs/cover-2.png"

export default function App() {
    return (
    <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        // pagination={{
        //     clickable: false,
        // }}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide> <img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={img3} alt="" /></SwiperSlide>
    
        </Swiper>
    </>
    );
}
