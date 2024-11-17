"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useI18n, useScopedI18n } from '@/locales/client'
import Altcha from "@/components/Altcha";
import { ColseSvg , Eye, EyeSvg } from "@/public/assets/icon/Icon";

interface FormErrors {
  email: string;
  password: string;
  rememberMe: string;
  captcha: string;
}

export default function Login() {
  const [language, setLanguage] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
    rememberMe: "",
    captcha: "",
  });
  const [successPopup, setSuccessPopup] = useState<boolean>(false);
  const [showErrorPopup, setErrorPopup] = useState<boolean>(false);
  const [errorMessages, setErrorMessage] = useState<string[]>([]);
  const altchaRef = useRef<HTMLInputElement>(null);
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

  const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };

  const validateCaptcha = (): boolean => {
    return !!altchaRef.current?.value;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;
    const newErrors: FormErrors = {
      email: "",
      password: "",
      rememberMe: "",
      captcha: "",
    };
    const message: string[] = [];

    if (!validateEmail(email)) {
      const errorMessages = tIndex("invaild");
      newErrors.email = errorMessages;
      message.push(errorMessages);
      valid = false;
    }
    if (!validatePassword(password)) {
      const errorMessages = tIndex("password_error");
      newErrors.password = errorMessages;
      message.push(errorMessages);
      valid = false;
    }
    if (!rememberMe) {
      const errorMessages = tIndex("remember_error");
      newErrors.rememberMe = errorMessages;
      message.push(errorMessages);
      valid = false;
    }
    if (!validateCaptcha()) {
      newErrors.captcha = "Please complete the CAPTCHA";
      message.push("Please complete the CAPTCHA");
      valid = false;
    }

    setErrors(newErrors);
    setErrorMessage(message);

    if (!valid) {
      setErrorPopup(true);
      setSuccessPopup(false);
    } else {
      console.log("Form submitted:", {
        email,
        password,
        rememberMe,
        captcha: altchaRef.current?.value,
      });
      setSuccessPopup(true);
      window.open(`${language}micro-site/`,'_blank');
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
      <div className="w-full lg:flex-row flex-col  flex justify-between items-center ">
        <div className="lg:block hidden w-[45%] pl-10 py-10 h-screen ">
          <Image
            src={"/assets/images/login_bg.webp"}
            alt="login banner"
            width={700}
            height={600}
            className="w-full object-cover h-full rounded-2xxl"
          />
        </div>
        <div className="w-full px-5 md:w-[60%] lg:px-0 lg:w-[55%] flex justify-center items-center   h-screen relative overflow-hidden">
          <div className="absolute   top-[20%] lg:top-0 right-0">
            <Image
              src={"/assets/images/angle_img.webp"}
              width={1000}
              height={100}
              className="w-full h-full "
              alt="banner"
            />
          </div>
          <div className="flex flex-col z-50 relative w-full lg:w-[38%]">
            <div className="text-red-850 text-center lg:text-left text-3xl lg:text-2xl font-bold">
              {tIndex("welcome")}
            </div>
            <div className="text-lg text-center lg:text-left lg:text-base font-medium tracking-wide text-primary mt-2">
            {tIndex("details")}
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
                  name="email"
                  value={email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmail(value);
                    if (validateEmail(value)) {
                      setErrors((prev) => ({ ...prev, email: "" }));
                    }
                  }}
                  className={`border focus:border-red-850 duration-300 outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs  border-red-50 mt-2 lg:mt-3 px-5 bg-red-450 py-3 rounded-xxl placeholder:text-red-650 ${
                    errors.email ? "!border-red-500" : ""
                  }`}
                  placeholder={tIndex("email placholder")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col mt-3 lg:mt-5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Password"
                    className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                  >
                    {tIndex("password")}
                  </label>
                  <a
                    href={`${language}micro-site/forget-password`}
                    className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                    title="forget password"
                  >
                    {tIndex("forget")}
                  </a>
                </div>
                <div className="w-full relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPassword(value);
                      if (validatePassword(value)) {
                        setErrors((prev) => ({ ...prev, password: "" }));
                      }
                    }}
                    className={`border w-full focus:border-red-850 duration-300 outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs  border-red-50 mt-2 lg:mt-3 px-5 bg-red-450 py-3 rounded-xxl placeholder:text-red-650 ${
                      errors.password ? "!border-red-500" : ""
                    }`}
                    placeholder={tIndex("forget placeholder")}
                  />
                  {password && (
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className={`absolute right-3 top-[44%] transition duration-200 ${
                        showNewPassword ? "text-green-500" : "text-gray-600"
                      }`}
                    >
                      {showNewPassword ? (
                        <EyeSvg width={20} height={20} color="#ED1C24" />
                      ) : (
                        <Eye width={20} height={20} color="#000" />
                      )}
                    </button>
                  )}
                </div>

                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">{errors.password}</p>
                )}
              </div>
              <div className="flex items-center mt-3 lg:mt-5 cursor-pointer gap-3">
                <input
                  id="Remember me"
                  checked={rememberMe}
                  onChange={() => {
                    setRememberMe(!rememberMe);

                    if (!rememberMe) {
                      setErrors((prev) => ({ ...prev, rememberMe: "" }));
                    }
                  }}
                  type="checkbox"
                  className="flex items-center justify-center appearance-none w-5 h-5 lg:w-4 lg:h-4 bg-transparent border-2 border-red-50 relative cursor-pointer before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-[] before:scale-0 before:bg-red-50 before:transition-all before:duration-300 checked:before:scale-[1] focus:outline-none "
                />
                <label
                  htmlFor="Remember me"
                  className="font-roboto text-lg lg:text-sm font-medium cursor-pointer tracking-wide"
                >
                 {tIndex("remember")}
                </label>
              </div>
              {errors.rememberMe && (
                <p className="text-red-500 text-sm mt-1">{errors.rememberMe}</p>
              )}
              <div className="mt-3 lg:mt-5">
                <Altcha ref={altchaRef} />
                {errors.captcha && (
                  <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>
                )}
              </div>
              <div className="mt-3 lg:mt-5">
                <button
                  type="submit"
                  className="py-3 bg-red-850 text-white font-roboto text-lg lg:text-base tracking-wide font-normal w-full rounded-xxl"
                >
                 {tIndex("login")}
                </button>
              </div>
            </form>
            <div className="mt-3 lg:mt-5 text-center font-normal tracking-wide text-lg lg:text-base text-red-650">
              {tIndex("account")}{" "}
              <a
                href={`${language}micro-site/register`}
                className="text-red-850 font-normal"
                title="Register for one"
                target="_blank"
              >
               {tIndex("register one")}
              </a>
            </div>
          </div>
        </div>
      </div>
      {showErrorPopup && (
        <div className="fixed top-5  flex items-center right-10 justify-center z-[1000]">
          <div className="bg-red-250/50 rounded-lg px-5 py-2 gap-2 flex items-center shadow-lg">
            <p className="text-white">{tIndex("highlighted")}</p>
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
          <div className="bg-green-500/50 rounded-lg px-5 py-2 gap-2 flex items-center shadow-lg">
            <h2 className="text-lg font-medium text-green-600 ">
            {tIndex("login_pop")}
            </h2>

            <button
              onClick={() => setSuccessPopup(false)}
              className="w-5 h-5 flex justify-center items-center bg-green-600 text-white rounded-full"
            >
        <ColseSvg width={20} height={16}/>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
