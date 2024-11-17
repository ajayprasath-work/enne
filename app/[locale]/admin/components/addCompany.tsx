"use client";
import React from "react";
import { Close } from "@/public/assets/icon/Icon";
import Form_btn from "./Form_btn";
interface addCompanyProps {
    openVal: () => void;
  }

export default function AddCompany({openVal}:addCompanyProps) {
    return (
        <section className="w-full h-screen flex justify-end items-center backdrop-blur-sm bg-black  bg-opacity-35 fixed top-0 right-0 z-50">
            <div className="bg-white p-4 flex flex-col w-[34.625rem] max-w-[34.625rem] overflow-y-scroll scroll_1 h-screen gap-8">
                <div className="flex w-full justify-between items-center">
                    <span className="text- font-bold text-xl">Add Company</span>
                    <span className="cursor-pointer " onClick={openVal}><Close width={26} height={26}/></span>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm">Registration code <span className="text-red-500">*</span></span>
                        <input type="text" className="outline-none w-full px-4 py-3 border-[1px] border- rounded-lg text-sm" placeholder="Enter a registration code" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm">Company code </span>
                        <input type="text" className="outline-none w-full px-4 py-3 border-[1px] border- rounded-lg text-sm" placeholder="Enter a company code" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm">Name</span>
                        <input type="text" className="outline-none w-full px-4 py-3 border-[1px] border- rounded-lg text-sm" placeholder="Enter a Name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm">Email</span>
                        <input type="text" className="outline-none w-full px-4 py-3 border-[1px] border- rounded-lg text-sm" placeholder="Enter a Email" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm">Mobile</span>
                        <input type="text" className="outline-none w-full px-4 py-3 border-[1px] border- rounded-lg text-sm" placeholder="Enter a Mobile number" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm">Address</span>
                        <textarea name="Address" className="outline-none rounded-lg py-3 px-4 border-[1px] resize-none h-32 text-sm" placeholder="Address" id="Address"></textarea>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm">Country</span>
                        <select
                            id="Country"
                            className={`py-3 px-4 border-[1px] rounded-lg  text-sm outline-none`}
                        >
                            <option value="">Select a Country</option>
                            <option value="India">India</option>
                            <option value="malaysia">malaysia</option>
                            <option value="china">china</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col gap-2 w-1/2">
                            <span className="text-sm">Zip code</span>
                            <select
                                id="Zip_code"
                                className={`py-3 px-4 border-[1px] rounded-lg  text-sm outline-none`}
                            >
                                <option value="">Select a zip code</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <span className="text-sm">Tax Number</span>
                            <input type="text" className="outline-none w-full px-4 py-3 border-[1px] border- rounded-lg text-sm" placeholder="Enter a Number" />
                        </div>
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
