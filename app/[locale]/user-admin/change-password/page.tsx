"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useI18n, useScopedI18n } from '@/locales/client'
import { ColseSvg, Eye, EyeSvg } from "@/public/assets/icon/Icon";

export default function ChangePassword() {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [showErrorPopup, setShowErrorPopup] = useState<boolean>(false);
  const [errorFields, setErrorFields] = useState<string[]>([]);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const[language,setLanguage]=useState<string | null>('');
  const tIndex = useScopedI18n("Change_password");
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("Language");
      setLanguage(storedLanguage);
    }
  }, []);
  const validatePasswordStrength = (password: string): string => {
    if (password.length < 8) return "weak";
    if (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    ) {
      return "strong";
    }
    return "moderate";
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setNewPassword(password);
    setPasswordStrength(validatePasswordStrength(password));
    setErrorFields((prev) => prev.filter((field) => field !== "newPassword"));
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const password = e.target.value;
    setConfirmPassword(password);
    setErrorFields((prev) =>
      prev.filter((field) => field !== "confirmPassword")
    );
  };

  const getStrengthStyles = () => {
    if (!newPassword) {
      return [
        "bg-gray-300",
        "bg-gray-300",
        "bg-gray-300",
        "bg-gray-300",
        "bg-gray-300",
      ];
    }
    switch (passwordStrength) {
      case "weak":
        return [
          "bg-red-500",
          "bg-red-500",
          "bg-red-500",
          "bg-gray-300",
          "bg-gray-300",
        ];
      case "moderate":
        return [
          "bg-yellow-500",
          "bg-yellow-500",
          "bg-yellow-500",
          "bg-gray-300",
          "bg-gray-300",
        ];
      case "strong":
        return [
          "bg-green-500",
          "bg-green-500",
          "bg-green-500",
          "bg-green-500",
          "bg-green-500",
        ];
      default:
        return [
          "bg-gray-300",
          "bg-gray-300",
          "bg-gray-300",
          "bg-gray-300",
          "bg-gray-300",
        ];
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: string[] = [];
    if (!newPassword) errors.push("newPassword");
    if (!confirmPassword) errors.push("confirmPassword");
    if (newPassword !== confirmPassword) errors.push("confirmPassword");

    setErrorFields(errors);
    if (errors.length > 0) {
      setShowErrorPopup(true);
      setTimeout(() => setShowErrorPopup(false), 3000);
    } else {
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000);
      window.location.href=`${language}user-admin`
      setNewPassword("");
      setConfirmPassword("");
      setPasswordStrength("");
    }
  };
  const closePopup = () => {
    setShowSuccessPopup(false);
    setShowErrorPopup(false);
  };

  return (
    <section className="w-full h-screen">
      <div className="w-full px-5 lg:px-0 flex-col lg:flex-row flex justify-between items-center">
        <div className="lg:block hidden w-[45%] p-10 h-screen">
          <Image
            src={"/assets/images/password_bg.webp"}
            alt="login banner"
            width={700}
            height={600}
            className="w-full object-cover h-full rounded-2xxl"
          />
        </div>
        <div className="w-full md:w-[60%] lg:w-[55%] flex justify-center items-center h-screen relative overflow-hidden">
          <div className="absolute top-[20%] lg:top-0 right-0">
            <Image
              src={"/assets/images/angle_img.webp"}
              width={1000}
              height={100}
              className="w-full h-full"
              alt="banner"
            />
          </div>
          <div className="flex flex-col z-50 relative w-full lg:w-[38%]">
            <div className="text-red-850 text-3xl text-center lg:text-left lg:text-2xl font-bold">
              {tIndex("setting")}
            </div>
            <form className="mt-5 lg:mt-10" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label
                  htmlFor="new-password"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                  New Password
                </label>
                <div className="w-full relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    className={` border w-full focus:border-red-850 duration-300 outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs  border-red-50 mt-2 lg:mt-3 px-5 bg-red-450 py-3 rounded-xxl placeholder:text-red-650 ${
                      errorFields.includes("newPassword")
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="Enter new password"
                  />
                  {newPassword && (
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
              </div>
              <p className="text-[10px] mt-1 text-light-400">
                Password Strength
              </p>
              <div className="flex mt-2 w-[40%] space-x-1">
                {getStrengthStyles().map((style, index) => (
                  <div key={index} className={`h-[3px] ${style} flex-1`} />
                ))}
              </div>

              <div className="flex flex-col mt-3 lg:mt-5">
                <label
                  htmlFor="confirm-password"
                  className="font-roboto text-lg lg:text-sm font-medium tracking-wide"
                >
                  Confirm Password
                </label>
                <div className="w-full relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className={`border w-full focus:border-red-850 duration-300 outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs  border-red-50 mt-2 lg:mt-3 px-5 bg-red-450 py-3 rounded-xxl placeholder:text-red-650 ${
                      errorFields.includes("confirmPassword")
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="Confirm your password"
                  />
                  {confirmPassword && (
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className={`absolute right-3 top-[44%] transition duration-200 ${
                        showConfirmPassword ? "text-green-500" : "text-gray-600"
                      }`}
                    >
                      {showConfirmPassword ? (
                        <EyeSvg width={20} height={20} color="#ED1C24" />
                      ) : (
                        <Eye width={20} height={20} color="#000" />
                      )}
                    </button>
                  )}
                </div>
                {confirmPassword && confirmPassword !== newPassword && (
                  <p className="mt-2 text-red-500 text-sm">
                    Passwords do not match
                  </p>
                )}
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="py-3 bg-red-850 text-white font-roboto text-lg lg:text-base tracking-wide font-normal w-full rounded-xxl"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showSuccessPopup && (
        <div className="fixed  top-5 right-10 flex items-center justify-center z-[1000] ">
          <div className="bg-green-500/50 rounded-lg px-5 py-2 gap-2 flex items-center shadow-lg">
            <h2 className="text-sm font-medium text-green-600 ">
              {tIndex("update")}
            </h2>
          </div>
        </div>
      )}
      {showErrorPopup && (
        <div className="fixed top-5  flex items-center right-10 justify-center z-[1000]">
          <div className="bg-red-250/50 rounded-lg px-5 py-2 gap-2 flex items-center shadow-lg">
            <p className="text-white">{tIndex("highlighted")}</p>
            <button
              onClick={closePopup}
              className=" w-5 h-5 flex justify-center items-center bg-red-600 text-white rounded-full"
            >
              <ColseSvg width={20} height={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
