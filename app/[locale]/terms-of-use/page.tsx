"use client";
import React from "react";
import { SubBanner } from "@/components/Herosection";
import { useI18n, useScopedI18n } from '@/locales/client'
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
function page() {
  const tTermsofUse = useScopedI18n("TermsofUse");
  return (
    <>
    <Menu/>
      <SubBanner title={tTermsofUse("terms")} />
      <section className="py-16 md:py-24 w-full px-5 md:px-0 md:w-10/12 lg:w-[70%] mx-auto text-lg text-[#041B37]">
        <div className="flex flex-col gap-5">
          <div className="text-2xl font-bold">{tTermsofUse("terms")}</div>
          <p className="">{tTermsofUse("terms_p")}</p>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="text-2xl font-bold">{tTermsofUse("acceptance")}</div>
          <p className="">{tTermsofUse("acceptance_p")}</p>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="text-2xl font-bold">{tTermsofUse("services")}</div>
          <p className="">{tTermsofUse("services_p")}</p>
          <ul className="pl-10 flex flex-col gap-4 list-disc">
            <li className="">{tTermsofUse("Service_li_1")}</li>
            <li className="">{tTermsofUse("Service_li_2")}</li>
            <li className="">{tTermsofUse("Service_li_3")}</li>
          </ul>
          <p className="mt-10 ">{tTermsofUse("services_p_1")}</p>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="text-2xl font-bold">{tTermsofUse("eligibility")}</div>
          <p className="">{tTermsofUse("eligibility_p")}</p>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="text-2xl font-bold">{tTermsofUse("account")}</div>
          <p className="">{tTermsofUse("account_p")}</p>
          <p className="mt-5">{tTermsofUse("account_p_1")}</p>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="text-2xl font-bold">{tTermsofUse("uses")}</div>
          <p className="">{tTermsofUse("uses_p")}</p>
          <ul className="pl-10 flex flex-col gap-4 list-disc">
            <li className="">{tTermsofUse("uses_li_1")}</li>
            <li className="">{tTermsofUse("uses_li_2")}</li>
            <li className="">{tTermsofUse("uses_li_3")}</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="text-2xl font-bold">{tTermsofUse("property")}</div>
          <p className="">{tTermsofUse("property_p")}</p>
          <p className="mt-5">{tTermsofUse("property_p_1")}</p>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="text-2xl font-bold">{tTermsofUse("disclaimer")}</div>
          <p className="">{tTermsofUse("disclaimer_p")}</p>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="text-2xl font-bold">{tTermsofUse("limition")}</div>
          <p className="">{tTermsofUse("limition_p")}</p>
          <p className="">{tTermsofUse("limition_p_1")}</p>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="text-2xl font-bold">{tTermsofUse("privacy")}</div>
          <p className="">{tTermsofUse("privacy_p")} </p>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="text-2xl font-bold">{tTermsofUse("termination")}</div>
          <p className="">{tTermsofUse("termination_p")}</p>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="text-2xl font-bold">{tTermsofUse("amendment")}</div>
          <p className="">{tTermsofUse("amendment_p")}</p>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="text-2xl font-bold">{tTermsofUse("law")}</div>
          <p className="">{tTermsofUse("law_p")}</p>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="text-2xl font-bold">{tTermsofUse("contact")}</div>
          <p className="">{tTermsofUse("contact_p")} <a href="mailto:info@ennealysis.com" title="email" className="pl-1 font-bold">info@ennealysis.com</a></p>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default page;
