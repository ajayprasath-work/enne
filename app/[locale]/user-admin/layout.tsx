'use client';
import React, {  useState } from 'react';
import Header from './components/Header';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  return (
    <div style={{ fontFamily: "var(--font)" }} className="flex flex-col h-screen w-[full]   ">
      <div className={`flex flex-col  flex-grow overflow-scroll overflow-x-hidden  bg-[#F5F5F5]`}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
