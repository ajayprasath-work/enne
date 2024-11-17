"use client"
import React from "react";
import Card_s from "@/components/Card_s";
import { SubBanner } from "@/components/Herosection";
import { useI18n, useScopedI18n } from '@/locales/client'
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function resources() {
    const tIndexPage = useScopedI18n("IndexPage");

    return (
        <>
        <Menu/>
        <SubBanner title={tIndexPage("Resources.Latest News & Articles from the Blog")}/>
        <section className="w-full py-24">
            <div className="w-full md:w-10/12 mx-auto flex gap-5 flex-wrap">
                <Card_s />
            </div>
        </section>
        <Footer/>
        </>
    );
}