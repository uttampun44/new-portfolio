import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@components/header";
import Footer from "@components/footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import StoreProvider from "./StoreProvider";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uttam Pun",
  description:
    "Uttam Pun | Full Stack Developer | Frontend Developer | Backend Developer",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
  const tawkToId = process.env.NEXT_PUBLIC_TWAK_TO_ID;
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased bg-black bg-[url('/assets/images/BackgroundPattern.png')] bg-auto bg-top-right bg-no-repeat h-screen w-full`}
      >
        <StoreProvider>
          <Header />
          {children}
          <GoogleAnalytics gaId={gaId as string} />
          <GoogleTagManager gtmId={gtmId as string} />
          <Footer />
          <Script id="tawk-to-widget" strategy="lazyOnload">
            {`
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
       (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
     s1.async=true;
     s1.src='https://embed.tawk.to/${tawkToId}/1j135v61i';
    s1.charset='UTF-8';
     s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
     })();

        `}
          </Script>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8184623531226618"
            crossOrigin="anonymous"></script>
        </StoreProvider>
      </body>
    </html>
  );
}
