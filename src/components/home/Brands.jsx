import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../assets/brands/amazon.png";
import amazonVector from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import startPeople from "../../assets/brands/start_people.png";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Brands = () => {
    const brands = [amazon, amazonVector, casio, moonstar, randstad, star, startPeople];
    return (
        <div className='space-y-4 p-10'>
            <h4 className='text-secondary font-bold text-center'>We've helped thousands of sales teams</h4>
        <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        // className="mySwiper"
      >
        {
            brands.map((brand, index) => (
                <SwiperSlide key={index}>
                    <img src={brand} alt={`Brand ${index + 1}`}  />
                </SwiperSlide>
            ))
        }
        
      </Swiper>
      </div>
    );
};

export default Brands;