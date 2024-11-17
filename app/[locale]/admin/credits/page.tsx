"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Pagination from "../components/Pagination";
import data from '../components/tabledata.json';
import { CreditsIcon, Visibility, Excel } from "@/public/assets/icon/Icon";
import SearchBox from "../components/searchBox";
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
        <Header/>
        <div className="flex flex-col mt-[40px] lg:mt-[70px]  h-full md:px-[20px] pt-[20px] pb-0">
            <div className="flex bg-[#fff] p-[20px] flex-col rounded-[10px] gap-[24px] shadow-2xl h-[90%]">
                <div className="text-3xl lg:text-[24px] text-[#000] font-[700] leading-[36px]">Credits</div>
                <div className="flex flex-col md:flex-row gap-[10px]">
                    <SearchBox />
                    <div className="flex gap-[12px] py-[16px] text-nowrap px-[24px] items-center border-[0.5px] border-[rgba(0, 0, 0, 0.20)] rounded-[5px] 2xl:w-[10%] text-[16px] font-[500] text-[#000] leading-[24px]">
                        <span>Export</span>
                        <Image width={24} height={24} src="/assets/images/PDF.PNG" alt="PDF Export" />
                        <Excel />
                    </div>
                </div>
                <div className="xl:overflow-x-hidden overflow-y-auto">
                    <table>
                        <thead>
                            <tr>
                                <th>Company Code</th>
                                <th>Name</th>
                                <th>Balance</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentTableData.map((item, index) => (
                                <tr key={index}>
                                    <td className="min-w-[300px]">{item.first_name}</td>
                                    <td className="min-w-[300px]">{item.last_name}</td>
                                    <td className="min-w-[300px]">
                                        <div className="flex gap-3 items-center">
                                            <CreditsIcon />
                                            450
                                        </div>
                                    </td>
                                    <td className="w-[25%] min-w-[300px]">
                                        <div className="flex gap-3 items-center">
                                            <span
                                                className="text-white bg-primary py-1 lg:py-2 px-6 rounded-full cursor-pointer"
                                                onClick={openTopUp}
                                            >
                                                Top-up
                                            </span>
                                            <span onClick={openCreditHistory} className="cursor-pointer">
                                                <Visibility />
                                            </span>
                                            <Image className="cursor-pointer" width={24} height={24} src="/assets/images/PDF.PNG" alt="PDF Export" />
                                            <div className="cursor-pointer">
                                            <Excel />
                                            </div>
                                        </div>
                                    </td>
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
            {isCreditHistoryOpen && <CreditHistory openVal={closeCreditHistory} />}
            {isTopUpOpen && <TopUp openVal={closeTopUp} />}
        </div>
        </>
    );
}
