import React from "react";
import Resources_card from "@/components/Resources_card";
import { useI18n, useScopedI18n } from '@/locales/client'

export default function Resources() {
    const tIndex = useScopedI18n("IndexPage");
    return (
        <section id="resources" className="bg-white w-full">
            <div className="w-full px-5 md:px-0 md:w-10/12 mx-auto py-16 md:py-24 lg:py-28 flex justify-between items-endflex-wrap gap-10 relative z-10">
                <div className="w-full flex flex-col">
                    <div className="flex items-center gap-3">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 0L13.0199 7.53133L17.2066 1.18837L14.8578 8.4164L21.382 4.51812L16.1297 10.0113L23.6991 9.32975L16.5836 12L23.6991 14.6703L16.1297 13.9887L21.382 19.4819L14.8578 15.5836L17.2066 22.8116L13.0199 16.4687L12 24L10.9801 16.4687L6.7934 22.8116L9.14218 15.5836L2.61802 19.4819L7.87033 13.9887L0.300865 14.6703L7.41641 12L0.300865 9.32975L7.87033 10.0113L2.61802 4.51812L9.14218 8.4164L6.7934 1.18837L10.9801 7.53133L12 0Z"
                                    fill="#D5B0C2"
                                />
                            </svg>
                        </div>
                        <div className="text-lg font-bold text-primary tracking-lg">
                            {tIndex("Resources.Resources")}
                        </div>
                    </div>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-xl text-primary py-3 ">
                        {tIndex("Resources.Latest News & Articles from the Blog")}
                    </div>
                    {/* card */}
                    <div className="flex mt-12 flex-wrap gap-">
                        <div className="flex gap-5 flex-wrap">
                            <Resources_card />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}