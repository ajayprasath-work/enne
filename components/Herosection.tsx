'use client';
import { Lightangle, Roundline, Astrology } from "@/public/assets/icon/Icon";
import { useI18n, useScopedI18n } from '@/locales/client'
import React from "react";
import ContactModal from "./ContactModal";
import Menu from "./Menu";
import Footer from "./Footer";
import { useEffect } from "react";
import { useState } from "react";

interface SubBannerProps {
  title: string;
}
interface DetailBannerProps {
  Bg_path : string,
  title:string
}

export default function Herosection() {
  const [language, setLanguage] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("Language");
      setLanguage(storedLanguage);
    }
  }, []);
  const tIndex = useScopedI18n("IndexPage");
  return (
    <>
    <Menu/>
    <section
      style={{ backgroundImage: "url('/assets/images/hero_banner.webp')" }}
      className="bg-cover relative  bg-center w-full h-screen" id="home"
    >
      <div className="absolute right-[28%]">
        <Roundline width={854} height={1117} color="#F9FAFB" />
      </div>
      <div className="absolute bottom-0 right-0">
        <Lightangle width={622} height={610} color="" />
      </div>
      <div className="w-full px-5 md:px-0 md:w-10/12 mx-auto">
        <div className="flex text-black w-full relative z-10 h-screen justify-start items-center">
          <div className="flex flex-col text-center md:text-start items-center md:items-start w-full md:w-[80%] xl:w-[60%] 2xl:w-1/2">
            <div className="text-2xl font-bold text-secondary tracking-xl">
            {tIndex("heroBanner.Ennealysis - Enneagram")}
            </div>
            <div className="text-3xl md:text-4xl lg:text-xxl text-white font-semibold md:font-bold lg:leading-xxl tracking-3xl py-5">
            {tIndex("heroBanner.Unlock the Power of Self-Awareness and Personal Growth")}
            </div>
            <div className="w-[80%] bg-gray-190 h-[1.2px]"></div>
            <p className="text-base font-medium text-gray-150 tracking-xl mt-5 leading-6">
            {tIndex("heroBanner.Explore the nine personality types to understand yourself and improve your relationships")}
            </p>  
            <a
              href={`${language}/register`}
              title="take the test now"
              target="_blank"
              className="py-5 px-10 bg-secondary inline-flex w-fit mt-8 rounded-4xl text-paragraph font-bold text-xl md:text-2xl transition-all duration-500 hover:shadow-xxl"
            >
              {tIndex("heroBanner.Take the Test Now")}
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export const SubBanner: React.FC<SubBannerProps> = ({ title }) => {
  return (
    <section className="w-full h-600 bg-primary flex items-center justify-center relative">
      <span className="text-[#032143] relative">
        <Astrology width={'21.875rem'} height={'21.875rem'} />
      </span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 px-5 md:px-0 text-3xl md:text-4xl lg:text-6xl font-bold w-full text-center">
        {title}
      </span>
    </section>
  );
};

export const DetailBanner = ({Bg_path , title}:DetailBannerProps) => {
  return (
    <>
    <section
      className={`w-full h-[400px] md:h-600 bg-primary bg-cover bg-center flex items-center justify-center relative ${Bg_path}`}
    >
      <div className="w-full px-5 md:px-0 md:w-10/12 mx-auto relative flex flex-col">
        <span className="text-[#B9ABC8] absolute right-0 top-1/2 -translate-y-1/2 z-10 mix-blend-multiply">
              <Astrology width={'21.875rem'} height={'21.875rem'} />
        </span>
        <span className="text-[#D5B0C2] font-semibold md:font-bold text-2xl">
          Ennealysis - Resources
        </span>
        <span className="text-white z-10 text-3xl  md:text-5xl  lg:text-6xl font-semibold md:font-bold md:!leading-normal xl:w-[75%]">
          {title}
        </span>
      </div>
    </section>
 
    </>
  )
}
