"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Pagination from "../components/Pagination";
import data from '../components/tabledata.json';
import { Excel, CardCredits } from "@/public/assets/icon/Icon";
import SearchBox from "../components/SearchBox";
import CreditHistory from "../components/CreditHistory";
import TopUp from "../components/Credits";
import Header from "../components/Header";

let PageSize = 5;

export default function Credits() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isCreditHistoryOpen, setIsCreditHistoryOpen] = useState(false);
    const [isTopUpOpen, setIsTopUpOpen] = useState(false);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const openCreditHistory = () => {
        setIsCreditHistoryOpen(true);
    };

    const closeCreditHistory = () => {
        setIsCreditHistoryOpen(false);
    };

    const openTopUp = () => {
        setIsTopUpOpen(true);
    };

    const closeTopUp = () => {
        setIsTopUpOpen(false);
    };

    return (
        <>
        <Header />
        <div className="flex flex-col h-full md:px-[20px] pt-[20px] pb-0 mt-[40px] lg:mt-[70px]">
            <div className="flex bg-[#fff] p-[20px] flex-col rounded-[10px] gap-[24px] shadow-2xl h-[90%]">
                <div className="text-3xl lg:text-[24px] text-[#000] font-[700] leading-[36px]">Credits</div>
                <div className="w-full flex justify-between  rounded-lg border-[0.5px] border-[rgba(0, 0, 0, 0.20)]  p-4 items-center  ">
                  <div className="w-[40%] flex items-center gap-3">
                         <div className="text-red-850">
                        <CardCredits/>
                         </div>
                         <div className="flex flex-col ">
                               <div className="text-primary text-base tracking-wide font-normal">
                               Available Credits
                               </div>
                               <div className="text-black font-bold text-2xl">
                               200
                               </div>
                         </div>
                  </div>
                  <div className="w-[60%] flex justify-end">
                     <button onClick={openTopUp} type="button" className="bg-red-850 text-white px-5 py-2.5 border font-medium rounded-full">Top-up</button>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-[10px]">
                    <SearchBox />
                    <div className="flex gap-[12px] py-[16px] text-nowrap px-[24px] items-center border-[0.5px] border-[rgba(0, 0, 0, 0.20)] rounded-[5px] 2xl:w-[10%] text-[16px] font-[500] text-[#000] leading-[24px]">
                        <span>Export</span>
                        <Image width={24} height={24} src="/assets/images/PDF.PNG" alt="PDF Export" />
                        <Excel />
                    </div>
                </div>
                <div className="xl:overflow-x-hidden overflow-x-scroll overflow-y-auto">
                    <table className="whitespace-nowrap">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Registration Code</th>
                                <th>Email</th>
                                <th>Credit Used</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentTableData.map((item, index) => (
                                <tr className=" border-b" key={index}>
                                    <td className="">{item.first_name}</td>
                                    <td className="">{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td className="text-red-850">02</td>
                                    {/* <td className="">
                                        <div className="flex gap-3 items-center">
                                            <CreditsIcon />
                                            450
                                        </div>
                                    </td>
                                    <td className="w-[25%] min-w-[300px]">
                                        <div className="flex gap-3 items-center">
                                            <span
                                                className="text-white bg-red-150 py-1 lg:py-2 px-6 rounded-full cursor-pointer"
                                                onClick={openTopUp}
                                            >
                                                Top-up
                                            </span>
                                            <span onClick={openCreditHistory} className="cursor-pointer">
                                                <Visibility />
                                            </span>
                                            <Image width={24} height={24} src="/assets/images/PDF.PNG" alt="PDF Export" />
                                            <Excel />
                                        </div>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 w-full mt-4 items-center  justify-between h-[10%] ">
                    <div className=" flex w-fit gap-[5px]">
                        <p className="text-[rgba(0,0,0,0.60)] [font-family:Poppins] text-sm font-medium leading-[160%] text-nowrap tracking-[0.28px]">Showing</p>
                        <p className="text-black [font-family:Poppins] text-base font-medium leading-[160%] text-nowrap tracking-[0.32px]">1 to 8 of 120</p>
                        <p className="text-[rgba(0,0,0,0.60)] [font-family:Poppins] text-sm font-medium leading-[160%] text-nowrap tracking-[0.28px] mt-[1px]">users</p>
                    </div>
                    <Pagination
                        className="pagination-bar !gap-1"
                        currentPage={currentPage}
                        totalCount={data.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>

            {/* Conditionally render the CreditHistory and TopUp popups */}
            {isCreditHistoryOpen && <CreditHistory openVal={closeCreditHistory} />}
            {isTopUpOpen && <TopUp openVal={closeTopUp} />}
        </div>
        </>
    );
}
