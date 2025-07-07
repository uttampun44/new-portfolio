import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

type props = {
  children: React.ReactNode;
};

export default function FrontendLayout({ children }: props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
