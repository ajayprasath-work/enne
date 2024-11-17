"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Altcha from "@/components/Altcha";
import { Eye, EyeSvg } from "@/public/assets/icon/Icon";

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
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
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
      newErrors.email = "Invalid email address";
      message.push("Invalid email address");
      valid = false;
    }
    if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 8 characters";
      message.push("Password must be at least 8 characters");
      valid = false;
    }
    if (!rememberMe) {
      newErrors.rememberMe = "You must accept Remember Me to continue";
      message.push("You must accept Remember Me to continue");
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
            priority={true} 
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
              priority={true} 
            />
          </div>
          <div className="flex flex-col z-50 relative w-full lg:w-[38%]">
            <div className="text-primary text-center lg:text-left text-3xl lg:text-2xl font-bold">
              Welcome Back 👋
            </div>
            <div className="text-primary text-lg text-center lg:text-left lg:text-base font-medium tracking-wide  mt-2">
              Please enter your details to login.
            </div>
            <form className="mt-5 lg:mt-10" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                  Email
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
                  className={`border focus:border-violet-100 duration-300 outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs  border-darkBlue-100 mt-2 lg:mt-3 px-5 bg-secondaryLight py-3 rounded-xxl placeholder:text-light-450 ${
                    errors.email ? "!border-red-500" : ""
                  }`}
                  placeholder="Example@email.com"
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
                    Password
                  </label>
                  <a
                    href={`${language}/forget-password`}
                    className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                    title="forget password"
                  >
                    Forgot Password?
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
                    className={`border outline-none w-full  focus:border-violet-100 duration-300 border-darkBlue-100 mt-3 px-5 bg-secondaryLight py-3 rounded-xxl placeholder:text-sm lg:placeholder:text-xs placeholder:font-medium placeholder:text-light-450 ${
                      errors.password ? "!border-red-500" : ""
                    }`}
                    placeholder="at least 8 characters"
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
                  className="flex items-center justify-center appearance-none w-5 h-5 lg:w-4 lg:h-4 bg-transparent border-2 border-secondary relative cursor-pointer before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-[] before:scale-0 before:bg-primary before:transition-all before:duration-300 checked:before:scale-[1] focus:outline-none "
                />
                <label
                  htmlFor="Remember me"
                  className="font-roboto text-lg lg:text-sm font-medium cursor-pointer tracking-wide"
                >
                  Remember me
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
                  className="py-3 bg-red-150 text-white font-roboto text-lg lg:text-base tracking-wide font-normal w-full rounded-xxl"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-3 lg:mt-5 text-center font-normal tracking-wide text-lg lg:text-base text-light-150">
              If you do not have an account, please proceed to{" "}
              <a
                href={`${language}/register`}
                className="text-primary font-normal"
                title="Register for one"
              >
                Register for one
              </a>
            </div>
          </div>
        </div>
      </div>
      {showErrorPopup && (
        <div className="fixed top-5  flex items-center right-10 justify-center z-[1000]">
          <div className="bg-red-500/70 rounded-lg px-5 py-2 gap-2 flex items-center shadow-lg">
            <p className="text-white">Please fill the highlighted fields</p>
            <button
              onClick={closePopup}
              className=" w-5 h-5 flex justify-center items-center bg-red-600 text-white rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      {successPopup && (
        <div className="fixed  top-5 right-10 flex items-center justify-center z-[1000] ">
          <div className="bg-green-500/50 rounded-lg px-5 py-2 gap-2 flex items-center shadow-lg">
            <h2 className="text-lg font-medium text-green-600 ">
              Login Successful!
            </h2>

            <button
              onClick={() => setSuccessPopup(false)}
              className="w-5 h-5 flex justify-center items-center bg-green-600 text-white rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
