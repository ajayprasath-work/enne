"use client";
import React from "react";
import { Data } from "./Data";
import Image from "next/image";

export const Detail = () => {
    const Id = "1";
    const currentItem = Data.find((item) => item.id === Id);

    if (!currentItem) {
        return <div className="w-full text-center text-lg">No details available for this ID.</div>;
    }

    const { description, type_img_path , id , strength , weaknesses } = currentItem;

    return (
        <section className="flex flex-col pb-16 md:pb-36 gap-12">
            <div className="w-full px-5 md:px-0 md:w-3/4 mx-auto flex flex-col gap-8">
                {description.map((desc) => (
                    <div className="text-lg font-medium leading-normal">{desc}</div>
                ))}
            </div>
            <div className="w-full px-5 md:px-0 md:w-10/12 xl:w-3/5 mx-auto flex flex-col md:flex-row border border-gray-100 rounded-2xl overflow-hidden">
                <div className="w-full md:w-3/5 h-fit md:h-600 relative flex items-center justify-center">
                    <Image src={type_img_path} alt={`Type image ${id}`} width={500} height={700} className="w-auto xl:w-full h-full object-contain"/>
                </div>
                <div className="w-full md:w-2/5 bg-primary px-10 pt-9 pb-9 lg:pb-0 flex flex-col gap-8 text-white">
                    <span className="text-2xl font-bold ">Key Strengths</span>
                    <ul className="flex flex-col gap-1.5 pl-5">
                       {strength?.map((listItem) => (
                           <li className="list-disc text-lg leading-normal">{listItem}</li>
                       ))}
                    </ul>
                    <span className="text-2xl font-bold ">Key Strengths</span>
                    <ul className="flex flex-col gap-1.5 pl-5">
                       {weaknesses?.map((listItem) => (
                           <li className="list-disc text-lg leading-normal">{listItem}</li>
                       ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
