"use client";

import { classNames } from "@/app/lib/utils";
import { ReactNode } from "react";
import { inter } from "../fonts";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

interface BodyProps {
  children: ReactNode;
}

export default function Body({ children }: BodyProps) {
  return (
    <body
      className={classNames(
        `${inter.className} antialiased`,
        "text-app-white bg-app-black",
        "m-0 h-vh  overflow-x-hidden"
      )}
    >
      <Header />
      {children}
      <Footer />
      <SideMenu />
    </body>
  );
}
