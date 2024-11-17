"use client";
import React from "react";
import { Close } from "@/public/assets/icon/Icon";
import Form_btn from "./Form_btn";
interface addCompanyProps {
    openVal: () => void;
  }

export default function Credits({openVal}:addCompanyProps) {
    return (
        <section className="w-full h-screen flex justify-end items-center bg-black/20 fixed top-0 right-0 z-50">
            <div className="bg-white p-4 flex flex-col w-[34.625rem] max-w-[34.625rem] overflow-y-auto h-screen gap-8">
                <div className="flex w-full justify-between items-center">
                    <span className="text- font-bold text-xl">Top up Credits</span>
                    <span className="cursor-poiter " onClick={openVal}><Close width={26} height={26} className="cursor-pointer" /></span>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm">Choose Value</span>
                        <input type="text" className="outline-none w-full px-4 py-3 border-[1px] border- rounded-lg text-sm" placeholder="Enter a value" />
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap -mt-2 gap-2">
                        <span className="px-4 py-3 border-[1px] w-[14.28%] text-center border rounded-lg text-sm w-fit hover:text-primary hover:border-primary cursor-pointer transtion-all duration-300">20</span>
                        <span className="px-4 py-3 border-[1px] w-[14.28%] text-center border rounded-lg text-sm w-fit hover:text-primary hover:border-primary cursor-pointer transtion-all duration-300">50</span>
                        <span className="px-4 py-3 border-[1px] w-[14.28%] text-center border rounded-lg text-sm w-fit hover:text-primary hover:border-primary cursor-pointer transtion-all duration-300">100</span>
                        <span className="px-4 py-3 border-[1px] w-[14.28%] text-center border rounded-lg text-sm w-fit hover:text-primary hover:border-primary cursor-pointer transtion-all duration-300">200</span>
                        <span className="px-4 py-3 border-[1px] w-[14.28%] text-center border rounded-lg text-sm w-fit hover:text-primary hover:border-primary cursor-pointer transtion-all duration-300">500</span>
                        <span className="px-4 py-3 border-[1px] w-[14.28%] text-center border rounded-lg text-sm w-fit hover:text-primary hover:border-primary cursor-pointer transtion-all duration-300">1000</span>
                        <span className="px-4 py-3 border-[1px] w-[14.28%] text-center border rounded-lg text-sm w-fit hover:text-primary hover:border-primary cursor-pointer transtion-all duration-300">2000</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm">#Reference</span>
                        <input type="text" className="outline-none w-full px-4 py-3 border-[1px] border- rounded-lg text-sm" placeholder="Enter a reference number" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm">Remarks</span>
                        <textarea name="Address" className="outline-none rounded-lg py-3 px-4 border-[1px] resize-none h-32 text-sm" placeholder="Enter a remarks" id="Address"></textarea>
                    </div>
                </div>
                <div className="flex w-full items-center gap-4 mt-auto">
                    <Form_btn onClick={openVal} border={'primary'} text={'primary'} bg={'white'} label="Cancel" />
                    <Form_btn border={'transprant'} text={'white'} bg={'primary'} label="Submit" />
                </div>
            </div>
        </section>
    );
}
