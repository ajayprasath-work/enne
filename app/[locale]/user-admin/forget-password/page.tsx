"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useI18n, useScopedI18n } from '@/locales/client'
import { ColseSvg } from "@/public/assets/icon/Icon";

interface FormErrors {
  email: string;
}

export default function ForgetPassword() {
  const [language, setLanguage] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({ email: "" });
  const [successPopup, setSuccessPopup] = useState<boolean>(false);
  const [showErrorPopup, setErrorPopup] = useState<boolean>(false);
  const [errorMessages, setErrorMessage] = useState<string[]>([]); 
 const tIndex = useScopedI18n("Login");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("Language");
      setLanguage(storedLanguage);
    }
  }, []);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors: FormErrors = { email: "" };
    const message: string[] = [];

    if (!validateEmail(email)) {
      const formError =tIndex("invaild");
      newErrors.email = formError;
      message.push(formError);
      valid = false;
    }else{
      window.open(`${language}user-admin/change-password`,'_blank')
    }

    setErrors(newErrors);
    setErrorMessage(message);

    if (!valid) {
      setErrorPopup(true);
      setSuccessPopup(false);
    } else {
      console.log("Form submitted:", { email });
      setSuccessPopup(true);
    }
  };

  const closePopup = () => {
    setErrorPopup(false);
  };

  useEffect(() => {
    if (successPopup) {
      const timer = setTimeout(() => {
        setSuccessPopup(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successPopup]);

  useEffect(() => {
    if (showErrorPopup) {
      const timer = setTimeout(() => {
        setErrorPopup(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showErrorPopup]);
  return (
    <section className="w-full h-screen  ">
      <div className="w-full flex-col lg:flex-row flex justify-between items-center ">
        <div className="lg:block hidden w-[45%] p-10 h-screen ">
          <Image
            src={"/assets/images/forget_bg.webp"}
            alt="login banner"
            width={700}
            height={600}
            className="w-full object-cover h-full rounded-2xxl"
          />
        </div>
        <div className="w-full px-5 md:w-[60%] lg:px-0 lg:w-[55%] flex justify-center items-center   h-screen relative overflow-hidden">
          <div className="absolute  top-[20%] lg:top-0 right-0">
            <Image
              src={"/assets/images/angle_img.webp"}
              width={1000}
              height={100}
              className="w-full h-full "
              alt="banner"
            />
          </div>
          <div className="flex flex-col z-50 relative w-full lg:w-[38%]">
            <div className="text-red-850 text-3xl text-center lg:text-left lg:text-2xl font-bold">
             {tIndex("forget")}
            </div>
            <div className="text-lg text-center lg:text-left lg:text-base font-medium tracking-wide  text-primary mt-5">
              {tIndex("forget_email")}
            </div>
            <form className="mt-5 lg:mt-10" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                  {tIndex("email")}
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmail(value);
                    if (validateEmail(value)) {
                      setErrors((prev) => ({ ...prev, email: "" }));
                    }
                  }}
                  className={`border focus:border-red-850 duration-300 outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs  border-red-50 mt-2 lg:mt-3 px-5 bg-red-450 py-3 rounded-xxl placeholder:text-red-650 ${errors.email ? "!border-red-500":""}`}
                  placeholder={tIndex("email placholder")}
                />
                {
                 errors.email && (
                  <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
                 ) 
                }
              </div>
              <div className="mt-3 lg:mt-5">
                <button type="submit"  className="py-3 outline-none bg-red-850 inline-block text-center text-white font-roboto text-lg lg:text-base tracking-wide font-normal w-full rounded-xxl">
                  {tIndex("send_password")}
                </button>
              </div>
            </form>
            <div className="mt-5 text-center font-normal tracking-wide text-lg lg:text-base text-red-650">
              {tIndex("back")} {""}
              <a
                href={`${language}user-admin/`}
                target="_blank"
                className="text-red-850 font-normal"
                title={tIndex("login")}
              >
               {tIndex("login")}
              </a>
            </div>
          </div>
        </div>
      </div>
      {showErrorPopup && (
        <div className="fixed top-5  flex items-center right-10 justify-center z-[1000]">
          <div className="bg-red-250/50 rounded-lg px-5 py-2 gap-2 flex items-center shadow-lg">
            <p className="text-white">{tIndex("incorrect")}</p>
            <button
              onClick={closePopup}
              className=" w-5 h-5 flex justify-center items-center bg-red-600 text-white rounded-full"
            >
          <ColseSvg width={20} height={16}/>
            </button>
          </div>
        </div>
      )}
      {successPopup && (
        <div className="fixed  top-5 right-10 flex items-center justify-center z-[1000] ">
          <div className="bg-green-500/20 rounded-lg px-5 py-2 gap-2 flex items-center shadow-lg">
            <h2 className="text-lg font-medium text-green-600 ">
            {tIndex("send_successfully")}
            </h2>
          
            {/* <button
              onClick={() => setSuccessPopup(false)}
              className="w-5 h-5 flex justify-center items-center bg-green-600 text-white rounded-full"
            >
           <ColseSvg width={20} height={16}/>
            </button> */}
          </div>
        </div>
      )}
    </section>
  );
}
