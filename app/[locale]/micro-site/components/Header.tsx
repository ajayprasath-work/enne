"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Homemenu,
  Langmenu,
  Loginmenu,
  Registermenu,
  TestHome,
} from "@/public/assets/icon/Icon";
import { usePathname, useRouter } from "next/navigation";
import { useI18n, useScopedI18n } from '@/locales/client'


type LanguageProps = {
  slug: string;
  flag: React.ReactNode;
  title: string;
};

const LanguageData: LanguageProps[] = [
  {
    flag: <Langmenu width={'1.563rem'} height={'1.563rem'} />,
    title: "English",
    slug: "en"
  },
  {
    flag: <Langmenu width={'1.563rem'} height={'1.563rem'} />,
    title: "Melayu",
    slug: "ms"
  },
  {
    flag: <Langmenu width={'1.563rem'} height={'1.563rem'} />,
    title: "中国人",
    slug: "zh"
  }
];

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const PathName = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageProps>(LanguageData[0]);
  useEffect(() => {
    const currentSlug = PathName.split('/')[1];
    const currentLanguage = LanguageData.find(language => language.slug === currentSlug); 
    if (currentLanguage) {
      setSelectedLanguage(currentLanguage); 
    }
  }, [PathName]);
  
  const handleLanguageChange = (language: LanguageProps) => { 
    setSelectedLanguage(language);
    setDropdownOpen(false);

   const newPath = `/${language.slug}/`;
   localStorage.setItem("Language", newPath );
   console.log(newPath);
   router.push(`${newPath}/micro-site`); 
 };
  const handleClick = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden");
  };
  const t = useScopedI18n ("MenuBar");
  return (
    <>
      <header className="bg-white py-4 fixed top-0 z-50 shadow-2xl w-full">
        <div className="w-11/12 mx-auto ">
          <nav className="flex justify-between items-center w-full ">
            <div>
              <a href="#" title="logo">
                <Image
                  src={"/assets/images/tech_star_logo.webp"}
                  alt="logo"
                  width={214}
                  height={50}
                  className="object-cover w-32 lg:w-full lg:h-full"
                />
              </a>
            </div>
            <div className=" lg:flex hidden items-center gap-3">
              <a
                href="/"
                title="home"
                className="flex items-center text-Microprimary gap-2 border border-Microlight-150 hover:border-red-200 bg-Microlight-250 duration-500 rounded-5xl hover:text-white hover:bg-Microred-150 py-2.5 px-5"
              >
                <div className="">
                  <TestHome width={20} height={20} />
                </div>
                <div className="text-base font-medium">{t("home")}</div>
              </a>
              <a
                href={`/${selectedLanguage.slug}/micro-site/login`}
                title="login"
                target="_blank"
                className="flex items-center text-Microprimary gap-2 border border-Microlight-150 hover:border-red-200 bg-Microlight-250 duration-500 rounded-5xl hover:text-white hover:bg-Microred-150 py-2.5 px-5"
              >
                <div className="">
                  <Loginmenu width={20} height={20} />
                </div>
                <div className="text-base font-medium">{t("Login")}</div>
              </a>
              <a
                href={`/${selectedLanguage.slug}/micro-site/register`}
                title="refister"
                target="_blank"
                className="flex items-center text-Microprimary gap-2 border border-Microlight-150 hover:border-red-200 bg-Microlight-250 duration-500 rounded-5xl hover:text-white hover:bg-Microred-150 py-2.5 px-5"
              >
                <div className="">
                  <Registermenu width={20} height={20} />
                </div>
                <div className="text-base font-medium">{t("register")}</div>
              </a>
              <div className="relative  text-Microprimary gap-2 border border-Microlight-150 hover:border-red-200 bg-Microlight-250 duration-500 rounded-5xl group  hover:bg-Microred-150 py-2.5 px-5">
                <div onClick={() => setDropdownOpen(!dropdownOpen)} className="flex  items-center gap-2 cursor-pointer  relative">
                  <div className="group-hover:text-white">
                  {selectedLanguage.flag}
                  </div>
                  <span className="text-Microprimary group-hover:text-white truncate md:w-auto w-8">{selectedLanguage.title}</span>
                  <span className="text-white -rotate-90 absolute right-1 top-1/2 -translate-y-1/2">
                    {/* <Leftarrow width={'1rem'} height={'1rem'} /> */}
                  </span>
                </div>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-28  bg-white rounded-md shadow-lg z-10 overflow-hidden">
                    {LanguageData.map((option) => (
                      <div
                        key={option.slug}
                        onClick={() => handleLanguageChange(option)}
                        className={`flex items-center gap-2 p-2 cursor-pointer hover:bg- ${selectedLanguage.slug === option.slug ? 'font-bold' : ''}`}
                      >
                        {option.flag}
                        <span className="">{option.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div
              className={`cursor-pointer text-Microprimary lg:hidden flex flex-col ${isOpen ? "" : "md:gap-2.5 gap-1.5"
                } md:w-8 w-5 cursor-pointer`}
              onClick={handleClick}
            >
              <div
                className={`h-px w-full bg-primary ${isOpen ? "rotate-45" : ""
                  } transition-all duration-500 `}
              ></div>
              <div
                className={`h-px w-full bg-primary ${isOpen ? "hidden" : ""}`}
              ></div>
              <div
                className={`h-px w-full bg-primary ${isOpen ? "-rotate-45 -mt-px" : ""
                  } transition-all duration-500`}
              ></div>
            </div>
          </nav>
        </div>
      </header>
      <div
        className={`fixed w-full h-screen top-0  z-20 ${isOpen ? "left-0" : "left-full"
          } transition-all duration-700`}
      >
        <div className="relative flex justify-end w-full h-full">
          <div
            className={`flex flex-col items-center justify-center gap-4 bg-white md:w-1/2 w-full h-full relative z-10 ${isOpen ? "translate-x-0" : "translate-x-full"
              } transition-all duration-500 md:delay-500`}
          >
            <div className="flex justify-center items-center w-full h-screen">
              <div className="flex flex-col gap-3 items-center">
                <a
                  href="/"
                  title="home"
                  className="text-2xl text-Microprimary font-medium"
                >
                  Home
                </a>
                <a
                  href={`/${selectedLanguage.slug}/micro-site/login`}
                  title="login"
                  target="_blank"
                  className="text-2xl text-Microprimary font-medium"
                >
                  Login
                </a>
                <a
                  href={`/${selectedLanguage.slug}/micro-site/register`}
                  title="Register"
                  target="_blank"
                  className="text-2xl text-Microprimary font-medium"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`absolute w-full h-full bg-primary/30 top-0 left-0 transition-all duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}></div>
      </div>
    </>
  );
}

export default Header;
