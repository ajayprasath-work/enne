"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
function Taketest() {
  const [language, setLanguage] = useState<string | null>(null);
  const router = useRouter();
  const handleTestPage = () => {
    router.push("/test");
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("Language");
      setLanguage(storedLanguage);
    }
  }, []);
  return (
    <section className="w-full  lg:h-screen relative lg:overflow-hidden">
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
        <div className="w-full px-3 lg:px-0 lg:w-11/12 mx-auto  mt-16 mb-5 lg:mb-0 lg:mt-16">
          <div className="w-full flex justify-center items-center h-full">
            <div className="lg:w-[93%] rounded-xl md:[80vh] lg:h-[80vh] p-6 lg:p-10  bg-white shadow-6xl">
              <div className="text-4xl lg:text-5xl font-bold text-textDark">
                Instructions
              </div>
              <p className="mt-3 lg:mt-5 text-base lg:text-lg text-textDark font-medium tracking-wide">
                Please kindly indicate how much do you relate to those
                words/phrases. You may read the sentences only if you need
                further explanation on the word/phrase.
              </p>
              <div className="flex flex-col mt-3 lg:mt-5 gap-3">
                <div className="text-textDark text-lg lg:text-1xl font-bold">
                  1 = I am never like this
                </div>
                <div className="text-textDark text-lg lg:text-1xl font-bold">
                  2 = I am seldom like this
                </div>
                <div className="text-textDark text-lg lg:text-1xl font-bold">
                  3 = It's me occasionally
                </div>
                <div className="text-textDark text-lg lg:text-1xl font-bold">
                  4 = I am often like this
                </div>
                <div className="text-textDark text-lg lg:text-1xl font-bold">
                  5 = I am always like this
                </div>
              </div>
              <div className="mt-3 lg:mt-5 flex flex-col gap-2 lg:gap-3">
                <p className="text-lg text-textDark font-medium tracking-wide">
                  This test consists of 180 questions.
                </p>
                <p className="text-lg text-textDark font-medium tracking-wide">
                  Go with your gut feel, do not overthink. You should complete
                  this test within 45 minutes.
                </p>
                <p className="text-lg text-textDark font-medium tracking-wide">
                  Do NOT refresh or press back on your browser in the middle of
                  the test. Doing so may cause you to restart the entire test.
                </p>
                <p className="text-lg text-textDark font-medium tracking-wide">
                  Remember to click Submit at the end of the test.
                </p>
                <p className="text-lg text-textDark font-medium tracking-wide">
                  Thank you for using EnneagramPT.com
                </p>
              </div>
              <div className="mt-5 lg:mt-10">
                <a
                  href={`${language}portal/test`}
                  onClick={handleTestPage}
                  title="Begin Test"
                  className="py-2.5 border border-primaryBorder text-base font-medium px-5 rounded-6xl bg-Testprimary text-white inline-block"
                >
                  Begin Test
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Taketest;
