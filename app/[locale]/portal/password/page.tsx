"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Eye, EyeSvg } from "@/public/assets/icon/Icon";
import { EditPassword } from "../components/Popup";
interface LogoutPopupProps {
  onClose: () => void;
}
function Taketest() {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [showErrorPopup, setShowErrorPopup] = useState<boolean>(false);
  const [errorFields, setErrorFields] = useState<string[]>([]);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
     const [language, setLanguage] = useState<string | null>(null);

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
      setTimeout(() => setShowErrorPopup(false), 2000);
    } else {
      setShowSuccessPopup(true);
      setTimeout(() =>{ setShowSuccessPopup(false),
      router.push(`${language}/portal`)},
      2000);

      setNewPassword("");
      setConfirmPassword("");
      setPasswordStrength("");
    }
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
    setShowErrorPopup(false);
  };

  const router = useRouter();

  return (
    <>
      <section className="w-full h-screen relative overflow-hidden">
        <div className="absolute top-[25%] lg:top-20 left-3">
          <Image
            src={"/assets/images/angle_bg.webp"}
            alt="banner"
            width={800}
            height={900}
            className="lg:w-[50rem] md:w-[40rem] md:h-[40rem] w-[25rem] h-[25rem] lg:h-[50rem]"
          />
        </div>
        <div className="flex justify-center items-center w-full h-screen relative z-50">
          <div className="w-full px-5 lg:px-0 lg:w-11/12 mx-auto mt-16">
            <div className="w-full flex justify-center items-center h-full">
              <div className="w-full md:w-[40%] rounded-xl lg:h-[48vh] p-6 bg-white shadow-6xl">
                <div className="w-full flex flex-col h-full justify-center items-center">
                  <div className="text-center text-Testsecondary text-2xl font-bold">
                    Change Password
                  </div>
                  <form className="mt-5 w-full px-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                      <label
                        htmlFor="new-password"
                        className="text-lg lg:text-sm font-medium tracking-wide"
                      >
                        New Password
                      </label>
                      <div className="w-full relative">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={handleNewPasswordChange}
                          className={`border outline-none w-full placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs border-inputBorder mt-3 px-5 bg-Testlight-300 rounded-lg py-2 rounded-xxl placeholder:text-placeHolder ${
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
                              showNewPassword
                                ? "text-green-500"
                                : "text-gray-600"
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
                        <div
                          key={index}
                          className={`h-[3px] ${style} flex-1`}
                        />
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
                          className={`border outline-none placeholder:font-medium placeholder:text-sm lg:placeholder:text-xs w-full border-inputBorder rounded-lg mt-3 px-5 bg-Testlight-300 py-2 rounded-xxl placeholder:text-placeHolder ${
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
                              showConfirmPassword
                                ? "text-green-500"
                                : "text-gray-600"
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
                        className="py-3  bg-Testprimary text-white font-roboto text-lg lg:text-base tracking-wide font-normal w-full rounded-xxl"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSuccessPopup && <EditPassword  />}{" "}
      </section>
    </>
  );
}

export default Taketest;
