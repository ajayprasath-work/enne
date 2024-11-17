import { Thankyou } from "@/public/assets/icon/Icon";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
interface LogoutPopupProps {
  onClose: () => void;
}
interface ProfileProps{
  onClose2:() => void;
}
export const LogoutPopup: React.FC<LogoutPopupProps> = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); 
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <>
      <section className="w-full fixed !top-0 bg-white h-screen z-[100] overflow-hidden">
        <div className="absolute top-[25%] lg:top-20 left-3">
          <Image
            src={"/assets/images/angle_bg.webp"}
            alt="banner"
            width={800}
            height={900}
            className="lg:w-[50rem] w-[25rem] h-[25rem] lg:h-[50rem]"
          />
        </div>
        <div className="flex justify-center items-center w-full h-screen  z-50">
          <div className="w-11/12 mx-auto">
            <div className=" w-full h-screen flex justify-center items-center    realtive z-30">
              <div className="w-full lg:w-[30%] flex flex-col justify-center items-center py-8 px-8 rounded-xl bg-white shadow-6xl">
                <div>
                  <Thankyou width={100} height={100} />
                </div>
                <div className="bg-[#D9D9D9] w-full h-[1px] mt-5"></div>
                <div className="text-Testsecondary mt-5 text-2xl font-bold">
                  You have been Logged out
                </div>
                <div className="text-lg font-medium text-placeHolder">
                  Thank you
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const EditPassword = () =>{
  return (
    <>
      <section className="w-full fixed top-0 bg-white h-screen z-[100] overflow-hidden">
        <div className="absolute top-[25%] lg:top-20 left-3">
          <Image
            src={"/assets/images/angle_bg.webp"}
            alt="banner"
            width={800}
            height={900}
            className="lg:w-[50rem] w-[25rem] h-[25rem] lg:h-[50rem]"
          />
        </div>
        <div className="flex justify-center items-center w-full h-screen  z-50">
          <div className="w-11/12 mx-auto">
            <div className=" w-full h-screen flex justify-center items-center    realtive z-30">
              <div className="w-full lg:w-[35%] flex flex-col justify-center items-center py-8 px-8 rounded-xl bg-white shadow-6xl">
                <div>
                  <Thankyou width={100} height={100} />
                </div>
                <div className="bg-[#D9D9D9] w-full h-[1px] mt-5"></div>
                <div className="text-Testsecondary mt-5 text-center text-2xl font-bold">
                Your password updated successfully
                </div>
                <div className="text-lg font-medium text-placeHolder">
                  Thank you
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
}
export const ProfileSetting :React.FC<ProfileProps>  = ({onClose2}) =>{
  useEffect(()=>{
    const timer = setTimeout(()=> {
      onClose2();
    },3000);
    return () => clearTimeout(timer);
  }, [onClose2]);
  return (
    <>
      <section className="w-full fixed top-0 bg-white h-screen z-[100] overflow-hidden">
        <div className="absolute top-[25%] lg:top-20 left-3">
          <Image
            src={"/assets/images/angle_bg.webp"}
            alt="banner"
            width={800}
            height={900}
            className="lg:w-[50rem] w-[25rem] h-[25rem] lg:h-[50rem]"
          />
        </div>
        <div className="flex justify-center items-center w-full h-screen  z-50">
          <div className="w-11/12 mx-auto">
            <div className=" w-full h-screen flex justify-center items-center    realtive z-30">
              <div className="w-[100%] lg:w-[35%] flex flex-col justify-center items-center py-8 px-8 rounded-xl bg-white shadow-6xl">
                <div>
                  <Thankyou width={100} height={100} />
                </div>
                <div className="bg-[#D9D9D9] w-full h-[1px] mt-5"></div>
                <div className="text-Testsecondary mt-5 text-center text-2xl font-bold">
                Profile changes saved successfully
                </div>
                <div className="text-lg font-medium text-placeHolder">
                  Thank you
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
}
