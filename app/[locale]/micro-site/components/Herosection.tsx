'use client';
import React from "react";
import { useI18n, useScopedI18n } from '@/locales/client'
import { useState } from "react";
import { useEffect } from "react";
function Herosection() { 
  const tIndex = useScopedI18n("IndexPage");
  const [language, setLanguage] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("Language");
      setLanguage(storedLanguage);
    }
  }, []);
  return (
    <section className="bg-hero_banner_1 lg:bg-hero_banner_micro bg-cover bg-center w-full h-screen ">
      <div className="mx-auto w-11/12">
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-start items-center h-screen">
          <div className="flex flex-col">
            <div className="lg:leading-xxl text-3xl text-center lg:text-left md:text-4xl lg:text-xxl text-white lg:text-Microprimary font-bold">
              {tIndex("herobanner.Discover your")}
            </div>
            <div className="mt-4 lg:mx-0 mx-auto lg:mt-10">
                <a href={`${language}/register`} target="_blank" title="take test " className="inline-block  text-xl font-bold text-white rounded-5xl tracking-wide py-4 lg:py-6 px-8 bg-Microred-150">{tIndex("herobanner.Take test")}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Herosection;
