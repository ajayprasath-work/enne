import React from "react";
import { Resources_data } from "../../../components/Resources_data";
import Image from 'next/image';
import { DetailBanner } from "@/components/Herosection";
import Blog_icon from "@/components/Blog_icon";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Detail() {
    function handleClick(Id: number) {
        localStorage.setItem("id", Id.toString());
    }

    // Find the item with id: 1
    const specificItem = Resources_data.find(item => item.id === '1');

    return (
        <>
        <Menu/>
           
            {specificItem && (
                <DetailBanner Bg_path={specificItem.banner_img_path} title={specificItem.title}/>
            )}
               
            <section className="py-16 md:py-24 w-full px-5 md:px-0 md:w-10/12 lg:w-[70%] mx-auto text-lg text-[#041B37]">
                    {/* Render the specific item description */}
                    {/* {specificItem && (
                        <div>
                            <ul className="gap-7 flex flex-col">
                                {specificItem.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>

                            <div className="mt-6">
                                {Object.entries(specificItem.SubTitle).map(([type, content], index) => (
                                    <div className="mb-6">
                                        {Array.isArray(content) ? (
                                            <ul className="flex flex-col gap-7 mt-2.5">
                                                <li className="text-2xl font-bold">
                                                    {content[0]} 
                                                </li>
                                                {content.slice(1).map((subItem, subIndex) => (
                                                    <li key={subIndex} className="text-lg">
                                                        {subItem}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-lg">{content}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="my-7 border border-r-0 border-l-0 border-[#B9ABC8] py-2.5">
                                <span className="text-lg font-semibold text-[#D5B0C2]">
                                    By Cindy Leong... | January 2, 2018 | Business, Enneagram at Work | 0 Comments
                                </span>
                            </div>
                            <div className="p-4 md:p-8 bg-[#F9F9FB] text-[#043156] text-xl font-bold flex flex-col lg:flex-row gap-4 w-full justify-between items-center">
                                <span className="text-center">Share This Story, Choose Your Platform!</span>
                                <div className="flex">
                                   <Blog_icon links= {specificItem?.links}/>
                                </div>
                            </div>
                            <div className="mt-16 md:mt-24 flex flex-col gap-5">
                                <span className="text-3xl md:text-4xl xl:text-5xl font-bold">About the Author: Cindy Leong</span>
                                <div className="bg-[#041B37] p-4 md:p-8 rounded-[10px] text-white">
                                    <span className="leading-6">
                                        Cindy Leong is a sought after bilingual (English and Mandarin) Enneagram Personality Coach and Corporate Trainer in Asia, who can help you make sense of your professional and personal relationships. She is a member of International Coach Federation (ICF) and Singapore Psychological Society (SPS). Besides a Bachelor Degree in Psychology (majoring in Communications), she also has a Diploma in Business and has done in-depth research and studies in the areas of Organisational Behaviour and Gender Communications, both in Singapore and Taiwan. Through her expertise in corporate executive coaching, personal development, and relationship coaching, she has helped many professionals in their walk through challenging times, particularly in the areas of identity searching, relationship building and career breakthrough. Aside from being a published author of 2 books, she has also been invited by several radio stations and magazines as an expert guest speaker to provide insights into Enneagram, workplace conflicts and relationships.
                                    </span>
                                </div>
                            </div>
                        </div>
                    )} */}
            </section>
            <Footer/>
        </>
    );
}
