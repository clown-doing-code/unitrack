import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import React from "react";

type Props = {};

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
