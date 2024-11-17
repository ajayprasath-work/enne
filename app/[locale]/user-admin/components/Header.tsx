"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Homemenu,
  Profile,
  User,
  Credits,
  Reports,
  Dropdown,
} from "@/public/assets/icon/Icon";
import { usePathname } from "next/navigation";
import DropDown from "./DropDown";

function Header() {
  const pathname = usePathname();
  const [language,setLanguage] = useState<string | null >('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("Language");
      setLanguage(storedLanguage);
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden");
  };
  return (
    <>
      <header className="bg-white py-4 fixed top-0 z-50 shadow-2xl w-full">
        <div className="w-11/12 mx-auto ">
          <nav className="flex justify-between items-center w-full ">
            <div>
              <a href="#" title="logo">
                <Image
                  src={"/assets/images/star_logo.webp"}
                  alt="logo"
                  width={175}
                  height={50}
                  className="object-cover w-28 lg:w-full lg:h-full"
                />
              </a>
            </div>
            <div className="text-primary lg:flex hidden items-center gap-3">
              <a
                href={`${language}/user-admin/dashboard`}
                title="home"
                className={`flex items-center ${
                  pathname === `${language}user-admin/dashboard`
                    ? "text-white bg-red-850 border-red-850"
                    : ""
                } gap-2 border border-light-550 hover:border-red-850 bg-light-250 duration-500 rounded-5xl hover:text-white hover:bg-red-850 py-2.5 px-5`}
              >
                <div className="">
                  <Homemenu width={20} height={20} />
                </div>
                <div className="text-base font-medium">Dashboard</div>
              </a>
              <a
                href={`${language}user-admin/users`}
                title="home"
                className={`flex items-center ${
                  pathname == `${language}user-admin/users`
                    ? "text-white bg-red-850 border-red-850"
                    : ""
                } gap-2 border border-light-550 hover:border-red-850 bg-light-250 duration-500 rounded-5xl hover:text-white hover:bg-red-850 py-2.5 px-5`}
              >
                <div className="">
                  <User />
                </div>
                <div className="text-base font-medium">Users</div>
              </a>
              <a
                href={`${language}user-admin/credits`}
                title="home"
                className={`flex items-center ${
                  pathname == `${language}user-admin/credits`
                    ? "text-white bg-red-850 border-red-850"
                    : ""
                } gap-2 border border-light-550 hover:border-red-850 bg-light-250 duration-500 rounded-5xl hover:text-white hover:bg-red-850 py-2.5 px-5`}
              >
                <div className="">
                  <Credits  />
                </div>
                <div className="text-base font-medium">Credits</div>
              </a>
              <a
                href={`${language}user-admin/Reports`}
                title="home"
                className={`flex items-center ${
                  pathname == `${language}user-admin/Reports`
                    ? "text-white bg-red-850 border-red-850"
                    : ""
                } gap-2 border border-light-550 hover:border-red-850 bg-light-250 duration-500 rounded-5xl hover:text-white hover:bg-red-850 py-2.5 px-5`}
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
          ? "bg-red-850 text-white"
          : "bg-light-250 hover:text-white hover:bg-red-850"
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
                    <DropDown label="Edit Profile" onClick={() => window.open(`${language}user-admin/register`, '_blank')}/>
                    <DropDown label="Change Password" onClick={() => window.open(`${language}user-admin/change-password`, '_blank')}/>
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
       <div className="flex flex-col pl-10 text-xl gap-3 pt-[80px]">
        
       <a href={`${language}user-admin/dashboard`} className={`${`${language}user-admin/dashboard` == pathname ? 'text-red-850' : ''}  font-medium`}>Dashboard</a>
       <a href={`${language}user-admin/users`} className={`${`${language}user-admin/users` == pathname ? 'text-red-850' : ''}  font-medium`}>Users</a>
       <a href={`${language}user-admin/companies`} className={`${`${language}user-admin/companies` == pathname ? 'text-red-850' : ''}  font-medium`}>Companies</a>
       <a href={`${language}user-admin/credits`} className={`${`${language}user-admin/credits` == pathname ? 'text-red-850' : ''}  font-medium`}>Credits</a>
       <a href={`${language}user-admin/Reports`} className={`${`${language}user-admin/Reports` == pathname ? 'text-red-850' : ''}  font-medium`}>Reports</a>
       <div
                onClick={toggleDropdown}
                className={`flex gap-2 cursor-pointer relative text-lg font-medium`}
  
              >
              
                <div className="text-xl font-medium">Profile</div>
                <div className="pt-1 ">
                  <Dropdown />
                </div>

                {isDropdownOpen && (
                  <div className="absolute top-full  md:w-fit w-full h-fit">
                    <DropDown label="Edit Profile" onClick={() => window.open(`${language}user-admin/register`, '_blank')}/>
                    <DropDown label="Change Password" onClick={() => window.open(`${language}user-admin/change-password`,'_blank')}/>
                  </div>
                )}
              </div>
        </div>   
      </div>
    </>
  );
}

export default Header;
