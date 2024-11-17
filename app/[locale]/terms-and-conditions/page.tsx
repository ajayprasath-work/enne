"use client";
import React from "react";
import { SubBanner } from "@/components/Herosection";
import { useI18n, useScopedI18n } from '@/locales/client'
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

function page() {
  const tTerms_Conditions = useScopedI18n("Terms_Conditions");
  return (
    <>
    <Menu/>
      <SubBanner title={tTerms_Conditions("Terms_Conditions")} />

      <section className="py-16 md:py-24 w-full px-5 md:px-0 md:w-10/12 lg:w-[70%] mx-auto text-lg text-[#041B37]">
        <div className="flex flex-col">
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold">{tTerms_Conditions("Introduction")}</div>
            <p className="text-lg ">
              {tTerms_Conditions("Introduction_p")}
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            <div className="text-2xl font-bold">{tTerms_Conditions("Use of Our Website")}</div>
            <p className="text-lg ">
              {tTerms_Conditions("Use of Our Website_p")}
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            <div className="text-2xl font-bold">{tTerms_Conditions("Intellectual Property")}</div>
            <p className="text-lg ">
              {tTerms_Conditions("Intellectual Property_p")}
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            <div className="text-2xl font-bold">{tTerms_Conditions("Disclaimer of Warranties")}</div>
            <p className="text-lg ">
              { tTerms_Conditions("Disclaimer of Warranties_p")}
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            <div className="text-2xl font-bold">{ tTerms_Conditions("Limitation of Liability")}</div>
            <p className="text-lg ">
              {tTerms_Conditions("Limitation of Liability_p")}
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            <div className="text-2xl font-bold">{tTerms_Conditions("Indemnification")}</div>
            <p className="text-lg ">
              {tTerms_Conditions("Indemnification_p")}
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            <div className="text-2xl font-bold">{tTerms_Conditions("Governing Law")}</div>
            <p className="text-lg ">
              {tTerms_Conditions("Governing Law_p")}
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            <div className="text-2xl font-bold">{tTerms_Conditions("Changes to These Terms")}</div>
            <p className="text-lg ">
              {tTerms_Conditions("Changes to These Terms_p")}
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            <div className="text-2xl font-bold">{tTerms_Conditions("Severability")}</div>
            <p className="text-lg ">
              {tTerms_Conditions("Severability_p")}
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            <div className="text-2xl font-bold">{tTerms_Conditions("Entire Agreement")}</div>
            <p className="text-lg ">
              {tTerms_Conditions("Entire Agreement_p")}
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
    
  );
}

export default page;
