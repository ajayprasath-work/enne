"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useI18n, useScopedI18n } from '@/locales/client'
import { ColseSvg } from "@/public/assets/icon/Icon";

interface FormValues {
  name: string;
  email: string;
  confirmEmail: string;
  nric: string;
  contactNumber: string;
  gender: string;
  password: string;
  confirmPassword: string;
  registrationCode: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  confirmEmail?: string;
  nric?: string;
  contactNumber?: string;
  gender?: string;
  password?: string;
  confirmPassword?: string;
  registrationCode?: string;
}

export default function Register() {
  const [formValues, setFormValue] = useState<FormValues>({
    name: "",
    email: "",
    confirmEmail: "",
    nric: "",
    contactNumber: "",
    gender: "",
    password: "",
    confirmPassword: "",
    registrationCode: "",
  });

  const [language, setLanguage] = useState<string | null>(null);
  const [successPopup, setSuccessPopup] = useState<boolean>(false);
  const [showErrorPopup, setErrorPopup] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const tIndex = useScopedI18n("Register");

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("Language");
      setLanguage(storedLanguage);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      switch (name) {
        case "name":
          newErrors.name = !value ? tIndex("name_error"): "";
          break;
        case "email":
          newErrors.email = !value
            ? tIndex("email_error")
            : !/\S+@\S+\.\S+/.test(value)
            ? tIndex("invaild")
            : "";
          break;
        case "confirmEmail":
          newErrors.confirmEmail =
            value !== formValues.email ? tIndex("match_error") : "";
          break;
        case "nric":
          newErrors.nric = !value ? tIndex("nric_error") : "";
          break;
        case "contactNumber":
          newErrors.contactNumber = !value ? tIndex("contact_error") : "";
          break;
        case "gender":
          newErrors.gender = !value ? tIndex("gender_error") : "";
          break;
        case "password":
          newErrors.password = !value
            ? tIndex("password_error")
            : value.length < 8
            ? tIndex("password_letter")
            : "";
          break;
        case "confirmPassword":
          newErrors.confirmPassword =
            value !== formValues.password ? tIndex("password_match") : "";
          break;
        case "registrationCode":
          newErrors.registrationCode = !value
            ? tIndex("register_error")
            : "";
          break;
      }

      return newErrors;
    });
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formValues.name) newErrors.name = tIndex("name_error");
    if (!formValues.email) {
      newErrors.email = tIndex("email_error");
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = tIndex("invaild");
    }
    if (!formValues.confirmEmail) {
      newErrors.confirmEmail = tIndex("confirm_error");
    } else if (formValues.confirmEmail !== formValues.email) {
      newErrors.confirmEmail = tIndex("match_error");
    }
    if (!formValues.nric) {
      newErrors.nric = tIndex("nric_error");
    }
    if (!formValues.contactNumber) {
      newErrors.contactNumber = tIndex("contact_error");
    }
    if (!formValues.gender) {
      newErrors.gender = tIndex("gender_error") ;
    }
    if (!formValues.password) {
      newErrors.password = tIndex("password_error");
    } else if (formValues.password.length < 8) {
      newErrors.password = tIndex("password_letter");
    }
    if (!formValues.confirmPassword) {
      newErrors.confirmPassword = tIndex("confirm_pass_error");
    } else if (formValues.confirmPassword !== formValues.password) {
      newErrors.confirmPassword = tIndex("password_match");
    }
    if (!formValues.registrationCode) {
      newErrors.registrationCode = tIndex("register_error");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form is valid, submitting:", formValues);
      setSuccessPopup(true);
      setErrorPopup(false);
    } else {
      setErrorPopup(true);
      setSuccessPopup(false);
    }
  };

  const closePopup = () => {
    setErrorPopup(false);
    setSuccessPopup(false);
  };

  useEffect(() => {
    if (successPopup || showErrorPopup) {
      const timer = setTimeout(() => {
        closePopup();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successPopup, showErrorPopup]);

  return (
    <section className="w-full h-full lg:h-screen  ">
      <div className="w-full flex-col lg:flex-row  py-10 lg:py-0 flex justify-between items-center ">
        <div className="lg:block hidden w-[45%] p-10 lg:h-screen ">
          <Image
            src={"/assets/images/forget_bg.webp"}
            alt="login banner"
            width={700}
            height={600}
            className="w-full object-cover h-full rounded-2xxl"
          />
        </div>
        <div className="w-full px-5 lg:px-0 md:w-[60%] lg:w-[55%] flex justify-center items-center   lg:h-screen relative overflow-hidden">
          <div className="absolute  top-[20%] lg:top-0 right-0">
            <Image
              src={"/assets/images/angle_img.webp"}
              width={1000}
              height={100}
              className="w-full h-full "
              alt="banner"
            />
          </div>
          <div className="flex flex-col z-50 overflow-y-scroll h-full py-10 scroll relative w-full lg:w-[38%]">
            <div className="text-red-850 text-3xl lg:text-2xl font-bold">
              {tIndex("details")}
            </div>
            <form className="mt-5 text-primary" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                  {tIndex("name")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  className={`border w-full focus:border-red-850 duration-300 outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs  border-red-50 mt-1 px-5 bg-red-450 py-2 rounded-xxl placeholder:text-red-650 ${
                    errors.name ? "!border-red-500" : ""
                  }`}
                  placeholder={tIndex("name_place")}
                />
                {errors.email && (
                  <div className="mt-1 text-sm text-red-500">{errors.name}</div>
                )}
              </div>
              <div className="flex flex-col mt-3 lg:mt-2">
                <label
                  htmlFor="email"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                  {tIndex("email_id")}
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={formValues.email}
                  className={`border w-full focus:border-red-850 duration-300 outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs  border-red-50 mt-1 px-5 bg-red-450 py-2 rounded-xxl placeholder:text-red-650 ${
                    errors.email ? "!border-red-500" : ""
                  }`}
                  placeholder={tIndex("email_place")}
                />
                {errors.email && (
                  <div className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="flex flex-col mt-3 lg:mt-2">
                <label
                  htmlFor="confirm email"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                  {tIndex("confirm_email")}
                </label>
                <input
                  type="text"
                  name="confirmEmail"
                  value={formValues.confirmEmail}
                  onChange={handleChange}
                  className={`border w-full focus:border-red-850 duration-300 outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs  border-red-50 mt-1 px-5 bg-red-450 py-2 rounded-xxl placeholder:text-red-650 ${
                    errors.confirmEmail ? "!border-red-500" : ""
                  }`}
                  placeholder={tIndex("email_place")}
                />
                {errors.confirmEmail && (
                  <div className="mt-1 text-sm text-red-500">
                    {errors.confirmEmail}
                  </div>
                )}
              </div>
              <div className="flex flex-col mt-3 lg:mt-2">
                <label
                  htmlFor="NRIC/FIN No"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                 {tIndex("nric")}
                </label>
                <input
                  type="text"
                  name="nric"
                  value={formValues.nric}
                  onChange={handleChange}
                  className={`border w-full focus:border-red-850 duration-300 outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs  border-red-50 mt-1 px-5 bg-red-450 py-2 rounded-xxl placeholder:text-red-650 ${
                    errors.nric ? "!border-red-500" : ""
                  }`}
                  placeholder={tIndex("nric_place")}
                />
                {errors.nric && (
                  <div className="mt-1 text-sm text-red-500">{errors.nric}</div>
                )}
              </div>
              <div className="flex flex-col mt-3 lg:mt-2">
                <label
                  htmlFor="Contact Number"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                  {tIndex("contact_num")}
                </label>
                <input
                  type="text"
                  name="contactNumber"
                  onChange={handleChange}
                  value={formValues.contactNumber}
                  className={`border w-full focus:border-red-850 duration-300 outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs  border-red-50 mt-1 px-5 bg-red-450 py-2 rounded-xxl placeholder:text-red-650 ${
                    errors.email ? "!border-red-500" : ""
                  }`}
                  placeholder={tIndex("mobile_place")}
                />
                {errors.contactNumber && (
                  <div className="mt-1 text-sm text-red-500">
                    {errors.contactNumber}
                  </div>
                )}
              </div>
              <div className="mt-3 lg:mt-1 w-full">
                <div className="font-roboto text-lg lg:text-sm font-medium tracking-wide">
                {tIndex("gender")}
                </div>
                <div className="flex items-center mt-2 gap-5">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                      checked={formValues.gender === "male"}
                      id="male"
                      className={`w-5 h-5 lg:w-4 appearance-none relative lg:h-4 rounded-full border-2 border-darkText cursor-pointer ${
                        formValues.gender === "male"
                          ? " after:absolute after:w-2 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2  after:-translate-y-1/2 after:h-2 after:bg-primary "
                          : "bg-transparent"
                      }`}
                    />
                    <label
                      htmlFor="male"
                      className="text-primary text-lg lg:text-xs font-medium"
                    >
                     {tIndex("male")}
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                      checked={formValues.gender === "female"}
                      id="female"
                      className={`w-5 h-5 lg:w-4 lg:h-4 rounded-full relative appearance-none border-2 border-darkText cursor-pointer ${
                        formValues.gender === "female"
                          ? "after:absolute after:w-2 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2  after:-translate-y-1/2 after:h-2 after:bg-primary "
                          : "bg-transparent"
                      }`}
                    />
                    <label
                      htmlFor="female"
                      className="text-primary text-lg lg:text-xs font-medium"
                    >
                      {tIndex("female")}
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-3 lg:mt-2">
                <label
                  htmlFor="New password"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                  {tIndex("new_passcode")}
                </label>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  className={`border w-full focus:border-red-850 duration-300 outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs  border-red-50 mt-1 px-5 bg-red-450 py-2 rounded-xxl placeholder:text-red-650 ${
                    errors.password ? "!border-red-500" : ""
                  }`}
                  placeholder={tIndex("password_place")}
                />
                {errors.password && (
                  <div className="mt-1 text-sm text-red-500">
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="flex flex-col mt-3 lg:mt-2">
                <label
                  htmlFor="New password confirmation"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                 {tIndex("new_passcode_confrim")}
                </label>
                <input
                  type="password"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                  name="confirmPassword"
                  className={`border w-full focus:border-red-850 duration-300 outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs  border-red-50 mt-1 px-5 bg-red-450 py-2 rounded-xxl placeholder:text-red-650 ${
                    errors.confirmPassword ? "!border-red-500" : ""
                  } `}
                  placeholder={tIndex("confirm_place")}
                />
                {errors.confirmPassword && (
                  <div className="mt-1 text-red-500 text-sm">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
              <div className="flex flex-col mt-3 lg:mt-2">
                <label
                  htmlFor=" Registration Code"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                  {tIndex("register_code")}
                </label>
                <input
                  type="text"
                  value={formValues.registrationCode}
                  name="registrationCode"
                  onChange={handleChange}
                  className={`border w-full focus:border-red-850 duration-300 outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs  border-red-50 mt-1 px-5 bg-red-450 py-2 rounded-xxl placeholder:text-red-650 ${
                    errors.registrationCode ? "!border-red-500" : ""
                  }`}
                  placeholder={tIndex("register_place")}
                />
                {errors.registrationCode && (
                  <div className="text-sm text-red-500 mt-1">
                    {errors.registrationCode}
                  </div>
                )}
              </div>

              <div className="mt-5 lg:mt-3">
                <button className="py-3 bg-red-850 text-white font-roboto text-lg lg:text-base tracking-wide font-normal w-full rounded-xxl">
                  {tIndex("register")}
                </button>
              </div>
            </form>
            <div className="flex items-center mt-5">
              <div className="w-[45%] border border-light-350"></div>
              <div className="w-[10%] text-center font-roboto font-normal tracking-wide text-lg lg:text-sm">
                {tIndex("or")}
              </div>
              <div className="w-[45%] border border-light-350"></div>
            </div>
            <div className="mt-5 text-center font-normal tracking-wide text-lg lg:text-base text-red-650">
              {tIndex("account")} {""}
              <a
                href={`${language}user-admin/`}
                target="_blank"
                className="text-red-850 font-normal"
                title="Login"
              >
               {tIndex("login")}
              </a>
            </div>
          </div>
        </div>
      </div>
      {showErrorPopup && (
        <div className="fixed top-5  flex items-center right-10 justify-center z-[1000]">
          <div className="bg-red-850/50 rounded-lg px-5 py-2 gap-2 flex items-center shadow-lg">
            <p className="text-white">{tIndex("highlighted")}</p>
            <button
              onClick={closePopup}
              className=" w-5 h-5 flex justify-center items-center bg-red-600 text-white rounded-full"
            >
              <ColseSvg width={18} height={16} />
            </button>
          </div>
        </div>
      )}
      {successPopup && (
        <div className="fixed  top-5 right-10 flex items-center justify-center z-[1000] ">
          <div className="bg-green-500/20 rounded-lg px-5 py-2 gap-2 flex items-center shadow-lg">
            <h2 className="text-base font-medium text-green-600 ">
              {tIndex("successfully")}
            </h2>
          </div>
        </div>
      )}
    </section>
  );
}
