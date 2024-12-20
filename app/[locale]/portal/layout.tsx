import type { Metadata } from "next";
import Menu from "./components/Menu";


export const metadata: Metadata = {
  title: "Take a Test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-[3.8vw] md:text-[1.3vw] lg:text-[1.8vh] xl:text-[2vh] 2xl:text-[0.85vw]">
      <body className="font-poppins"
      >
        <Menu/>
        {children}
      </body>
    </html>
  );
}
