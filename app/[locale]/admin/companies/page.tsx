"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Pagination from "../components/Pagination";
import data from '../components/tabledata.json';
import Card from "../components/card";
import { Add, Align, CardNotVerified, CardVerified, UserCardIcon, Edit, Delete, Option } from "@/public/assets/icon/Icon";
import SearchBox from "../components/searchBox";
import Button from "../components/button";
import AddCompany from "../components/addCompany";
import CompanyInfo from "../components/CompanyInfo";
import Header from "../components/Header";
import EditCompany from "../components/EditCompany";
let PageSize = 5;

export default function Companies() {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    const [openval, setOpenval] = useState<boolean>(false);
    const [opencomInfo, setOpencomInfo] = useState<boolean>(false);
    const [openEditCompany, setOpenEditCompany] = useState<boolean>(false);
    const openPop = () => {
        setOpenval(!openval);
        document.body.classList.toggle('overflow-hidden');
    }
    const OpencomInfo = () => {
        setOpencomInfo(!opencomInfo);
        // console.log(opencomInfo)
        document.body.classList.toggle('overflow-hidden');
    }
    const openEdit = () => {
        setOpenEditCompany(!openEditCompany);
        document.body.classList.toggle("overflow-hidden");
      };
    return (
        <>
             <Header/>
            <div className="flex flex-col h-full mt-[40px] lg:mt-[70px]  md:px-[20px]  pt-[20px] pb-0 relative">
                {openval && <AddCompany openVal={openPop} />}
                {opencomInfo && <CompanyInfo OpencomInfo={OpencomInfo} />}
                {openEditCompany && <EditCompany openEditCompany={openEdit}/>}
                <div className="flex bg-[#fff] p-[20px] flex-col rounded-[10px] gap-[24px]    shadow-2xl lg:h-[90%] ">
                    <div className="text-3xl lg:text-[24px] text-[#000] font-[700] leading-[36px]">Companies</div>
                    <div className="flex flex-col md:flex-row gap-[10px]">
                        <Card icon={<UserCardIcon />} title="Companies" description="22359" />
                        <Card icon={<CardVerified />} title="Verified" description="22359" />
                        <Card icon={<CardNotVerified />} title="Not Verified" description="22359" />
                    </div>
                    <div className="flex flex-wrap xl:flex-nowrap gap-[10px]">
                        <SearchBox />
                        <Button label="Companies" rightIcon={<Align />} />
                        <Button label="Status" rightIcon={<Align />} />
                        <Button label="Create a new" onClick={openPop} leftIcon={<Add />} />

                    </div>
                    <div className="xl:overflow-x-hidden overflow-y-auto">
                        <table className="whitespace-nowrap">
                            <thead>
                                <tr>

                                    <th >Name</th>
                                    <th>Company code</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>No. of users</th>
                                    <th>Status</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {currentTableData.map(item => {
                                    return (
                                        <tr>
                                            <td  onClick={OpencomInfo}  className="cursor-pointer underline">{item.first_name}</td>
                                            <td className="">{item.last_name}</td>
                                            <td className="">{item.email}</td>
                                            <td className="">{item.phone}</td>
                                            <td className="">{item.phone}</td>
                                            <td className=""><span className="cursor-pointer py-2 px-6 bg-primary text-white rounded-full">Verified</span></td>
                                            <td className="">
                                                <div className="flex items-center gap-4">
                                                    <Edit onClick={openEdit} className="cursor-pointer" />
                                                    <Delete className="cursor-pointer" />
                                                    <Option className="cursor-pointer" />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
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
            </div></>

    );
}
