"use client";
import React from "react";
import { Close, Edit, Delete } from "@/public/assets/icon/Icon";
interface addCompanyProps {
    OpencomInfo: () => void;
}

export default function CompanyInfo({ OpencomInfo }: addCompanyProps) {
    return (
        <section className="w-full h-screen flex justify-end items-center bg-primary/10 fixed top-0 right-0 z-50">
            <div className="bg-white p-4 flex flex-col w-[34.625rem] max-w-[34.625rem] gap-5 text-sm h-screen">
                <div className="flex w-full justify-between items-center">
                    <span className="text- font-bold text-xl">Company Information</span>
                    <div className="flex gap-3 items-center">
                        <Edit className="cursor-pointer" />
                        <Delete className="cursor-pointer" />
                        <span className="cursor-poiter mt-3 text-primary" onClick={OpencomInfo}><Close className="cursor-pointer"  width={26} height={26}/></span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="p-2.5 border-b-[3px] border-primary w-fit">
                        <span>Overview</span>
                    </div>
                    <div className="flex gap-8">
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex w-full">
                                <span className="w-1/2">Name:</span>
                                <span className="w-1/2">Tech Star</span>
                            </div>
                            <div className="flex w-full">
                                <span className="w-1/2">Email:</span>
                                <span className="w-1/2">nicolle.loh@decision-science.com</span>
                            </div>
                            <div className="flex w-full">
                                <span className="w-1/2">Mobile:</span>
                                <span className="w-1/2">+60 123456789</span>
                            </div>
                            <div className="flex w-full">
                                <span className="w-1/2">Country:</span>
                                <span className="w-1/2">Malaysia</span>
                            </div>
                            <div className="flex w-full">
                                <span className="w-1/2">Zip code:</span>
                                <span className="w-1/2">46300</span>
                            </div>
                            <div className="flex w-full">
                                <span className="w-1/2">Tax Number:</span>
                                <span className="w-1/2">202101001662</span>
                            </div>
                            <div className="flex w-full">
                                <span className="w-1/2">Address:</span>
                                <span className="w-1/2">C-22-2, 3 Two Square, Jalan 19/1, Dataran 3 Dua, 46300 Petaling Jaya, Selangor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
