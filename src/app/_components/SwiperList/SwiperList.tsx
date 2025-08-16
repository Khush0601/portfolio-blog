"use client"
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const SwiperList = ({ imageList = [] }) => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl"
        >
            {imageList.map((imageUrl, index) => (
                <SwiperSlide key={index} >
                    <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                        <Image
                            src={imageUrl ? imageUrl : "/profile.jpg"}
                            // src={"/profile.jpg"}
                            alt={`Slide ${index}`}
                            fill
                            className="object-cover rounded-xl filter brightness-90 hover:blur-0 hover:brightness-100 transition-all duration-700 ease-in-out shadow-lg"
                            priority={index === 0}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SwiperList
