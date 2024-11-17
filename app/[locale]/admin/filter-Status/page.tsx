"use client";
import React, { useMemo, useState } from "react";
import Pagination from "../components/Pagination";
import data from '../components/tabledata.json';
import Image from "next/image";
import AddCompany from "../components/addCompany";
import CompanyInfo from "../components/CompanyInfo";
import Header from "../components/Header";
let PageSize = 6;

export default function filterStatus() {
    const [currentPage, setCurrentPage] = useState(1);
    const [openval, setOpenval] = useState<boolean>(false);
    const [opencomInfo, setOpencomInfo] = useState<boolean>(false);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const openPop = () => {
        setOpenval(!openval);
        document.body.classList.toggle("overflow-hidden");
    };
    const OpencomInfo = () => {
        setOpencomInfo(!opencomInfo);
        document.body.classList.toggle("overflow-hidden");
    };

    return (
        <>
            <Header />
            <div className="flex flex-col mt-[40px] lg:mt-[70px]  h-full md:px-[20px] pt-[20px] pb-0 relative">
                {openval && <AddCompany openVal={openPop} />}
                {opencomInfo && <CompanyInfo OpencomInfo={OpencomInfo} />}
                <div className="flex bg-[#fff] p-4 lg:p-[20px] flex-col rounded-[10px] gap-[10px] shadow-2xl mb-[20px]">
                    <div className="text-[24px] text-[#000] font-[700] leading-[36px] flex flex-col md:flex-row gap-4 md:items-center justify-between">
                        <span>Ennealysis Report - All</span>
                        <div className="flex items-center gap-5 w-full md:w-fit justify-between">
                            <span>Total - 6</span>
                            <span className="flex items-center py-4 px-6 gap-2.5 text-base font-normal border-[1px] rounded-[5px]">
                                Export
                                <Image width={24} height={24} src="/assets/images/PDF.PNG" alt="PDF Export" />
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="text-[20px] text-[#D5B0C2] font-bold">Pending</span>
                        <div className="overflow-x-scroll lg:overflow-x-hidden overflow-y-auto mt-2.5">
                            <table className="whitespace-nowrap">
                                <thead>
                                    <tr>
                                        <th>User Name</th>
                                        <th>Company code</th>
                                        <th>Company name</th>
                                        <th>Ennegram Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTableData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.first_name}</td>
                                            <td>{item.last_name}</td>
                                            <td className="upercase">{item.last_name}</td>
                                            <td>2W3</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-[#C7B7D8] font-semibold">
                                        <td></td>
                                        <td></td>
                                        <td className="text-end">Total:</td>
                                        <td className="text-start">6</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="flex w-full md:flex-row flex-col mt-4 lg:mt-auto items-center justify-between h-[10%] ">
                    <div className="flex w-fit gap-[5px]">
                        <p className="text-[rgba(0,0,0,0.60)] font-[Poppins] text-sm font-medium leading-[160%] text-nowrap tracking-[0.28px]">Showing</p>
                        <p className="text-black font-[Poppins] text-base font-medium leading-[160%] text-nowrap tracking-[0.32px]">1 to 8 of 120</p>
                        <p className="text-[rgba(0,0,0,0.60)] font-[Poppins] text-sm font-medium leading-[160%] text-nowrap tracking-[0.28px] mt-[1px]">users</p>
                    </div>
                    <Pagination
                        className="pagination-bar !gap-1"
                        currentPage={currentPage}
                        totalCount={data.length}
                        pageSize={PageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
        </>
    );
}
