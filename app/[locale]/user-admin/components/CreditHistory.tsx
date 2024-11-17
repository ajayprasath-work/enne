"use client";
import React from "react";
import { Close, Export, Filter } from "@/public/assets/icon/Icon";
interface addCompanyProps {
    openVal: () => void;
}

export default function CreditHistory({ openVal }: addCompanyProps) {
    return (
        <section className="w-full h-screen flex justify-end items-center bg-black/20 fixed top-0 right-0 z-50">
            <div className="bg-white p-4 flex flex-col w-[34.625rem] max-w-[34.625rem] overflow-y-auto h-screen gap-8">
                <div className="flex w-full justify-between items-center">
                    <span className="text- font-bold text-xl">Credit History</span>
                    <span className="cursor-poiter " onClick={openVal}><Close  /></span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <div className="flex gap-4 items-center py-1 px-4 border rounded-lg w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.6665 11.6665L14.6665 14.6665" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.333 7.33325C13.333 4.01954 10.6467 1.33325 7.33301 1.33325C4.0193 1.33325 1.33301 4.01954 1.33301 7.33325C1.33301 10.647 4.0193 13.3333 7.33301 13.3333C10.6467 13.3333 13.333 10.647 13.333 7.33325Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                            <input type="text" placeholder="Search by name" className="outline-none text-[12px] w-full" />
                        </div>
                        <button className="flex items-center gap-2 py-1 px-4 pr-2 border rounded-lg text-[12px] font-semibold">
                            <span>Export</span>
                            <div className="mt-2">
                                <Export />
                            </div>
                        </button>
                        <button className="flex items-center gap-2 py-1 px-4 pr-2 border rounded-lg text-[12px] font-semibold">
                            <span>Filter</span>
                            <div className="mt-2">
                                <Filter />
                            </div>
                        </button>
                    </div>
                    <div className="flex bg-[#f7eff3] p-2.5 items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[#989692] text-[12px]">2024</span>
                            <span className="text-[18px] font-medium">October</span>
                        </div>
                        <span className="font-bold text-primary text-[20px]">+45</span>
                    </div>
                    <div className="flex flex-col gap-1.5 pb-1.5 border-b-[2px] border-[#D5B0C2]">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[15px] text-primary">Reference 0012</span>
                                <span className="text-[12px] text-[#989692]">01 Octber</span>
                            </div>
                            <span className="text-[#34C759]">+20</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[12px] text-[#989692]">Remarks:</span>
                                <span className="text-[15px] text-primary">One more token added</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 pb-1.5 border-b-[2px] border-[#D5B0C2]">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[15px] text-primary">Nicolle</span>
                                <span className="text-[12px] text-[#989692]">01 Octber</span>
                            </div>
                            <span className="text-[#FF3B30]">-1</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 pb-1.5 border-b-[2px] border-[#D5B0C2]">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[15px] text-primary">Reference 0012</span>
                                <span className="text-[12px] text-[#989692]">01 Octber</span>
                            </div>
                            <span className="text-[#34C759]">+20</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[12px] text-[#989692]">Remarks:</span>
                                <span className="text-[15px] text-primary">One more token added</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 pb-1.5 border-b-[2px] border-[#D5B0C2]">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[15px] text-primary">Lai Wah</span>
                                <span className="text-[12px] text-[#989692]">01 Octber</span>
                            </div>
                            <span className="text-[#FF3B30]">-1</span>
                        </div>
                    </div>
                    <div className="flex bg-[#f7eff3] p-2.5 items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[#989692] text-[12px]">2024</span>
                            <span className="text-[18px] font-medium">September</span>
                        </div>
                        <span className="font-bold text-primary text-[20px]">+65</span>
                    </div>
                    <div className="flex flex-col gap-1.5 pb-1.5 border-b-[2px] border-[#D5B0C2]">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[15px] text-primary">Reference 0012</span>
                                <span className="text-[12px] text-[#989692]">01 Octber</span>
                            </div>
                            <span className="text-[#34C759]">+20</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[12px] text-[#989692]">Remarks:</span>
                                <span className="text-[15px] text-primary">One more token added</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 pb-1.5 border-b-[2px] border-[#D5B0C2]">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[15px] text-primary">Lai Wah</span>
                                <span className="text-[12px] text-[#989692]">01 Octber</span>
                            </div>
                            <span className="text-[#FF3B30]">-1</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
