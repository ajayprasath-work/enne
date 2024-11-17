"use client";
import React, { useEffect, useState } from "react";
import { DetailBanner } from "@/components/Herosection";
import { Resources_data } from "@/components/Resources_data";
import Image from "next/image";
import Blog_icon from "@/components/Blog_icon";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

 
export default function detail() {
  const id = localStorage.getItem("id");

  return (
    <>
     <Menu/>
      {Resources_data.map(
        (item) =>
          item.id === id && (
            <DetailBanner Bg_path={item.banner_img_path} title={item.title} />
          )
      )}
     
      <section className="py-16 md:py-24 w-full px-5 md:px-0 md:w-10/12 lg:w-[70%] mx-auto text-lg text-[#041B37]">
        <div className="flex flex-col">
          <div className="text-2xl font-bold">
            Be an involved leader, not a controlling authoritarian
          </div>
          <div className="text-lg mt-8">
            Being a leader is not easy. Balancing your own motivations and ways
            of working with that of a diverse team is a challenging task. This
            week we look at body-centred leaders – types 8, 9 and 1 who pride
            themselves as being involved, and in control of their environment
            and team.
          </div>
          <div className="text-lg mt-8">
            As their base emotion is anger, it influences their actions in aims
            of taking control and to always be present with their team. When an
            external force messes with them and they lose control, or if someone
            interferes with their presence within the team, they can be angered.
            These leaders take pride in their work and use their gut to
            influence their decision making.
          </div>
          <div className="text-lg mt-8">
            <span className="font-bold">Type 1 Perfectionist</span> leaders work
            hard with their team and are dependable at all times. They set high
            expectations not just for others but for themselves as well which
            could lead them to be self critical and rigid in their ways.
          </div>
          <div className="text-lg mt-8">
            <span className="font-bold">Type 8 Challenging</span> leaders are
            like guardians where they protect their team with passion and
            fairness. They are not afraid in holding their ground of what they
            believe is truth. Their defensive instincts are also attributed to
            the fact that they fear vulnerability.
          </div>
          <div className="text-lg mt-8">
            <span className="font-bold">Type 9 Peacemaking</span> leaders
            prioritize maintaining peace and harmony within their teams and puts
            others before themselves. As such, they can become indecisive when
            needing to make difficult decisions as they know that not everyone
            will be happy. Nonetheless, this open-minded and caring nature that
            holds them back in difficult decisions, makes them excellent
            mediators in conflict.
          </div>
          <div className="my-7 border border-r-0 border-l-0 border-[#B9ABC8] py-2.5">
            <span className="text-lg font-semibold text-[#D5B0C2]">
              By Cindy Leong... | January 2, 2018 | Business, Enneagram at Work
              | 0 Comments
            </span>
          </div>
          <div className="p-4 md:p-8 bg-[#F9F9FB] text-[#043156] text-xl font-bold flex flex-col lg:flex-row gap-4 w-full justify-between items-center">
            <span className="text-center">
              Share This Story, Choose Your Platform!
            </span>
            <div className="flex">
            {
                Resources_data.map((items) =>(
                  items.id === id && items.links && <Blog_icon  links= {items.links}/>
                ))
              }
            </div>
          </div>
          <div className="mt-16 md:mt-24 flex flex-col gap-5">
            <span className="text-3xl md:text-4xl xl:text-5xl font-bold">
              About the Author: Cindy Leong
            </span>
            <div className="bg-[#041B37] p-4 md:p-8 rounded-[10px] text-white">
              <span className="leading-6">
                Cindy Leong is a sought after bilingual (English and Mandarin)
                Enneagram Personality Coach and Corporate Trainer in Asia, who
                can help you make sense of your professional and personal
                relationships. She is a member of International Coach Federation
                (ICF) and Singapore Psychological Society (SPS). Besides a
                Bachelor Degree in Psychology (majoring in Communications), she
                also has a Diploma in Business and has done in-depth research
                and studies in the areas of Organisational Behaviour and Gender
                Communications, both in Singapore and Taiwan. Through her
                expertise in corporate executive coaching, personal development,
                and relationship coaching, she has helped many professionals in
                their walk through challenging times, particularly in the areas
                of identity searching, relationship building and career
                breakthrough. Aside from being a published author of 2 books,
                she has also been invited by several radio stations and
                magazines as an expert guest speaker to provide insights into
                Enneagram, workplace conflicts and relationships.
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
