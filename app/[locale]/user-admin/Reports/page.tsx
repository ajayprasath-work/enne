"use client";
import React, { useMemo, useState } from "react";
import Pagination from "../components/Pagination";
import data from '../components/tabledata.json';
import Card from "../components/Card";
import {
    Align,
    CardNotVerified,
    CardVerified,
    CardCompanies,
    Downlaod,
    Forward,
} from "@/public/assets/icon/Icon";
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";
import AddCompany from "../components/AddCompany";
import CompanyInfo from "../components/CompanyInfo";
import DropDown from "../components/DropDown";
import DropDownCheck from "../components/DropDownCheck";
import Header from "../components/Header";
let PageSize = 5;

export default function Reports() {
    const [currentPage, setCurrentPage] = useState(1);
    const [openval, setOpenval] = useState<boolean>(false);
    const [opencomInfo, setOpencomInfo] = useState<boolean>(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null); // State to track the open dropdown

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

    // Function to toggle Companies dropdown
    const toggleCompaniesDropdown = () => {
        setOpenDropdown(openDropdown === "companies" ? null : "companies");
    };

    // Function to toggle Status dropdown
    const toggleStatusDropdown = () => {
        setOpenDropdown(openDropdown === "status" ? null : "status");
    };

    return (
        <> 
           <Header />
            <div className="flex flex-col h-full px-5 lg:px-[20px] pt-[20px] pb-0 relative mt-[40px] lg:mt-[70px]">
                {openval && <AddCompany openVal={openPop} />}
                {opencomInfo && <CompanyInfo OpencomInfo={OpencomInfo} />}
                <div className="flex bg-[#fff] p-4 lg:p-[20px] flex-col rounded-[10px] gap-[24px] shadow-2xl lg:h-[90%] ">
                    <div className="text-[24px] text-[#000] font-[700] leading-[36px]">Reports</div>
                    <div className="flex flex-col md:flex-row gap-[10px]">
                        <Card icon={<CardVerified />} title="Completed" description="23923" />
                        <Card icon={<CardNotVerified />} title="Pending" description="4" />
                        <Card icon={<CardCompanies />} title="Companies" description="22359" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-[10px]">
                        <SearchBox />
                        <div className="relative h-full">
                            <Button onClick={toggleCompaniesDropdown} label="Companies" rightIcon={<Align />} />
                            {openDropdown === "companies" && (
                                <div className="absolute top-full -right-4 z-10 bg-white w-fit h-fit p-2 gap-1 flex flex-col shadow-2xl rounded-lg">
                                    <div className="flex gap-2 items-center px-4 py-3 border border-[#999999] rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M11.6665 11.6665L14.6665 14.6665" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.333 7.33325C13.333 4.01954 10.6467 1.33325 7.33301 1.33325C4.0193 1.33325 1.33301 4.01954 1.33301 7.33325C1.33301 10.647 4.0193 13.3333 7.33301 13.3333C10.6467 13.3333 13.333 10.647 13.333 7.33325Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linejoin="round" />
                                        </svg>
                                        <input type="text" placeholder="Search by domain" className="text-[#999999] outline-none" />
                                    </div>
                                    <DropDownCheck label="Techstar" />
                                    <DropDownCheck label="Cueforce" />
                                    <DropDownCheck label="Neorains" />
                                </div>
                            )}
                        </div>
                        <div className="relative h-full">
                            <Button onClick={toggleStatusDropdown} label="Status" rightIcon={<Align />} />
                            {openDropdown === "status" && (
                                <div className="absolute top-full -right-4 z-10 bg-white w-fit h-fit p-2 gap-1 flex flex-col shadow-2xl rounded-lg">
                                    <DropDown label="Completed" />
                                    <DropDown label="Pending" />
                                    <DropDown label="Sent" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="overflow-x-scroll lg:overflow-x-hidden overflow-y-auto">
                        <table className="whitespace-nowrap">
                            <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>User Name</th>
                                    <th>Company code</th>
                                    <th>Enneagram type</th>
                                    <th>Registration Code</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTableData.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                className="flex items-center justify-center appearance-none w-4 h-4 bg-transparent border-2 border-primary relative cursor-pointer before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-[] before:scale-0 before:bg-primary before:transition-all before:duration-300 checked:before:scale-[1] focus:outline-none "
                                            />
                                        </td>
                                        <td>{item.last_name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.phone}</td>
                                        <td>lai@decision-science.com</td>
                                        <td>65369557</td>
                                        <td>
                                            <span className="py-2.5 px-6 rounded-full bg-green-100 text-green-600 border border-green-600">Completed</span>
                                        </td>
                                        <td>
                                            <div className="flex gap-3 items-center">
                                                <Downlaod />
                                                <Forward />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex w-full md:flex-row flex-col mt-4 lg:mt-0 items-center justify-between h-[10%] ">
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
