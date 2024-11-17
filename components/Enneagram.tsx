"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { Circle, LeftFaceArrow, RightFaceArrow } from '@/public/assets/icon/Icon';
import { Data } from './Data';
import { Swiper, SwiperRef, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'; 
import { useScopedI18n } from '@/locales/client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Enneagram() {
    const swiperRef = useRef<SwiperRef>(null);
    const [language, setLanguage] = useState<string | null>(null);
    const tIndex = useScopedI18n("IndexPage");
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== "undefined") {
          const storedLanguage = localStorage.getItem("Language");
          setLanguage(storedLanguage);
        }
      }, []);
      function handleClick(Id: string){
        localStorage.setItem("id",Id);
        const url = `enneagram-detail`;
        window.open(url, '_blank');
      };
    return (
        <section id="enneagram" className="md:p-12 p-5 bg-gray-100 w-full">
            <div className="bg-white md:py-12 py-5 rounded-2xl shadow-lg">
                <div className="md:w-9.5 md:ml-auto md:px-0 px-2.5 flex flex-col md:gap-16 gap-10">
                    <div className="flex flex-wrap justify-between items-center w-9.5">
                        <div className="flex flex-col gap-5 w-full md:w-2/5 mb-8 md:mb-0">
                            <div className="flex items-center gap-5">
                                <span className="text-secondary">
                                    <Circle width={24} height={24} />
                                </span>
                                <span className="text-lg font-bold text-primary tracking-lg">
                                    {tIndex("Discover the path.Enneagram")}
                                </span>
                            </div>
                            <div className="w-auto text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-xl text-primary">
                                {tIndex("Discover the path.Discover the path to a calmer you")}
                            </div>
                        </div>
                        <div className="w-full md:w-2/5 text-center md:text-left">
                            {tIndex("Discover the path.The Enneagram of Personality is a model that divides human")}
                        </div>
                    </div>
                    <div className='w-full md:flex-row flex-col-reverse flex items-center md:gap-12 gap-5 overflow-hidden'>
                        <div className='flex md:flex-col gap-5 h-full md:w-[calc(8%_-_1.5rem)] w-full items-center justify-center  bg-white'>
                            <div onClick={()=>swiperRef?.current?.swiper.slidePrev()} className='w-12 h-12 flex items-center justify-center rounded-full border border-secondary cursor-pointer'>
                                <LeftFaceArrow width={'2rem'}/>
                            </div>
                            <div onClick={()=>swiperRef?.current?.swiper.slideNext()} className='w-12 h-12 flex items-center justify-center rounded-full border border-secondary cursor-pointer'>
                                <RightFaceArrow width={'2rem'}/>
                            </div>
                        </div>
                        <Swiper 
                       ref={swiperRef}
                       className='md:px-0 px-2.5 flex md:w-[calc(92%_-_1.5rem)] w-full cursor-grab'
                       loop={true}
                       navigation={true}
                       pagination={{ clickable: true }}
                       spaceBetween={30}
                       slidesPerView={3.5}
                       speed={1500}
                       onSlideChange={() => console.log('slide change')}
                       onSwiper={(swiper) => console.log(swiper)}
                       autoplay={{ delay: 2000, disableOnInteraction: false }}
                       modules={[Autoplay]} 
                            breakpoints={{
                                320:{
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                450: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {Data.map((item, index) => (
                                <SwiperSlide key={index}>

                                    <div key={index} className='flex-shrink-0' >
                                        <div className='w-full h-428 overflow-hidden rounded-20'>
                                            <Image
                                                alt={item.type}
                                                title={item.type}
                                                src={item.banner_img_path}
                                                width={450}
                                                height={600}
                                                className='w-full h-full object-cover object-center'
                                            />
                                        </div>
                                        <div className='flex flex-col gap-5 mt-5'>
                                            <div className='flex flex-col gap-2.5'>
                                                <span className='text-2xl font-bold leading-normal text-primary'>{item.type}</span>
                                                <span className='text-base leading-normal text-[#8E8E93] line-clamp-3'>{item.description[0]}</span>
                                            </div>
                                            <button  onClick={() => handleClick(item.id)} title='' className='w-fit px-5 py-2.5 rounded-full bg-primary text-white leading-normal font-medium mt-2'>{tIndex("heroBanner.Read more")}</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
