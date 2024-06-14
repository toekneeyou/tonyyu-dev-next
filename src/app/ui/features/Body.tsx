"use client";

import { classNames } from "@/app/lib/utils";
import { ReactNode } from "react";
import { inter } from "../fonts";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import { useSideMenuState } from "../contexts/SideMenuContext";

interface BodyProps {
  children: ReactNode;
}

export default function Body({ children }: BodyProps) {
  const { isSideMenuOpen } = useSideMenuState();

  return (
    <body
      className={classNames(
        `${inter.className} antialiased`,
        "text-app-white bg-app-black",
        "m-0 h-vh  overflow-x-hidden",
        {
          "overflow-y-scroll": !isSideMenuOpen,
          "overflow-y-hidden": isSideMenuOpen,
        }
      )}
    >
      <Header />
      {children}
      <Footer />
      <SideMenu />
    </body>
  );
}
