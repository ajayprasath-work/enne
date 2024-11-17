"use client"
import React from "react";
import { Data } from "./Data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n, useScopedI18n } from '@/locales/client'

export default function Card(){
    
    const currentPath = usePathname();
    const [language, setLanguage] = useState<string | null>(null);
    const PathName = currentPath;
    const tIndex = useScopedI18n("IndexPage");
    function handleClick(Id:string){
        localStorage.setItem("id",Id);
        const url = `${language}enneagram-detail`;
        window.open(url, '_blank');
    }
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== "undefined") {
          const storedLanguage = localStorage.getItem("Language");
          setLanguage(storedLanguage);
        }
      }, []);

    const CardData = Data.map((items) => (
        <div className="p-4 md:p-6 w-full md:w-[calc(50%_-_0.833rem)] xl:w-[calc(33.33%_-_0.833rem)] flex flex-col rounded-xl shadow-lg gap-8">
            <div className="w-full h-428">
                <Image src={items.banner_img_path} title={items.type} alt={items.type} width={300} height={428} className="w-full h-full object-cover object-center rounded-20"/>
            </div>
            <div className="flex flex-col text-primary">
                <div className="text-2xl font-bold mb-6">Type {items.id}: {items.type}</div>
                <div className="mb-9 text-base leading-normal line-clamp-3">{items.description[0]}</div>
                <a  title="enneagram-detail" onClick={() => handleClick(items.id)} className="cursor-pointer w-fit px-5 py-2.5 rounded-full text-white leading-normal font-medium text-base bg-primary">Read more</a>
            </div>
        </div>
    ))
    return(
        <>
          {CardData}
        </>
    )
}

export const DetailCard = () => {
    const Id = localStorage.getItem("id");

    const ImageCards = Data.map((item) => (
        item.id === Id ?(
        <div className="w-full px-5 md:px-0 md:w-10/12 mx-auto flex flex-wrap gap-5 text-white">
            <div className="w-full md:w-[calc(50%_-_0.938rem)] lg:w-[calc(25%_-_0.938rem)] relative h-96 rounded-20 overflow-hidden group">
                <Image src="/assets/images/lence_img.webp" alt="lence_image" title="lence_image" width={300} height={400} className="w-full h-full object-cover object-center relative" />
                <div className="absolute bg-linear-bg bottom-0 left-0 opacity-0 p-7 w-full h-3/4 flex flex-col gap-1.5 justify-end group-hover:opacity-100 transition-all duration-300">
                   <span className="font-bold text-2xl">World View</span>
                   <span className="text-base leading-normal">{item.characteristics[0]}</span>
                </div>
            </div>
            <div className="w-full md:w-[calc(50%_-_0.938rem)] lg:w-[calc(25%_-_0.938rem)] relative h-96 rounded-20 overflow-hidden group">
                <Image src="/assets/images/women_image.webp" alt="woman_image" title="woman_image" width={300} height={400} className="w-full h-full object-cover object-center relative" />
                <div className="absolute bg-linear-bg bottom-0 left-0 opacity-0 p-7 w-full h-3/4 flex flex-col gap-1.5 justify-end group-hover:opacity-100 transition-all duration-300">
                   <span className="font-bold text-2xl">Thought Pattern</span>
                   <span className="text-base leading-normal">{item.characteristics[1]}</span>
                </div>
            </div>
            <div className="w-full md:w-[calc(50%_-_0.938rem)] lg:w-[calc(25%_-_0.938rem)] relative h-96 rounded-20 overflow-hidden group">
                <Image src="/assets/images/eggs_img.webp" alt="eggs_image" title="eggs_image" width={300} height={400} className="w-full h-full object-cover object-center relative" />
                <div className="absolute bg-linear-bg bottom-0 left-0 opacity-0 p-7 w-full h-3/4 flex flex-col gap-1.5 justify-end group-hover:opacity-100 transition-all duration-300">
                   <span className="font-bold text-2xl">Emotional Pattern</span>
                   <span className="text-base leading-normal">{item.characteristics[2]}</span>
                </div>
            </div>
            <div className="w-full md:w-[calc(50%_-_0.938rem)] lg:w-[calc(25%_-_0.938rem)] relative h-96 rounded-20 overflow-hidden group">
                <Image src="/assets/images/boy_img.webp" alt="boy_image" title="boy_image" width={300} height={400} className="w-full h-full object-cover object-center relative" />
                <div className="absolute bg-linear-bg bottom-0 left-0 opacity-0 p-7 w-full h-3/4 flex flex-col gap-1.5 justify-end group-hover:opacity-100 transition-all duration-300">
                   <span className="font-bold text-2xl">Defence Mechanism</span>
                   <span className="text-base leading-normal">{item.characteristics[3]}</span>
                </div>
            </div>
        </div>
    ):null))

    return (
        <section className="py-16 md:py-24 w-full">
            {ImageCards}
        </section>
    );
}