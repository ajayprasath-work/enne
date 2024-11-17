"use client";
import Image from "next/image";
import { useState } from "react";
import { Homemenu,Langmenu,Loginmenu,Profile,Registermenu,User,Credits,Reports,Companies,Dropdown } from "@/public/assets/icon/Icon";
import { usePathname } from "next/navigation";
import DropDown from "./DropDown";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden");
  };


  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("Language");
      setLanguage(storedLanguage);
    }
  }, []);
  return (
    <>
      <header className="bg-white py-4 fixed top-0 z-50 shadow-2xl w-full">
        <div className="w-11/12 mx-auto ">
          <nav className="flex justify-between items-center w-full ">
            <div>
              <a href="#" title="logo">
                <Image
                  src={"/assets/images/logo.png"}
                  alt="logo"
                  width={175}
                  height={50}
                  className="object-cover w-28 lg:w-full lg:h-full"
                />
              </a>
            </div>
            <div className=" lg:flex hidden items-center gap-3">
              <a
                href={`${language}admin/dashborad`}
                title="home"
                className={`flex items-center ${
                  pathname == `${language}admin/dashborad`
                    ? "text-white bg-red-150 border-darkBlue-100"
                    : ""
                } text-primary gap-2 border border-light-550 hover:border-light-250 bg-light-250 duration-500 rounded-5xl hover:text-white hover:bg-red-150 py-2.5 px-5`}
              >
                <div className="">
                  <Homemenu width={20} height={20} />
                </div>
                <div className="text-base font-medium">Dashboard</div>
              </a>
              <a
                href={`${language}admin/users`}
                title="home"
                className={`flex items-center ${
                  pathname ==`${language}admin/users`
                    ? "text-white bg-red-150 border-darkBlue-100"
                    : ""
                } text-primary gap-2 border border-light-550 hover:border-light-250 bg-light-250 duration-500 rounded-5xl hover:text-white hover:bg-red-150 py-2.5 px-5`}
              >
                <div className="">
                  <User />
                </div>
                <div className="text-base font-medium">Users</div>
              </a>
              <a
                href={`${language}admin/companies`}
                title="home"
                className={`flex items-center ${
                  pathname ==`${language}admin/companies`
                    ? "text-white bg-red-150 border-darkBlue-100"
                    : ""
                } text-primary gap-2 border border-light-550 hover:border-light-250 bg-light-250 duration-500 rounded-5xl hover:text-white hover:bg-red-150 py-2.5 px-5`}
              >
                <div className="">
                  <Companies/>
                </div>
                <div className="text-base font-medium">Companies</div>
              </a>
              <a
                href={`${language}admin/credits`}
                title="home"
                className={`flex items-center ${
                  pathname ==`${language}admin/credits`
                    ? "text-white bg-red-150 border-darkBlue-100"
                    : ""
                } text-primary gap-2 border border-light-550 hover:border-light-250 bg-light-250 duration-500 rounded-5xl hover:text-white hover:bg-red-150 py-2.5 px-5`}
              >
                <div className="">
                  <Credits />
                </div>
                <div className="text-base font-medium">Credits</div>
              </a>
              <a
                href={`${language}admin/Reports`}
                title="home"
                className={`flex items-center ${
                  pathname ==`${language}admin/Reports`
                    ? "text-white bg-red-150 border-darkBlue-100"
                    : ""
                } text-primary gap-2 border border-light-550 hover:border-light-250 bg-light-250 duration-500 rounded-5xl hover:text-white hover:bg-red-150 py-2.5 px-5`}
              >
                <div className="">
                  <Reports />
                </div>
                <div className="text-base font-medium">Reports</div>
              </a>
              <div
                onClick={toggleDropdown}
                className={`flex items-center cursor-pointer relative text-primary gap-2 border border-light-550 hover:border-light-250 
      ${
        isDropdownOpen
          ? "bg-primary text-white"
          : "bg-light-250 hover:text-white hover:bg-red-150"
      } 
      duration-500 rounded-5xl py-2.5 px-5`}
              >
                <div>
                  <Profile />
                </div>
                <div className="text-base font-medium">Profile</div>
                <div className="pt-1">
                  <Dropdown />
                </div>

                {isDropdownOpen && (
                  <div className="absolute top-full -right-4 bg-white w-fit h-fit p-2 gap-1 flex flex-col shadow-2xl rounded-lg">
                    <DropDown path={`${language}admin/register`}  label="Edit Profile" />
                    <DropDown path={`${language}admin/change-password`} label="Change Password" />
                  </div>
                )}
              </div>
            </div>
            <div
              className={`cursor-pointer text-primary lg:hidden flex flex-col ${
                isOpen ? "" : "md:gap-2.5 gap-1.5"
              } md:w-8 w-5 cursor-pointer`}
              onClick={handleClick}
            >
              <div
                className={`h-px w-full bg-primary ${
                  isOpen ? "rotate-45" : ""
                } transition-all duration-500 `}
              ></div>
              <div
                className={`h-px w-full bg-primary ${isOpen ? "hidden" : ""}`}
              ></div>
              <div
                className={`h-px w-full bg-primary ${
                  isOpen ? "-rotate-45 -mt-px" : ""
                } transition-all duration-500`}
              ></div>
            </div>
          </nav>
        </div>
      </header>
      <div
        className={`fixed flex justify-start items-start w-full h-screen top-0 bg-white z-20 ${
          isOpen ? "left-0" : "left-full"
        } transition-all duration-700`}
      >
        <div className="flex flex-col pl-10 text-2xl gap-3 pt-[80px]">
          <a href={`${language}admin/dashborad`} className={`${`${language}admin/dashborad` == pathname ? 'text-red-850' : ''}  font-medium`}>
            Dashboard
          </a>
          <a href={`${language}admin/users`} className={`${`${language}admin/users` == pathname ? 'text-red-850' : ''}  font-medium`}>
            Users
          </a>
          <a href={`${language}admin/companies`} className={`${`${language}admin/companies` == pathname ? 'text-red-850' : ''}  font-medium`}>
            Companies
          </a>
          <a href={`${language}admin/credits`} className={`${`${language}admin/credits` == pathname ? 'text-red-850' : ''}  font-medium`}>
            Credits
          </a>
          <a href={`${language}admin/reports`} className={`${`${language}admin/reports` == pathname ? 'text-red-850' : ''}  font-medium`}>
            Reports
          </a>
          <div
            onClick={toggleDropdown}
            className={`flex gap-2 cursor-pointer relative text-2xl font-medium`}
          >
            <div className="text-2xl font-medium">Profile</div>
            <div className="pt-1 ">
              <Dropdown />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-full  w-fit h-fit">
                <a
                href=""
                  target="_blank"
                 
                  className={`flex bg-[#f3fbfc] rounded py-2.5 px-4 min-w-[195px] border hover:text-white hover:bg-primary text-primary border-[#E7F7FA]  
                  `}
                >
                 Edit Profile
                </a>
                {/* <DropDown
                  label="Change Password"
                  path={"http://localhost:3002/change-password"}
                /> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
