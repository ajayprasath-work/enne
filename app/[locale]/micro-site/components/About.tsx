'use client';
import { AboutSvg } from '@/public/assets/icon/Icon'
import React from 'react'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import { useScopedI18n } from 'next-intl'

function About() {
  const tindex = useScopedI18n("IndexPage");
  const [language, setLanguage] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("Language");
      setLanguage(storedLanguage);
    }
  }, []);
  return (
    <section className='bg-about relative w-full  overflow-hidden'>
        <div className='absolute text-white top-0 opacity-5 left-0'>
          <AboutSvg width={2000} height={1000} />
        </div>
        <div className='w-full px-5 lg:px-0 lg:w-10/12 mx-auto py-16  lg:py-32 relative z-10'>
          <div className='flex justify-between items-center w-full flex-wrap gap-5 lg:gap-20'>
             <div className='w-full md:w-[calc(44%_-_2.5rem)] border-[3px] border-Microlight-150  overflow-hidden flex justify-center relative items-center  rounded-xl h-[20rem] lg:h-[32.25rem]'>
                  <Image src={'/assets/images/about_banner.webp'} alt='about ' width={600} height={600} className='object-cover w-full h-[22rem] lg:h-[39rem] absolute top-5'/>
             </div>
             <div className='w-full flex flex-col gap-3 lg:gap-5 md:w-[calc(53%_-_2.5rem)]'>
                   <div className='text-3xl lg:text-5xl font-bold tracking-wide text-white lg:leading-2xxl'>
               {tindex("about.Unlock")}
                   </div>
                   <div className='lg:w-[70%] md:text-xl font-medium text-white opacity-95'>
                   {tindex("about.Start your")}
                   </div>
                   <div className='mt-2 lg:mt-5'>
                    <a href={`${language}micro-site/register`} target='_blank' title='Register Now' className='inline-block py-2.5 px-8 border rounded-4xl border-Microlight-150 text-base font-medium text-white tracking-wide'>{tindex("about.Register Now")}</a>
                   </div>
             </div>
          </div>
        </div>
    </section>
  )
}

export default About