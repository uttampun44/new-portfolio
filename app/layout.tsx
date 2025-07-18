import type { Metadata } from "next";
import {Roboto } from "next/font/google";
import "./globals.css";
import Header from "@components/header";
import Footer from "@components/footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const roboto = Roboto({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Uttam Pun",
  description: "Uttam Pun | Full Stack Developer | Frontend Developer | Backend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased bg-black bg-[url('/assets/images/BackgroundPattern.png')] bg-auto bg-top-right bg-no-repeat h-screen w-full`}
      >
        <Header />
        {children}
        <GoogleAnalytics gaId="G-FLB2Y48Q0F"/>
        <GoogleTagManager gtmId="GTM-PHP6578"/>
        <Footer />
      </body>
    </html>
  );
}
