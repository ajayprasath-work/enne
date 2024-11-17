import React from "react";
import Image from "next/image";
import { Checked } from "@/public/assets/icon/Icon";
function Completed() {
  return (
    <>
      <section className="w-full h-screen relative overflow-hidden">
        <div className="absolute top-[25%] md:top-[15%] lg:top-20 md:left-[25%]">
          <Image
            src={"/assets/images/angle_bg.webp"}
            alt="banner"
            width={800}
            height={900}
            className="lg:w-[50rem] md:w-[40rem] md:h-[40rem] w-[25rem] h-[25rem] lg:h-[50rem]"
          />
        </div>
        <div className="flex justify-center items-center w-full h-screen relative z-50">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col">
                <div className="flex lg:justify-start justify-center items-center">
                    <Checked width={71} height={72}/>
                </div>
              <div className="mt-5  text-Testsecondary lg:text-left text-center text-3xl lg:text-xxl font-bold tracking-wider">
                Thank You
              </div>
              <p className="text-light-400  text-center lg:text-left text-lg font-medium mt-5">Your answers have been submitted.</p>
              <div className="text-Testsecondary text-center  text-xl lg:text-left lg:text-4xl font-bold tracking-wider mt-5">
              You have completed the test !!!
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Completed;
