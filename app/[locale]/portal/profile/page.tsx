"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { ProfileSetting } from "../components/Popup";
interface Profile {
  username: string;
  email: string;
  firtname: string;
  lastname: string;
  phone: string;
  class: string;
  age: string;
}
function Taketest() {
  const router = useRouter();
  const handleTestPage = () => {
    router.push("/test");
  };

  const [profile, setProfile] = useState<Profile>({
    username: "john_doe",
    email: "mugun90@gmail.com",
    firtname: "Mugundhan Krishnamurthy",
    lastname: "",
    phone: "01123356684",
    class: "",
    age: "34",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  const [language, setLanguage] = useState<string | null>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("Language");
      setLanguage(storedLanguage);
    }
  }, []);
  const [editProfile, setEditProfile] = useState(false);
  const handleProfile = () => {
    setEditProfile(true);
    setTimeout(()=>{
      router.push(`${language}/portal`)
    },2000)
  };

  return (
    <section className="w-full md:h-screen relative overflow-hidden">
      <div className="absolute top-[25%] lg:top-20 left-3">
      <Image
            src={"/assets/images/angle_bg.webp"}
            alt="banner"
            width={800}
            height={900}
            className="lg:w-[50rem] md:w-[40rem] md:h-[40rem] w-[25rem] h-[25rem] lg:h-[50rem]"
          />
      </div>
      <div className="flex justify-center items-center w-full md:h-screen relative z-50">
        <div className="px-5 md:px-0  w-full lg:w-11/12 mx-auto pb-8 lg:pb-0 mt-16">
          <div className="w-full flex justify-center items-center h-full">
            <div className="w-full md:w-[60%]  lg:w-[50%] 2xl:w-[35%] rounded-xl 2xl:overflow-hidden scroll lg:overflow-x-scroll  lg:h-[85vh] p-6 bg-white shadow-6xl">
              <div className="text-2xl  font-bold text-center tracking-wide text-Testsecondary">
                Profile settings
              </div>
              <form action="" className="flex flex-col w-full lg:px-5 mt-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-formText"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={profile.email}
                    style={{
                      color: "#272727",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    onChange={handleInputChange}
                    className="w-full bg-Testlight-300 placeholder:text-xs placeholder:font-medium placeholder:text-placeHolder py-2 mt-1 outline-none rounded-lg px-5 border border-inputBorder text-Testsecondary"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label
                    htmlFor="First Name"
                    className="text-xs font-medium text-formText"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="FirstName"
                    value={profile.firtname}
                    style={{
                      color: "#272727",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    onChange={handleInputChange}
                    className="w-full bg-Testlight-300 placeholder:text-xs placeholder:font-medium placeholder:text-placeHolder py-2 mt-1 outline-none rounded-lg px-5 border border-inputBorder text-Testsecondary"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label
                    htmlFor="First Name"
                    className="text-xs font-medium text-formText"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="LastName"
                    value={profile.lastname}
                    style={{
                      color: "#272727",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    onChange={handleInputChange}
                    className="w-full bg-Testlight-300 placeholder:text-xs placeholder:font-medium placeholder:text-placeHolder py-2 mt-1 outline-none rounded-lg px-5 border border-inputBorder text-Testsecondary"
                    placeholder="Your last name"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label
                    htmlFor="First Name"
                    className="text-xs font-medium text-formText"
                  >
                    E-mail
                  </label>
                  <input
                    type="text"
                    name="LastName"
                    value={profile.email}
                    style={{
                      color: "#272727",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    onChange={handleInputChange}
                    className="w-full bg-Testlight-300 placeholder:text-xs placeholder:font-medium placeholder:text-placeHolder py-2 mt-1 outline-none rounded-lg px-5 border border-inputBorder text-Testsecondary"
                    placeholder="Your last name"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label
                    htmlFor="First Name"
                    className="text-xs font-medium text-formText"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="Phone"
                    value={profile.phone}
                    style={{
                      color: "#272727",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    onChange={handleInputChange}
                    className="w-full bg-Testlight-300 placeholder:text-xs placeholder:font-medium placeholder:text-placeHolder py-2 mt-1 outline-none rounded-lg px-5 border border-inputBorder text-Testsecondary"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label
                    htmlFor="First Name"
                    className="text-xs font-medium text-formText"
                  >
                    Class
                  </label>
                  <input
                    type="text"
                    name="Phone"
                    value={profile.class}
                    style={{
                      color: "#272727",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    onChange={handleInputChange}
                    className="w-full bg-Testlight-300 placeholder:text-xs placeholder:font-medium placeholder:text-placeHolder py-2 mt-1 outline-none rounded-lg px-5 border border-inputBorder text-Testsecondary"
                    placeholder="Settings.form.classes.placeholder"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label
                    htmlFor="First Name"
                    className="text-xs font-medium text-formText"
                  >
                    Age
                  </label>
                  <input
                    type="text"
                    name="age"
                    value={profile.age}
                    style={{
                      color: "#272727",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    onChange={handleInputChange}
                    className="w-full bg-Testlight-300 placeholder:text-xs placeholder:font-medium placeholder:text-placeHolder py-2 mt-1 outline-none rounded-lg px-5 border border-inputBorder text-Testsecondary"
                    placeholder="Your Age"
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label
                    htmlFor="First Name"
                    className="text-xs font-medium text-formText"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    cols={16}
                    placeholder="Settings.form.classes.placeholder"
                    rows={4}
                    className="resize-none w-full bg-Testlight-300 placeholder:text-xs placeholder:font-medium placeholder:text-placeHolder py-2 mt-1 outline-none rounded-lg px-5 border border-inputBorder text-Testsecondary"
                    id=""
                  ></textarea>
                </div>
                <div>
                  <button
                  onClick={handleProfile}
                    type="button"
                    className="w-full py-2 bg-Testprimary text-white inline-block mt-5"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {editProfile && (
        <ProfileSetting  onClose2={() => setEditProfile(false)} />
      )}
    </section>
  );
}

export default Taketest;
