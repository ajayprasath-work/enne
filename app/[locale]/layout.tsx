// app/[locale]/client/layout.tsx
import { ReactElement } from 'react'
import { I18nProviderClient } from '../../locales/client'
import { getStaticParams } from '../../locales/server'
import { setStaticParamsLocale } from 'next-international/server'
import type { Metadata } from "next";
import './globals.css'
export function generateStaticParams() {
    return getStaticParams()
  }
  export const metadata: Metadata = {
    title: "enne",
    description: "Generated by create next app",
  };
// If you are using Next.js < 15, you don't need to await `params`:
// export default function SubLayout({ params: { locale }, children }: { params: { locale: string }, children: ReactElement }) {
export default async function Layout({ params, children }: { params: Promise<{ locale: string }>, children: ReactElement }) {
  const { locale } = await params
  setStaticParamsLocale(locale)

  return (

   
    <html lang={locale} className="text-[3.8vw] md:text-[1.3vw] lg:text-[1.6vh] xl:text-[1.8vh] 2xl:text-[0.85vw]">
    <body className="font-poppins">
    <I18nProviderClient locale={locale}>
      {children}
    </I18nProviderClient>
    </body>
    </html> 
  )
}