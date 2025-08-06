   "use client"
import Footer from "@components/footer";
import Header from "@components/header";
import { persistor } from "@lib/store";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import StoreProvider from "../StoreProvider";

type props = {
  children: React.ReactNode;
};

export default function Layout({ children }: props) {
  return (
     <StoreProvider>
     <PersistGate loading={null} persistor={persistor}>
      <Header />
      {children}
      <Footer />
      </PersistGate>
     </StoreProvider>
  );
}
