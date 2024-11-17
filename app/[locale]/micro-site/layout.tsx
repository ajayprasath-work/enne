import type { Metadata } from "next";

import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { useParams } from "next/navigation";

type Props = {
  children: ReactNode;
  params: { locale: any };
};
export const metadata: Metadata = {
  title: "Micro site",
  description: "Generated by create next app",
};


export default async function Layout({ children, params }: Props) {
  const messages = await getMessages();
  const locale = params.locale; 
  if(!locale) {
    return <div>Locale not found</div>;
  }
  return (
    <html lang={locale} className="text-[3.8vw] md:text-[1.3vw] lg:text-[1.8vh] xl:text-[2vh] 2xl:text-[0.85vw]">
      <body className="font-poppins text-base"
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}