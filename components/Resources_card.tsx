"use client"
import React from "react";
import { Resources_data } from "./Resources_data";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n, useScopedI18n } from '@/locales/client'

export default function Resources_card(){
    const currentPath = usePathname();
    const [language, setLanguage] = useState<string | null>(null);
    const PathName = currentPath;
    const tIndex = useScopedI18n("IndexPage");

    function handleClick(Id:string,Path:string){
        localStorage.setItem("id",Id);
        const url = `${language}${Path}`;
        window.open(url, '_blank');
    }
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== "undefined") {
          const storedLanguage = localStorage.getItem("Language");
          setLanguage(storedLanguage);
        }
      }, []);

    const CardData = Resources_data.map((items) => (
        <div key={items.id} className="w-full md:w-[calc(50%_-_0.833rem)] xl:w-[calc(33.33%_-_0.833rem)] flex flex-col bg-gray-180 rounded-xl transition-all duration-500 hover:shadow-xl">
            <div className="w-full h-[160px] md:h-428">
                <img src={items.type_img_path} title={items.title} alt={items.title} className="w-full h-full object-cover object-center rounded-20"/>
            </div>
            <div className="flex flex-col text-primary p-5 md:p-6">
                <div className="text-2xl font-bold mb-6">{items.title}</div>
                <div className="mb-9 text-base text-[#8E8E93] leading-normal line-clamp-3">{items.description[0]}</div>
                <button title="enneagram-detail" onClick={() => handleClick(items.id,items.source_path)} className="w-fit px-5 py-2.5 rounded-full text-white leading-normal font-medium text-base bg-primary">{tIndex("heroBanner.Learn More")}</button>
            </div>
        </div>
    ))
    return(
        <>
          {CardData}
        </>
    )
}