"use client";
import React, { useState } from "react";
import { Close } from "@/public/assets/icon/Icon";
import Form_btn from "./Form_btn";

interface EditCompanyProps {
  openEditCompany: () => void;
}

export default function EditCompany({ openEditCompany }: EditCompanyProps) {
  const [formData, setFormData] = useState({
    registrationCode: "tech_00125",
    companyCode: "techstar",
    name: "Tech Star",
    email: "nicolle.loh@decision-science.com",
    mobile: "+60 123456789",
    address: "C-22-2, 3 Two Square, Jalan 19/1, Dataran 3 Dua, 46300 Petaling Jaya, Selangor",
    country: "Malaysia",
    zipCode: "46300",
    taxNumber: "202101001662",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="w-full h-screen flex justify-end items-center backdrop-blur-sm bg-black bg-opacity-35 fixed top-0 right-0 z-50">
      <div className="bg-white p-4 flex flex-col w-[34.625rem] max-w-[34.625rem] overflow-y-scroll scroll_1 h-screen gap-8">
        <div className="flex w-full justify-between items-center">
          <span className="text-xl font-bold">Edit Company</span>
          <span className="cursor-pointer" onClick={openEditCompany}>
            <Close width={26} height={26} />
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm">
              Registration code <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="registrationCode"
              value={formData.registrationCode}
              onChange={handleChange}
              disabled
              className="outline-none w-full px-4 bg-[#CACACA] py-3 border-[1px] rounded-lg text-sm"
              placeholder="Enter a registration code"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm">Company code</span>
            <input
              type="text"
              name="companyCode"
              value={formData.companyCode}
              onChange={handleChange}
              className="outline-none w-full px-4 py-3 border-[1px] rounded-lg text-sm"
              placeholder="Enter a company code"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="outline-none w-full px-4 py-3 border-[1px] rounded-lg text-sm"
              placeholder="Enter a Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm">Email</span>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="outline-none w-full px-4 py-3 border-[1px] rounded-lg text-sm"
              placeholder="Enter an Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm">Mobile</span>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="outline-none w-full px-4 py-3 border-[1px] rounded-lg text-sm"
              placeholder="Enter a Mobile number"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm">Address</span>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="outline-none rounded-lg py-3 px-4 border-[1px] resize-none h-32 text-sm"
              placeholder="Address"
              id="Address"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm">Country</span>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="py-3 px-4 border-[1px] rounded-lg text-sm outline-none"
            >
              <option value="">Select a Country</option>
              <option value="India">India</option>
              <option value="malaysia">Malaysia</option>
              <option value="china">China</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2 w-1/2">
              <span className="text-sm">Zip code</span>
              <select
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="py-3 px-4 border-[1px] rounded-lg text-sm outline-none"
              >
                <option value="">Select a zip code</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <span className="text-sm">Tax Number</span>
              <input
                type="text"
                name="taxNumber"
                value={formData.taxNumber}
                onChange={handleChange}
                className="outline-none w-full px-4 py-3 border-[1px] rounded-lg text-sm"
                placeholder="Enter a Tax Number"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-4 mt-auto">
          <Form_btn onClick={openEditCompany} border="primary" text="primary" bg="white" label="Cancel" />
          <Form_btn border="transprant" text="white" bg="primary" label="Submit" />
        </div>
      </div>
    </section>
  );
}
