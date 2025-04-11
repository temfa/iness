import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React, { ReactNode } from "react";

const WebsiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default WebsiteLayout;
