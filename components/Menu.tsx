"use client"
import { Login, BritishFlag, ChinaFlag, MalesianFlag, Leftarrow } from "@/public/assets/icon/Icon";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactModal from "./ContactModal";
import { usePathname, useRouter } from "next/navigation";
import { useI18n, useScopedI18n,useChangeLocale ,useCurrentLocale} from '@/locales/client'

type LanguageProps = {
  slug: string;
  flag: React.ReactNode;
  title: string;
};

const LanguageData: LanguageProps[] = [
  {
    flag: <BritishFlag width={'1.563rem'} height={'1.563rem'} />,
    title: "English",
    slug: "en" 
  },
  {
    flag: <MalesianFlag width={'1.563rem'} height={'1.563rem'} />,
    title: "Melayu",
    slug: "ms"
  },
  {
    flag: <ChinaFlag width={'1.563rem'} height={'1.563rem'} />,
    title: "中国人",
    slug: "zh"
  }
];


function Menu() {
  const router = useRouter();
  const PathName = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageProps>(LanguageData[0]);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [openval,setOpenval] = useState<boolean>(false);
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()
  
  useEffect(() => {
    const currentLanguage = LanguageData.find(language => language.slug === locale); // Find the language based on the slug
    if (currentLanguage) {
      setSelectedLanguage(currentLanguage); // Set the selected language if found
    }
  }, [locale]);
  const handleLanguageChange = (language: LanguageProps) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
    changeLocale(language.slug as any)
    // Update the URL to reflect the selected language
  //  const newPath = PathName.replace(/\/[a-z]{2}\/?/, `/${language.slug}/`); // Replace the language slug in the URL
  //  localStorage.setItem("Language", newPath );
  //  router.push(newPath); 
 };
 

  const [isOpen,setIsOpen] = useState<boolean>(false);
  const handleClick = () =>{
    setIsOpen(!isOpen);
    document.body.classList.toggle('overflow-hidden');
  }
  const openPop = () =>{
    setOpenval(!openval);
  }

  const currentPath = PathName;

  console.log(currentPath);
  const t = useScopedI18n ("MenuBar");
  return (
    
    <>
    
      <header className="bg-header_bg w-full py-3 fixed z-50">
        <div className="w-full px-5 md:px-0 md:w-10/12 mx-auto">
          <nav className="flex justify-between items-center  w-full">
            <div className="flex items-center xl:gap-16 gap-10">
              <div>
                <a href="./">
                  <Image src="/assets/images/logo.webp" alt="banner-logo" title="banner-logo" height={48} width={150} className="xl:h-10 h-8 w-auto" />
                </a>
              </div>
              <div className="lg:flex hidden items-center xl:gap-8 gap-5">
                <a href={currentPath !== "/" ? '/#home' : '#home'} title="home" className="text-sm tracking-xl text-white relative group">
                  {t("home")}
                  <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
                </a>
                <a href={currentPath !== "/" ? '/#about' : '#about'} title="about us" className="text-sm tracking-xl text-white relative group">
                {t("About")}
                  <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
                </a>
                <a href={currentPath !== "/" ? '/#enneagram' : '#enneagram'} title="enneagram" className="text-sm tracking-xl text-white relative group">
                  {t("Enneagram")}
                  <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
                </a>
                <a href={currentPath !== "/" ? '/#resources' : '#resources'} title="resources" className="text-sm tracking-xl text-white relative group">
                {t("Resources")}
                  <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
                </a>
                <a href={currentPath !== "/" ? '/#testimonials' : '#testimonials'} title="testimonials" className="text-sm tracking-xl text-white relative group">
                {t("Testimonials")}
                  <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
                </a>
                <a onClick={openPop} href="#"   title="contact us" className="text-sm tracking-xl text-white relative group">
                {t("Contact Us")}
                  <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
                </a>
              </div>
            </div>
            <div className="flex items-center md:gap-7 gap-4">
              <a href={`/${selectedLanguage.slug}/register`} target="_blank" title="sign up" className="text-sm font-medium tracking-xl text-white lg:flex hidden">{t("Sign Up")}</a>
              <a href={`/${selectedLanguage.slug}/register`} target="_blank" title="login" className="lg:flex hidden justify-center items-center gap-3 bg-secondary py-2.5 px-5 rounded-4xl transition-all duration-300 hover:shadow-xxl">
                <div className="text-base text-primary font-medium tracking-wide">
                {t("Login")}
                  </div>
                <div>
                  <Login width={'1.563rem'} height={'1.563rem'} color="#041B37" />
                </div>
              </a>
              <div className="relative">
                <div onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 cursor-pointer md:w-[7.5rem] w-20 relative">
                  {selectedLanguage.flag}
                  <span className="text-white truncate md:w-auto w-8">{selectedLanguage.title}</span>
                  <span className="text-white -rotate-90 absolute right-1 top-1/2 -translate-y-1/2">
                    <Leftarrow width={'1rem'} height={'1rem'} />
                  </span>
                </div>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-28 bg-white rounded-md shadow-lg z-10 overflow-hidden">
                    {LanguageData.map((option) => (
                      <div
                        key={option.slug} // Add a key prop for the dropdown items
                        onClick={() => handleLanguageChange(option)} // Change the language on click
                        className={`flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 ${selectedLanguage.slug === option.slug ? 'font-bold' : ''}`}
                      >
                        {option.flag}
                        <span className="">{option.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={`cursor-pointer lg:hidden flex flex-col ${isOpen ? '':'md:gap-2.5 gap-1.5'} md:w-8 w-5 cursor-pointer`} onClick={handleClick}>
                <div className={`h-px w-full bg-white ${isOpen ? 'rotate-45':''} transition-all duration-500 `}></div>
                <div className={`h-px w-full bg-white ${isOpen ? 'hidden':''}`}></div>
                <div className={`h-px w-full bg-white ${isOpen ? '-rotate-45 -mt-px':''} transition-all duration-500`}></div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className={`z-20 w-full h-screen fixed top-0 ${isOpen ? 'left-0': 'left-full'} transition-all duration-700`}>
        <div className="relative flex justify-end w-full h-full">
        <div className={`flex flex-col items-center justify-center gap-4 bg-primary md:w-1/2 w-full h-full relative z-10 ${isOpen ? 'translate-x-0': 'translate-x-full'} transition-all duration-500 md:delay-500`}>
        <a href={currentPath !== "/" ? '/#home' : '#home'} onClick={handleClick} title="home" className="text-xl font-medium tracking-xl text-white relative group">
        {t("home")}
          <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
        </a>
        <a href={currentPath !== "/" ? '/#about' : '#about'} onClick={handleClick} title="about us" className="text-xl font-medium tracking-xl text-white relative group">
        {t("About")}
          <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
        </a>
        <a href={currentPath !== "/" ? '/#enneagram' : '#enneagram'} onClick={handleClick} title="enneagram" className="text-xl font-medium tracking-xl text-white relative group">
        {t("Enneagram")}
          <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
        </a>
        <a href={currentPath !== "/" ? '/#resources' : '#resources'} onClick={handleClick} title="resources" className="text-xl font-medium tracking-xl text-white relative group">
        {t("Resources")}
          <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
        </a>
        <a href={currentPath !== "/" ? '/#testimonials' : '#testimonials'} onClick={handleClick} title="testimonials" className="text-xl font-medium tracking-xl text-white relative group">
        {t("Testimonials")}
          <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
        </a>
        <a href={currentPath !== "/" ? '/#contact' : '#contact'} onClick={handleClick} title="contact us" className="text-xl font-medium tracking-xl text-white relative group">
        {t("Contact Us")}
          <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
        </a>
        <a href="#" title="sign up" className="text-xl font-medium tracking-xl text-white">{t("Sign Up")}</a>
        <a href="#" title="login" className="flex justify-center items-center gap-3 bg-secondary py-2.5 px-5 rounded-4xl transition-all duration-300 hover:shadow-xxl">
          <div className="text-base text-primary font-medium tracking-wide">{t("Login")}</div>
          <div>
            <Login width={'1.563rem'} height={'1.563rem'} color="#041B37" />
          </div>
        </a>
        </div>
        <div className={`absolute w-full h-full bg-primary/30 top-0 left-0 transition-all duration-700 ${isOpen ? 'translate-x-0': 'translate-x-full'}`}></div>
        </div>
      </div>
      {openval &&<ContactModal openVal={openPop}/>}
    </>
  );
}

export default Menu;
