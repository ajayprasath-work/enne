"use client";
import React from "react";
import Image from "next/image";
import { Calender, CardCompanies, CardCredits, CardNotVerified, CardVerified, UserCardIcon } from "@/public/assets/icon/Icon";
import Card from "../components/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import ChartOverview from "../components/Chart";
import Header from "../components/Header";

export default function ForgetPassword() {
  const [language, setLanguage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("Language");
      setLanguage(storedLanguage);
    }
  }, []);
  return (
    <>
    <Header/>
    <div className="flex w flex-col !h-full p-5 mt-[40px] lg:mt-[70px]  lg:p-[20px]  ">
      <div className="flex flex-col lg:bg-[#fff] lg:p-[20px] lg:rounded-[10px] gap-[24px]    lg:shadow-2xl lg:!h-full ">
        <div className="flex flex-col gap-[4px]">
          <div className=" text-3xl lg:text-[24px] text-[#000] font-[700] leading-[36px]">Dashboard</div>
          <div className="flex flex-row gap-[10px]">
            <Calender />
            <p className="text-[16px] font-[500]">Jan 01, 2023 - Dec 31, 2023</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[24px] w-full h-full ">
          <div className="flex flex-col w-full lg:w-[65%] gap-[12px] h-full">
            <div className="flex flex-col md:flex-row gap-[10px]">
              <Card icon={<CardCredits />} title="Credits" description="22359" />
              <Card icon={<CardCompanies />} title="Companies" description="22359" />
              <Card icon={<UserCardIcon />} title="Users" description="22359" />
            </div>
            <ChartOverview />
          </div>
          <div className="flex flex-col lg:w-[35%] lg:mb-0 mb-10 p-[16px] h-full border-[0.5px] border-[rgba(0, 0, 0, 0.20)] rounded-[12px] drop-shadow-md">
            <div className="text-[#1c1c1c] text-3xl lg:text-xl font-bold font-['Poppins'] leading-7 tracking-tight mb-[16px]">Recent test taken</div>
            <div className="h-[54px] p-2 rounded-[5px] border border-[#c7b7d8] justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 h-[38px] justify-start items-center gap-2 flex">
                <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-start inline-flex">
                  <div className="self-stretch text-[#1c1c1c] md:text-xl lg:text-sm font-medium font-['Poppins'] leading-snug tracking-tight">Olivia Martin</div>
                  <div className="self-stretch"><span className="text-[#041b37] md:text-lg lg:text-xs font-medium font-['Poppins'] leading-none tracking-tight">techstar | </span><span className="text-[#1c1c1c]/40 text-xs font-medium font-['Poppins'] leading-none tracking-tight">olivia.martin@email.com</span></div>
                </div>
              </div>
              <div className="rounded-lg flex-col justify-center items-start inline-flex">
                <div className="self-stretch text-[#043156] md:text-lg lg:text-xs font-medium font-['Poppins'] leading-none tracking-tight">Sent</div>
              </div>
            </div>
            <a href="/dashboard/Reports" className="mt-2 md:mt-2 lg:mt-auto">
              <button className="w-full bg-light-250 py-3 text-primary text-base md:text-2xl rounded-lg border border-[#E7F7FA]">Show all</button>
            </a>
          </div>
        </div>
      </div>

    </div>
    </>
  );

}
