"use client"
import React from "react";
import Card from "@/components/Card";
import { SubBanner } from "@/components/Herosection";
import { useI18n, useScopedI18n } from '@/locales/client'
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Enneagram() {
    const tEnneagramPage = useScopedI18n("EnneagramPage");
    return (
        <>
        <Menu/>
        <SubBanner title={tEnneagramPage("The Enneagram.The Enneagram")}/>
        <section className="w-full py-24">
            <div className="w-full px-5 md:px-0 md:w-10/12 mx-auto flex gap-5 flex-wrap">
                <Card />
            </div>
        </section>
        <Footer/>
        </>
    );
}