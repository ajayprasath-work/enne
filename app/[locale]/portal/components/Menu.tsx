"use client";
import React, { RefObject, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Down,
  Homemenu,
  Lang,
  Lock,
  Logout,
  Profile,
  Settings,
  Test,
  TestHome,
} from "@/public/assets/icon/Icon";
import { LogoutPopup } from "./Popup";

interface Menuprops {}
interface dropdownRef {
  current: HTMLDivElement | null;
}
const Menu: React.FC<Menuprops> = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef(null);
  const dropdownRef2: RefObject<HTMLDivElement> = useRef(null);
  const [language, setLanguage] = useState<string | null>(null);
  const router =useRouter();
  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev);
  };
  const toggleDropdown2 = (): void => {
    setIsOpen2((prev) => !prev);
  };
  const handleClickOutside = (event: MouseEvent): void => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isOpen1, setIsOpen1] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen1(!isOpen1);
    document.body.classList.toggle("overflow-hidden");
  };
  const isProfileActive = ["/profile", "/password", "/logout"].includes(
    pathname
  );
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const handleLogout = () => {
    setShowLogoutPopup(true);
    router.push(`${language}/`)
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("Language");
      setLanguage(storedLanguage);
    }
  }, []);
  return (
    <>
      <header className="bg-white py-3 fixed top-0 z-[1000] w-full shadow-5xl">
        <div className="w-11/12 mx-auto ">
          <nav className="flex justify-between items-center w-full ">
            <a href="#" className="hidden lg:block" title="logo">
              <Image
                src={"/assets/images/tech_star_logo.webp"}
                alt="logo"
                width={150}
                height={100}
                className="object-cover w-full h-full "
              />
            </a>
            <a href="#" className="lg:hidden block" title="logo">
              <Image
                src={"/assets/images/tech_star_logo.webp"}
                alt="logo"
                width={100}
                height={100}
                className="object-cover w-full h-full "
              />
            </a>
            <div className="lg:flex items-center gap-4 hidden">
              <a
                href={`${language}/portal`}
                title="home"
                className={`flex text-base font-medium  tracking-wide hover:bg-Testprimary hover:text-white duration-500 items-center gap-2 py-2.5 px-5 rounded-6xl  border border-Testlight-150 ${
                  pathname === `${language}/portal`
                    ? "bg-Testprimary text-white "
                    : "bg-light-100 text-Testsecondary"
                }`}
              >
                <TestHome className="" width={20} height={20} />
                <div>Home</div>
              </a>
              <a
                href={`${language}portal/take-test`}
                title="Take Test"
                className={`flex text-base font-medium  tracking-wide hover:bg-Testprimary hover:text-white duration-500 items-center gap-2 py-2.5 px-5 rounded-6xl  border border-Testlight-150
                ${
                  pathname === `${language}portal/take-test`
                    ? "bg-Testprimary text-white"
                    : "text-Testsecondary bg-Testlight-100"
                }`}
              >
                <Test color="" width={20} height={20} />
                <div>Take Test</div>
              </a>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  title="Profile"
                  className={`flex text-base font-medium  tracking-wide hover:bg-Testprimary hover:text-white duration-500 items-center gap-2 py-2.5 px-5 rounded-6xl border border-Testlight-150 
                    ${
                      isProfileActive
                        ? "bg-Testprimary text-white"
                        : "text-Testsecondary bg-Testlight-100"
                    }`}
                >
                  <Profile/>
                  <div>Profile</div>
                  <Down width={20} height={20} />
                </button>

                {isOpen && (
                  <div className="absolute right-0 p-3 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1 flex flex-col gap-1 ">
                      <a
                        href={`${language}portal/profile`}
                        className="flex gap-2 border border-Testlight-150 items-center px-5 rounded-md py-3 text-base font-medium text-Testsecondary bg-Testlight-100 duration-500 hover:bg-Testprimary hover:text-white"
                      >
                        <span>
                          <Settings width={20} height={20} />
                        </span>
                        <span>Edit Profile</span>
                      </a>
                      <a
                        href={`${language}portal/password`}
                        className="flex gap-2 border border-Testlight-150 items-center px-5 rounded-md py-3 text-base font-medium text-Testsecondary bg-Testlight-100 duration-500 hover:bg-Testprimary hover:text-white"
                      >
                        <span>
                          <Lock width={20} height={20} />
                        </span>
                        <span>Edit Password</span>
                      </a>
                      <div>
                        <a
                          href="#"
                          onClick={handleLogout}
                          className="flex gap-2 border border-Testlight-150 items-center px-5 rounded-md py-3 text-base font-medium text-Testsecondary bg-Testlight-100 duration-500 hover:bg-Testprimary hover:text-white"
                        >
                          <span>
                            <Logout width={20} height={20} />
                          </span>
                          <span>Log out</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a
                href=""
                title="English"
                className="flex text-base font-medium text-Testsecondary tracking-wide hover:bg-Testprimary hover:text-white duration-500 items-center gap-2 py-2.5 px-5 rounded-6xl bg-Testlight-100 border border-Testlight-150"
              >
                <Lang color="" width={20} height={20} />
                <div>English</div>
                <Down width={20} height={20} />
              </a>
            </div>
            <div
              className={`cursor-pointer text-primary lg:hidden flex flex-col ${
                isOpen1 ? "" : "md:gap-2.5 gap-1.5"
              } md:w-8 w-5 cursor-pointer`}
              onClick={handleClick}
            >
              <div
                className={`h-px w-full bg-Testprimary ${
                  isOpen1 ? "rotate-45" : ""
                } transition-all duration-500 `}
              ></div>
              <div
                className={`h-px w-full bg-Testprimary ${
                  isOpen1 ? "hidden" : ""
                }`}
              ></div>
              <div
                className={`h-px w-full bg-Testprimary ${
                  isOpen1 ? "-rotate-45 -mt-px" : ""
                } transition-all duration-500`}
              ></div>
            </div>
          </nav>
        </div>
      </header>
      <div
        className={`fixed flex justify-start items-start w-full h-screen top-0 bg-white z-[100] ${
          isOpen1 ? "!left-0" : "left-full"
        } transition-all duration-700`}
      >
        <div className="flex flex-col w-full pl-10 text-2xl gap-3 pt-[80px]">
          <a href="/" className=" font-medium">
            Home
          </a>
          <a href="/take-test" title="take test" className=" font-medium">
            Take Test
          </a>
          <div ref={dropdownRef2}>
            <button
              onClick={toggleDropdown2}
              title="Profile"
              className={`flex text-base font-medium tracking-wide  duration-500 items-center gap-2
    
    `}
            >
              <div className="text-2xl font-medium">Profile</div>
              <Down width={20} height={20} />
            </button>

            <div
              className={`mt-2 w-80    overflow-hidden
      ${
        isOpen2 ? "max-h-96" : "max-h-0"
      } transition-all duration-500 ease-in-out`}
            >
              <div className="py-1 flex flex-col gap-1">
                <a
                  href="/profile"
                  className="flex gap-2 border-b  items-center px-5 rounded-md py-3 text-base font-medium text-Testsecondary "
                >
                  <span>
                    <Settings width={20} height={20} />
                  </span>
                  <span>Edit Profile</span>
                </a>
                <a
                  href="/password"
                  className="flex gap-2 border-b  items-center px-5 rounded-md py-3 text-base font-medium text-Testsecondary "
                >
                  <span>
                    <Lock width={20} height={20} />
                  </span>
                  <span>Edit Password</span>
                </a>
                <a
                  href="#"
                  className="flex gap-2 border-b items-center px-5 rounded-md py-3 text-base font-medium text-Testsecondary "
                >
                  <span>
                    <Logout width={20} height={20} />
                  </span>
                  <span>Log out</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLogoutPopup && (
        <LogoutPopup onClose={() => setShowLogoutPopup(false)} />
      )}
    </>
  );
};

export default Menu;
