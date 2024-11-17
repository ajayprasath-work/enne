"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import { Arrow } from "@/public/assets/icon/Icon";

interface SelectOption {
  option1: string | null;
  option2: string | null;
  option3: string | null;
  option4: string | null;
  option5: string | null;
}
interface ButtonState{
  isFinish:boolean;
}
function Taketest() {
  const [selectOption, setSelectOption] = useState<SelectOption>({
    option1: null,
    option2: null,
    option3: null,
    option4: null,
    option5: null,
  });
  const [buttonState, setButtonState] = useState<ButtonState>({ isFinish: false });
  const [language, setLanguage] = useState<string | null>(null);

  const handleClick = () => {
    if (buttonState.isFinish) {
      window.location.href = `${language}portal/Completed`;
    } else {
      setButtonState({ isFinish: true });
    }
  };

  const handleToggle = (option: keyof SelectOption) => {
    setSelectOption((prev) => ({
      ...prev,
      option1: option === "option1" ? "option1" : null,
      option2: option === "option2" ? "option2" : null,
      option3: option === "option3" ? "option3" : null,
      option4: option === "option4" ? "option4" : null,
      option5: option === "option5" ? "option5" : null,
    }));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("Language");
      setLanguage(storedLanguage);
    }
  }, []);

  return (
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
        <div className="px-3 lg:px-0 lg:w-11/12 mx-auto mt-16">
          <div className="w-full flex justify-center items-center h-full">
            <div className="lg:w-[93%] rounded-xl h-[80vh] p-6  lg:p-10 bg-white shadow-6xl">
              <div className="flex flex-col h-full justify-between">
                <div className="">
                  <div className="text-xl font-bold text-[#999]">
                    1 of 180 Question{" "}
                  </div>
                  <div className="text-textDark text-4xl font-bold tracking-wide mt-5">
                    Reader
                  </div>
                  <p className="text-black font-bold text-xl mt-5">
                    I like to study and learn about things, to acquire new
                    knowledge through reading
                  </p>
                  <div className="mt-5 h-[5px] w-full bg-light-200 rounded-lg">
                    <div className="w-[3%] rounded-lg bg-Testprimary h-[5px]"></div>
                    <div className="flex gap-3 flex-col mt-8">
                      <div className="flex gap-5 items-center">
                        <input
                          type="radio"
                          name="custom-radio"
                          id="option-1"
                          checked={selectOption.option1 === "option1"}
                          onChange={() => handleToggle("option1")}
                          className="border-Testsecondary border relative w-5 h-5 rounded-full appearance-none
                                                checked:border-primary checked:after:bg-Testprimary checked:after:scale-100
                                                after:absolute after:w-2 after:h-2 after:bg-transparent after:rounded-full 
                                                after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 
                                                after:-translate-y-1/2 after:scale-0 transition-all"
                        />
                        <label htmlFor="option-1" className="cursor-pointer">
                          1 - I am never like this
                        </label>
                      </div>
                      <div className="flex gap-5 items-center">
                        <input
                          type="radio"
                          name="custom-radio"
                          id="option-2"
                          checked={selectOption.option2 === "option2"}
                          onChange={() => handleToggle("option2")}
                          className="border-Testsecondary border relative w-5 h-5 rounded-full appearance-none
                                                checked:border-primary checked:after:bg-Testprimary checked:after:scale-100
                                                after:absolute after:w-2 after:h-2 after:bg-transparent after:rounded-full 
                                                after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 
                                                after:-translate-y-1/2 after:scale-0 transition-all"
                        />
                        <label htmlFor="option-2" className="cursor-pointer">
                          2 - I am seldom like this
                        </label>
                      </div>
                      <div className="flex gap-5 items-center">
                        <input
                          type="radio"
                          name="custom-radio"
                          id="option-3"
                          checked={selectOption.option3 === "option3"}
                          onChange={() => handleToggle("option3")}
                          className="border-Testsecondary border relative w-5 h-5 rounded-full appearance-none
                                                checked:border-primary checked:after:bg-Testprimary checked:after:scale-100
                                                after:absolute after:w-2 after:h-2 after:bg-transparent after:rounded-full 
                                                after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 
                                                after:-translate-y-1/2 after:scale-0 transition-all"
                        />
                        <label htmlFor="option-3" className="cursor-pointer">
                          3 - It's me occasionally
                        </label>
                      </div>
                      <div className="flex gap-5 items-center">
                        <input
                          type="radio"
                          name="custom-radio"
                          id="option-4"
                          checked={selectOption.option4 === "option4"}
                          onChange={() => handleToggle("option4")}
                          className="border-Testsecondary border relative w-5 h-5 rounded-full appearance-none
                                                checked:border-primary checked:after:bg-Testprimary checked:after:scale-100
                                                after:absolute after:w-2 after:h-2 after:bg-transparent after:rounded-full 
                                                after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 
                                                after:-translate-y-1/2 after:scale-0 transition-all"
                        />
                        <label htmlFor="option-4" className="cursor-pointer">
                          4 - I am often like this
                        </label>
                      </div>
                      <div className="flex gap-5 items-center">
                        <input
                          type="radio"
                          name="custom-radio"
                          id="option-5"
                          checked={selectOption.option5 === "option5"}
                          onChange={() => handleToggle("option5")}
                          className="border-Testsecondary border relative w-5 h-5 rounded-full appearance-none
                                                checked:border-primary checked:after:bg-Testprimary checked:after:scale-100
                                                after:absolute after:w-2 after:h-2 after:bg-transparent after:rounded-full 
                                                after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 
                                                after:-translate-y-1/2 after:scale-0 transition-all"
                        />
                        <label htmlFor="option-5" className="cursor-pointer">
                          5 - I am always like this
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full ">
                  <button
                    title="next"
                    onClick={handleClick}
                    className={`gap-3 items-center py-2.5 px-8 inline-flex text-white ${buttonState.isFinish ? 'bg-green-500' :'bg-Testprimary'} rounded-6xl`}
                  >
                    <span>{buttonState.isFinish ? 'Finish':'Next'}</span>
                  <div className={buttonState.isFinish ? 'hidden':'flex'}>
                  <Arrow width={20} height={20} />
                  </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Taketest;
