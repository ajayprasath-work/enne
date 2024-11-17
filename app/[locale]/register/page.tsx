"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import { ColseSvg } from "@/public/assets/icon/Icon";

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
  age:string;
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
  age?:string;
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
    age:"",
  });

  const [language, setLanguage] = useState<string | null>(null);
  const [successPopup, setSuccessPopup] = useState<boolean>(false);
  const [showErrorPopup, setErrorPopup] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const router = useRouter();

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedLanguage = localStorage.getItem("Language");
  //     setLanguage(storedLanguage);
  //   }
  // }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      switch (name) {
        case "name":
          newErrors.name = !value ? "Name is required" : "";
          break;
        case "email":
          newErrors.email = !value
            ? "Email is required"
            : !/\S+@\S+\.\S+/.test(value)
            ? "Invalid email format"
            : "";
          break;
        case "confirmEmail":
          newErrors.confirmEmail =
            value !== formValues.email ? "Emails do not match" : "";
          break;
        case "nric":
          newErrors.nric = !value ? "NRIC/FIN number is required" : "";
          break;
        case "contactNumber":
          newErrors.contactNumber = !value ? "Contact number is required" : "";
          break;
        case "gender":
          newErrors.gender = !value ? "Gender is required" : "";
          break;
          case "age":
            newErrors.age = !value ? "Age is required" : "";
        case "password":
          newErrors.password = !value
            ? "Password is required"
            : value.length < 8
            ? "Password must be at least 8 characters"
            : "";
          break;
        case "confirmPassword":
          newErrors.confirmPassword =
            value !== formValues.password ? "Passwords do not match" : "";
          break;
        case "registrationCode":
          newErrors.registrationCode = !value
            ? "Registration code is required"
            : "";
          break;
      }

      return newErrors;
    });
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formValues.name) newErrors.name = "Name is required";
    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formValues.confirmEmail) {
      newErrors.confirmEmail = "Confirm email is required";
    } else if (formValues.confirmEmail !== formValues.email) {
      newErrors.confirmEmail = "Emails do not match";
    }
    if (!formValues.nric) {
      newErrors.nric = "NRIC/FIN number is required";
    }
    if (!formValues.contactNumber) {
      newErrors.contactNumber = "Contact number is required";
    }
    if(!formValues.age) {
      newErrors.age = "Age is required"
    }
    if (!formValues.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!formValues.password) {
      newErrors.password = "Password is required";
    } else if (formValues.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!formValues.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formValues.confirmPassword !== formValues.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formValues.registrationCode) {
      newErrors.registrationCode = "Registration code is required";
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
            <div className="text-red-150 text-3xl lg:text-2xl font-bold">
              Registration Details
            </div>
            <form className="mt-5 text-primary" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  className={`border outline-none placeholder:font-medium placeholder:text-sm  lg:placeholder:text-xs bg-secondaryLight border-darkBlue-100 mt-1 px-5   py-2 rounded-xxl placeholder:text-light-450 ${
                    errors.name ? "!border-red-500" : ""
                  }`}
                  placeholder="How you prefer to be called"
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
                  Email id
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={formValues.email}
                  className={`border outline-none placeholder:font-medium placeholder:text-sm  lg:placeholder:text-xs  border-darkBlue-100 mt-1 px-5  bg-secondaryLight py-2 rounded-xxl placeholder:text-light-450 ${
                    errors.email ? "!border-red-500" : ""
                  }`}
                  placeholder="Public providers like @gmail.com, @hotmail.com "
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
                  Confirm Email Id
                </label>
                <input
                  type="text"
                  name="confirmEmail"
                  value={formValues.confirmEmail}
                  onChange={handleChange}
                  className={`border outline-none placeholder:font-medium placeholder:text-sm  lg:placeholder:text-xs  border-darkBlue-100 mt-1 px-5  bg-secondaryLight py-2 rounded-xxl placeholder:text-light-450 ${
                    errors.confirmEmail ? "!border-red-500" : ""
                  }`}
                  placeholder="Public providers like @gmail.com, @hotmail.com  "
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
                  NRIC/FIN No
                </label>
                <input
                  type="text"
                  name="nric"
                  value={formValues.nric}
                  onChange={handleChange}
                  className={`border outline-none placeholder:font-medium placeholder:text-sm  lg:placeholder:text-xs  border-darkBlue-100 mt-1 px-5  bg-secondaryLight py-2 rounded-xxl placeholder:text-light-450 ${
                    errors.nric ? "!border-red-500" : ""
                  }`}
                  placeholder="Last 4 characters will suffice "
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
                  Contact Number
                </label>
                <input
                  type="text"
                  name="contactNumber"
                  onChange={handleChange}
                  value={formValues.contactNumber}
                  className={`border outline-none placeholder:font-medium placeholder:text-sm  lg:placeholder:text-xs  border-darkBlue-100 mt-1 px-5  bg-secondaryLight py-2 rounded-xxl placeholder:text-light-450 ${
                    errors.contactNumber ? "!border-red-500" : ""
                  }`}
                  placeholder="Your mobile number, without country code "
                />
                {errors.contactNumber && (
                  <div className="mt-1 text-sm text-red-500">
                    {errors.contactNumber}
                  </div>
                )}
              </div>
              <div className="flex flex-col mt-3 lg:mt-2">
                <label
                  htmlFor="Contact Number"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                 Age
                </label>
                <input
                  type="text"
                  name="age"
                  onChange={handleChange}
                  value={formValues.age}
                  className={`border outline-none placeholder:font-medium placeholder:text-sm  lg:placeholder:text-xs  border-darkBlue-100 mt-1 px-5  bg-secondaryLight py-2 rounded-xxl placeholder:text-light-450 ${
                    errors.age ? "!border-red-500" : ""
                  }`}
                  placeholder="May be sensitive, but we ought to know "
                  
                  min={1}
                  max={999}
                  maxLength={3}
                />
                {errors.age && (
                  <div className="mt-1 text-sm text-red-500">
                    {errors.age}
                  </div>
                )}
              </div>
              <div className="mt-3 lg:mt-1 w-full">
                <div className="font-roboto text-lg lg:text-sm font-medium tracking-wide">
                  Gender
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
                      className="text-darkBlue-100 text-lg lg:text-xs font-medium"
                    >
                      Male
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
                      className="text-darkBlue-100 text-lg lg:text-xs font-medium"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-3 lg:mt-2">
                <label
                  htmlFor="New password"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                  New password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  className={`border outline-none placeholder:font-medium placeholder:text-sm  lg:placeholder:text-xs  border-darkBlue-100 mt-1 px-5  bg-secondaryLight  py-2 rounded-xxl placeholder:text-light-450 ${
                    errors.password ? "!border-red-500" : ""
                  }`}
                  placeholder="A simple one-time password"
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
                  New password confirmation
                </label>
                <input
                  type="password"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                  name="confirmPassword"
                  className={`border outline-none placeholder:font-medium placeholder:text-sm  lg:placeholder:text-xs  border-darkBlue-100 mt-1 px-5  bg-secondaryLight  py-2 rounded-xxl placeholder:text-light-450 ${
                    errors.confirmPassword ? "!border-red-500" : ""
                  } `}
                  placeholder="Type it again, just once more"
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
                  Registration Code
                </label>
                <input
                  type="text"
                  value={formValues.registrationCode}
                  name="registrationCode"
                  onChange={handleChange}
                  className={`border outline-none placeholder:font-medium placeholder:text-sm  lg:placeholder:text-xs  border-darkBlue-100 mt-1 px-5  bg-secondaryLight py-2 rounded-xxl placeholder:text-light-450 ${
                    errors.registrationCode ? "!border-red-500" : ""
                  }`}
                  placeholder="The code provided to you"
                />
                {errors.registrationCode && (
                  <div className="text-sm text-red-500 mt-1">
                    {errors.registrationCode}
                  </div>
                )}
              </div>

              <div className="mt-5 lg:mt-3">
                <button className="py-3 bg-red-150 text-white font-roboto text-lg lg:text-base tracking-wide font-normal w-full rounded-xxl">
                  Register
                </button>
              </div>
            </form>
            <div className="flex items-center mt-5">
              <div className="w-[45%] border border-light-350"></div>
              <div className="w-[10%] text-center text-[#294957] font-roboto font-medium tracking-wide text-lg lg:text-sm">
                Or
              </div>
              <div className="w-[45%] border border-light-350"></div>
            </div>
            <div className="mt-5 text-center font-normal tracking-wide text-lg lg:text-base text-light-150">
              Have an account? {""}
              <a
                href={`login`}
                className="text-red-150 font-normal"
                title="Login"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
      {showErrorPopup && (
        <div className="fixed top-5  flex items-center right-10 justify-center z-[1000]">
          <div className="bg-red-500/70 rounded-lg px-5 py-2 gap-2 flex items-center shadow-lg">
            <p className="text-white">Please fill in the highlighted fields </p>
            {/* <button
              onClick={closePopup}
              className=" w-5 h-5 flex justify-center items-center bg-red-600 text-white rounded-full"
            >
              <ColseSvg width={18} height={16} />
            </button> */}
          </div>
        </div>
      )}
      {successPopup && (
        <div className="fixed  top-5 right-10 flex items-center justify-center z-[1000] ">
          <div className="bg-green-500/20 rounded-lg px-5 py-2 gap-2 flex items-center shadow-lg">
            <h2 className="text-base font-medium text-green-600 ">
              Thank you! Your registration is successful
            </h2>

            {/* <button
              onClick={() => setSuccessPopup(false)}
              className="w-5 h-5 flex justify-center items-center bg-green-600 text-white rounded-full"
            >
              <ColseSvg width={20} height={16} />
            </button> */}
          </div>
        </div>
      )}
    </section>
  );
}
