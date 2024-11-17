"use client";
import {
  Close,
  Facebook,
  Instagram,
  Linkidin,
  Logo,
  Tiktok,
  Twitter,
} from "@/public/assets/icon/Icon";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useI18n, useScopedI18n } from '@/locales/client'
import { useEffect, useState } from "react";
interface formData {
  name: string;
  email: string;
  phone: string;
  remark:string;
}
interface formErrors {
  name?: string;
  email?: string;
  phone?: string;
  remark?:string;
}
function Footer() {
  const tFooter = useScopedI18n("footer");
  const tMenuBar = useScopedI18n("MenuBar");
  const PathName = usePathname();
  const currentPath = PathName;
  const [language, setLanguage] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("Language");
      setLanguage(storedLanguage);
    }
  }, []);
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    phone: "",
    remark:"",
  });
  const [formErrors, setFormErrors] = useState<formErrors>({
    name: "",
    email: "",
    phone: "",
    remark:"",
  });
  const [successMessage, setsuccessMessage] = useState<string | null>(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const validateForm = () => {
    let isValid = true;
    let newErrors: formErrors = { name: "", email: "", phone: "" };
    if (!formData.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
      isValid = false;
    }
    setFormErrors(newErrors);
    return isValid;
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if(value) {
      setFormErrors ({...formErrors,[name]:""});

    }
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setFormData({ name: "", email: "", phone: "" ,remark:"" });
      setsuccessMessage("Form submitted successfully!")
      
      
      setTimeout(() =>{
        setsuccessMessage(null);
      },5000);
    }
  };
  const handleCloseSuccessMessage = () => {
    setsuccessMessage(null);
  };
  return (
    <footer id="contact" className="bg-paragraph">
      <div className="w-full px-5 md:px-0 md:w-10/12 mx-auto py-20">
        <div className="flex justify-between items-start w-full flex-wrap gap-10">
          <div className="w-full md:w-[calc(50%_-_1.875rem)] lg:w-[calc(30%_-_1.875rem)]">
            <a href="/">
              <Image
                src="/assets/images/logo.webp"
                alt="banner-logo"
                title="banner-logo"
                height={48}
                width={150}
                className="xl:h-10 h-8 w-auto"
              />
            </a>
            <p className="text-lg lg:font-medium tracking-xl text-white mt-5">
              {tFooter("about")}
            </p>
          </div>
          <div className="w-full md:w-[calc(50%_-_1.875rem)] lg:w-[calc(20%_-_1.875rem)] ">
            <div className="text-xl font-bold tracking-xxl text-white">
              {tFooter("Explore")}
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <a
                href={currentPath !== "/" ? "/#home" : "#home"}
                title="home"
                className="text-lg md:font-medium tracking-xl text-white relative group w-fit"
              >
                {tMenuBar("home")}
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
              </a>
              <a
                href={currentPath !== "/" ? "/#about" : "#about"}
                title="about us"
                className="text-lg md:font-medium tracking-xl text-white relative group w-fit"
              >
                {tMenuBar("About")}
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
              </a>
              <a
                href={currentPath !== "/" ? "/#enneagram" : "#enneagram"}
                title="enneagram"
                className="text-lg md:font-medium tracking-xl text-white relative group w-fit"
              >
                {tMenuBar("Enneagram")}
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
              </a>
              <a
                href={currentPath !== "/" ? "/#resources" : "#resources"}
                title="resources"
                className="text-lg md:font-medium tracking-xl text-white relative group w-fit"
              >
                {tMenuBar("Resources")}
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-[calc(50%_-_1.875rem)] lg:w-[calc(20%_-_1.875rem)] ">
            <div className="text-xl font-bold tracking-xxl text-white">
              {tMenuBar("Company")}
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <a
                href={`${language}privacy-policy`}
                title="Privacy Policy"
                className="text-lg md:font-medium tracking-xl text-white relative group w-fit"
              >
                {tMenuBar("Privacy Policy")}
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
              </a>
              <a
                href={`${language}terms-and-conditions`}
                title="Terms of Service"
                className="text-lg md:font-medium tracking-xl text-white relative group w-fit"
              >
                {tMenuBar("Terms of Service")}
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
              </a>
              <a
                href={`${language}terms-of-use`}
                title="Terms of Service"
                className="text-lg md:font-medium tracking-xl text-white relative group w-fit"
              >
                {tFooter("Terms of Use")}
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
              </a>
              <a
                href="https://relationshipstudio.sg/"
                target="_blank"
                title="FAQ"
                className="text-lg md:font-medium tracking-xl text-white relative group w-fit"
              >
                {tMenuBar("FAQ")}
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-[calc(50%_-_1.875rem)] lg:w-[calc(30%_-_1.875rem)] ">
            <div className="text-xl font-bold tracking-xxl text-white">
              {tFooter("Connect")}
            </div>
            <form action="" className="mt-5" onSubmit={handleSubmit}>
              <div className="flex items-center w-full gap-5 flex-wrap">
                <div className="w-full lg:w-[calc(50%_-_0.625rem)]">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent outline-none focus:border-b-secondary duration-300 border-b border-b-gray-210 placeholder:text-sm placeholder:font-medium placeholder:tracking-xl placeholder:text-white/60 text-white py-2 ${formErrors.name ? "!border-b-red-500":""}`}
                    placeholder={tFooter("your name")}
                  />
                  {
                    formErrors.name && 
                    <p className="mt-1 text-sm text-red-500">
                          {formErrors.name}
                    </p>
                  }
                </div>
                <div className="w-full lg:w-[calc(50%_-_0.625rem)]">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    value={formData.email}
                    className={`w-full bg-transparent outline-none focus:border-b-secondary duration-300 border-b border-b-gray-210 placeholder:text-sm placeholder:font-medium placeholder:tracking-xl placeholder:text-white/60 text-white py-2 ${formErrors.email ? "!border-b-red-500":""}`}
                    placeholder={tFooter("Email")}
                  />
                  {
                    formErrors.email && 
                    <div className="mt-1 text-sm text-red-500">
                      {formErrors.email}
                    </div>
                  }
                </div>
              </div>
              <div className="w-full mt-5">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full bg-transparent outline-none focus:border-b-secondary duration-300 border-b border-b-gray-210 placeholder:text-sm placeholder:font-medium placeholder:tracking-xl placeholder:text-white/60 text-white py-2 ${formErrors.phone ? "!border-b-red-500":""}`}
                  placeholder={tFooter("Phone number")}
                />
                {
                  formErrors.phone && 
                  <div className="mt-1 text-sm text-red-500">
                     {formErrors.phone}
                  </div>
                }
              </div>
              <div className="w-full mt-5">
              <textarea cols={10} rows={3}  onChange={handleInputChange} placeholder="Enter your Message" id="remark"   name="remark" value={formData.remark} className={`w-full bg-transparent outline-none focus:border-b-secondary duration-300 resize-none border-b border-b-gray-210 placeholder:text-sm placeholder:font-medium placeholder:tracking-xl placeholder:text-white/60 text-white py-2`}></textarea>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-fit text-lg font-bold inline-block text-paragraph py-2.5 px-5 tracking-4xl bg-secondary rounded-5xl transition-all duration-500 hover:shadow-xxl"
                >
                  {tFooter("Book now")}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-12">
          <a href="https://www.facebook.com/share/8iBKuaGeeVfMJkyu/?mibextid=kFxxJD" title="facebook" target="_blank" className="w-8 h-8 cursor-pointer bg-white flex justify-center items-center rounded-md">
            <Facebook width={27} height={27} />
          </a>
     
          <a href="https://www.instagram.com/theenneagramacademy/profilecard/?igsh=MW5iM2Foa3ZraGd0NA==" title="instagram" target="_blank" className="w-8 h-8 cursor-pointer bg-white flex justify-center items-center rounded-md">
            <Instagram width={27} height={27} />
          </a>
          <a href="https://www.linkedin.com/company/the-enneagram-academy-singapore/" className="w-8 h-8 cursor-pointer bg-white flex justify-center items-center rounded-md">
            <Linkidin  width={27} height={27} />
          </a>
          <a href="https://www.tiktok.com/@theenneagramacademy?_t=8qmdRtjFKnY&_r=1" target="_blank" title="tiktok" className="w-8 h-8 cursor-pointer bg-white flex justify-center items-center rounded-md">
            <Tiktok  width={27} height={27} />
          </a>
        </div>
      </div>
      {successMessage && (
        <div className="fixed z-50  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black w-full h-full flex justify-center items-center bg-opacity-50 text-white rounded-xl shadow-lg">
            <div className="px-10 relative w-[20rem] lg:w-[32rem] py-14 rounded-xl text-center text-2xl lg:text-3xl font-semibold text-white bg-paragraph"> 
          Thank you for contacting us! We will get back to you soon!
          <button  onClick={handleCloseSuccessMessage} className="top-5 right-5 text-white absolute">
          <Close width={30} height={30} />
          </button>
          </div>
      
        </div>
      )}
    </footer>
  );
}

export default Footer;
