"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Circle, Roundangle, Videobutton } from "@/public/assets/icon/Icon";
import VideoModal from './VideoModal'; 
import { useI18n, useScopedI18n } from '@/locales/client'


const Aboutus: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  const handleVideoOpen = (): void => {
    setIsVideoOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const handleVideoClose = (): void => {
    setIsVideoOpen(false);
    document.body.classList.remove('overflow-hidden');
  };
  const tIndex = useScopedI18n("IndexPage");

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="w-full px-5 md:px-0 md:w-10/12 mx-auto py-16 lg:py-28">
        <div className="absolute right-0 text-primary mix-blend-lighten top-[-16%] opacity-[2%]">
          <Roundangle width={'42.5rem'} height={'42.5rem'} />
        </div>
        <div className="w-full flex justify-between items-end flex-wrap gap-10 relative z-10">
          {/* First Column */}
          <div className="w-full md:w-[calc(50%_-_1.666rem)] lg:w-[calc(33.33%_-_1.666rem)]">
            <div className="flex items-center gap-3">
              <div>
                <Circle width={'1.5rem'} height={'1.5rem'} />
              </div>
              <div className="text-lg font-bold text-primary tracking-lg">
              {tIndex("Pre-test Instruction Video.Pre-test Instruction Video")}
              </div>
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-xl text-primary py-3">
            {tIndex("Pre-test Instruction Video.Welcome Message from Our CEO")}
            </div>
            <p className="text-xl md:text-2xl font-normal tracking-xxl md:leading-lg text-paragraph pb-5">
            {tIndex("Pre-test Instruction Video.Founded by a team of passionate Enneagram enthusiasts")}
            </p>
            <div className="text-2xl font-bold text-paragraph tracking-xxl">
            {tIndex("Pre-test Instruction Video.Cindy Leong")}
            </div>
            <div className="flex flex-col mt-3">
              <div className="text-base font-medium text-secondary">{tIndex("Pre-test Instruction Video.Founder")}</div>
              <div className="text-base font-medium text-secondary">
              {tIndex("Pre-test Instruction Video.The Enneagram Academy")}
              </div>
            </div>
          </div>

          {/* Second Column - Video Section */}
          <div className="w-full md:w-[calc(50%_-_1.666rem)] lg:w-[calc(33.33%_-_1.666rem)]">
            <div className="flex justify-center items-center relative">
              <Image
                alt=""
                src="/assets/images/video_img.webp"
                width={313}
                height={557}
                className="relative xl:!w-[190px] 2xl:!w-[313px] !w-[70%] md:!w-[60%] xl:!h-auto object-cover"
              />
              <div className="absolute cursor-pointer">
                <Videobutton width={77} height={77} onClick={handleVideoOpen}/>
              </div>
            </div>

            {/* Video Modal */}
            <VideoModal isOpen={isVideoOpen} onClose={handleVideoClose} />
          </div>

          {/* Third Column */}
          <div className="w-full md:w-[calc(50%_-_1.666rem)] lg:w-[calc(33.33%_-_1.666rem)] flex items-end">
            <div className="flex flex-col">
              <div className="text-3xl md:text-4xl font-bold tracking-2xl text-paragraph">
              {tIndex("Pre-test Instruction Video.Our Mission")}
              </div>
              <div className="text-xl md:text-2xl text-primary font-semibold md:font-bold md:tracking-xl mt-3">
                “{tIndex("Pre-test Instruction Video.We will scale the highest mountain")}”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
