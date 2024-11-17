"use client";
import React, { useMemo, useState } from "react";
import Pagination from "../components/Pagination";
import data from '../components/tabledata.json';
import Card from "../components/Card";
import { Align, CardNotVerified, CardVerified, UserCardIcon } from "@/public/assets/icon/Icon";
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";
import Header from "../components/Header";
import CompanyInfo from "../components/CompanyInfo";
let PageSize = 5;

export default function user() {
    const [currentPage, setCurrentPage] = useState(1);
    const [opencomInfo, setOpencomInfo] = useState<boolean>(false);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    const OpencomInfo = () => {
        setOpencomInfo(!opencomInfo);
        // console.log(opencomInfo)
        document.body.classList.toggle('overflow-hidden');
    }
    return (
        <>
          <Header />
          <div className="flex flex-col h-full md:px-[20px]  pt-[20px] pb-0  mt-[40px] lg:mt-[70px]">
          {opencomInfo && <CompanyInfo OpencomInfo={OpencomInfo} />}
            <div className="flex bg-[#fff] p-[20px] flex-col rounded-[10px] gap-[24px] shadow-2xl md:h-[90%] ">
                <div className="text-3xl lg:text-[24px] text-[#000] font-[700] leading-[36px]">Users</div>
                <div className="flex flex-col md:flex-row gap-[10px]">
                    <Card icon={<UserCardIcon />} title="Users" description="22359" />
                    <Card icon={<CardVerified />} title="Verified" description="22359" />
                    <Card icon={<CardNotVerified />} title="Not Verified" description="22359" />
                </div>
                <div className="flex flex-col md:flex-row gap-[10px]">
                    <SearchBox />
                    <Button label="Status" rightIcon={<Align />} />
                </div>
                <div className="xl:overflow-x-hidden overflow-y-auto">
                    <table className="whitespace-nowrap">
                        <thead>
                            <tr>
                                <th> <input
                                    type="checkbox"
                                    className="flex items-center justify-center appearance-none w-4 h-4 bg-transparent border-2 border-primary relative cursor-pointer before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-[] before:scale-0 before:bg-primary before:transition-all before:duration-300 checked:before:scale-[1] focus:outline-none "
                                /></th>
                                <th>Name</th>
                                <th>Company code</th>
                                <th>Registration Code</th>
                                <th>Email</th>
                                <th>NRIC</th>
                                <th>Phone</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody >
                            {currentTableData.map(item => {
                                return (
                                    <tr>
                                        <td><input
                                            type="checkbox"
                                            className="flex items-center justify-center appearance-none w-4 h-4 bg-transparent border-2 border-primary relative cursor-pointer before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-[] before:scale-0 before:bg-primary before:transition-all before:duration-300 checked:before:scale-[1] focus:outline-none "
                                        /></td>
                                        <td className="underline cursor-pointer" onClick={OpencomInfo}>{item.first_name}</td>
                                        <td className="">{item.last_name}</td>
                                        <td className="">{item.email}</td>
                                        <td className="">{item.phone}</td>
                                        <td className="">{item.id}</td>
                                        <td className="">{item.phone}</td>
                                        <td className="">{item.id}</td>
                                        <td className="">male</td>
                                        <td className="">
                                            <span className={item.status === 'Verified' ? 'text-white w-full bg-red-850 rounded-full py-2 px-6' : 'text-primary w-full border-light-550 border bg-light-250  rounded-full py-2 px-6'}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 w-full  mt-4 items-center  justify-between h-[10%] ">
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
        </div>
        </>
    );
}
