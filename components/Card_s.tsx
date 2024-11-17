"use client";
import React from "react";
import { Resources_data } from "./Resources_data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Card_s() {
    const PathName = usePathname();
    const currentPath = PathName;
    const [language, setLanguage] = useState<string | null>(null);
      useEffect(() => {
          if (typeof window !== "undefined") {
            const storedLanguage = localStorage.getItem("Language");
            setLanguage(storedLanguage);
          }
        }, []);
    function handleClick(Id: string) {
        localStorage.setItem("id", Id);
        
    }

    const CardData = Resources_data.map((items:any) => (
        <div
            key={items.id} 
            className="p-6 w-full md:w-[calc(50%_-_0.833rem)] xl:w-[calc(33.33%_-_0.833rem)] flex flex-col rounded-xl shadow-lg gap-8"
        >
            <div className="w-full h-428">
                <Image
                    src={items.type_img_path}
                    title={items.type}
                    alt={items.type}
                    width={300}
                    height={428}
                    className="w-full h-full object-cover object-center rounded-20"
                />
            </div>
            <div className="flex flex-col text-primary">
                <div className="text-2xl font-bold mb-6">{items.title}</div>
                <div className="mb-9 text-base leading-normal line-clamp-3">
                    {items.description[0]}
                </div>
                <a
                    href={`${language}${items.source_path}`}
                    onClick={() => handleClick(items.id)}
                    target="_blank"
                    title="enneagram-detail"
                    className="w-fit px-5 py-2.5 rounded-full text-white leading-normal font-medium text-base bg-primary"
                >
                    Read more
                </a>
            </div>
        </div>
    ));
    
    return <>{CardData}</>;
}
