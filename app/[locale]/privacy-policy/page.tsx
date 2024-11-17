"use client"
import React from "react";
import { SubBanner } from "@/components/Herosection";
import { useI18n, useScopedI18n } from '@/locales/client'
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
function page() {
  const tPrivacyPolicy = useScopedI18n("PrivacyPolicy");
  return (
    <>
    <Menu/>
      <SubBanner title={tPrivacyPolicy("Privacy Policy")} />
      <section className="py-16 md:py-24 w-full px-5 md:px-0 md:w-10/12 lg:w-[70%] mx-auto text-lg text-[#041B37]">
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <div className="font-bold text-xl">{tPrivacyPolicy("Introduction")}</div>
            <p>
              {tPrivacyPolicy("Introduction_p")}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="font-bold ">{tPrivacyPolicy("Information We Collect")}</div>
            <p className="pl-3">
            {tPrivacyPolicy("Information We Collect_p")}
            </p>
          </div>
          <div className="mt-8">
            <span className="font-bold">{tPrivacyPolicy("Personal information:")}</span> {tPrivacyPolicy("Personal information_p")}
          </div>
          <div className="mt-8">
            <span className="font-bold">{tPrivacyPolicy("Technical Information:")}</span> {tPrivacyPolicy("Technical Information_p")}
          </div>
          <div className="mt-8">
            <span className="font-bold">{tPrivacyPolicy("Usage Information:")}</span> {tPrivacyPolicy("Usage Information_p")}
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="font-bold ">{tPrivacyPolicy("How We Use Your Information")}</div>
            <p className="">
              {tPrivacyPolicy("How We Use Your Information_p")}
            </p>
          </div>
          <div className="mt-8">
            <span className="font-bold">
              {tPrivacyPolicy("To Provide and Maintain Our Website:")}
            </span>{" "}
            {tPrivacyPolicy("To Provide and Maintain Our Website_p")}
          </div>
          <div className="mt-8">
            <span className="font-bold">{tPrivacyPolicy("To Communicate with You:")}</span> {tPrivacyPolicy("To Communicate with You_p")}
          </div>
          <div className="mt-8">
            <span className="font-bold">{tPrivacyPolicy("To Personalize Your Experience:")}</span>{" "}
            {tPrivacyPolicy("To Personalize Your Experience_p")}
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="font-bold ">{tPrivacyPolicy("improve_head")}</div>
            <p className="">
              {tPrivacyPolicy("improve")}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="font-bold ">{tPrivacyPolicy("Sharing of Your Information")}</div>
            <p className="">
              {tPrivacyPolicy("Sharing of Your Information_p")}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="font-bold ">{tPrivacyPolicy("Service Providers:")}</div>
            <p className="">
              {tPrivacyPolicy("Service Providers_p")}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="font-bold ">{tPrivacyPolicy("Advertising Partners:")}</div>
            <p className="">
              {tPrivacyPolicy("Advertising Partners_p")}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="font-bold ">{tPrivacyPolicy("Your Rights and Choices")}</div>
            <p className="">
              {tPrivacyPolicy("Your Rights and Choices_p")}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="font-bold ">{tPrivacyPolicy("Opt-out of Marketing Communications:")}</div>
            <p className="">
              {tPrivacyPolicy("Opt-out of Marketing Communications_p")}
               <a title="email" className="font-semibold" href="mailto:results@enneagramuniverse.cominfo@ennealysis.com." target="_blank">results@enneagramuniverse.com</a>
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="font-bold ">{tPrivacyPolicy("Cookies and Tracking Technologies:")}</div>
            <p className="">
              {tPrivacyPolicy("Cookies and Tracking Technologies_p")}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="font-bold ">{tPrivacyPolicy("Access and Update Your Information:")}</div>
            <p className="">
              {tPrivacyPolicy("Access and Update Your Information_p")}
              <a title="email" className="font-semibold" href="mailto:results@enneagramuniverse.cominfo@ennealysis.com." target="_blank">results@enneagramuniverse.com</a>
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="font-bold ">{tPrivacyPolicy("Data Security")}</div>
            <p className="">
              {tPrivacyPolicy("Data Security_p")}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="font-bold ">{tPrivacyPolicy("Changes to This Privacy Policy")}</div>
            <p className="">
            {tPrivacyPolicy("Changes to This Privacy Policy_p")}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="font-bold ">{tPrivacyPolicy("contact_us")}</div>
            <p className="">
            {tPrivacyPolicy("contact_us_p")}
            <a title="email" className="font-semibold pl-2"   href="mailto:info@ennealysis.com" target="_blank">info@ennealysis.com.</a>
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default page;
