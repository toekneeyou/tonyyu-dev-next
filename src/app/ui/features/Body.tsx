"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { classNames } from "@/app/lib/utils";
import { inter } from "../fonts";
import Header from "./header/Header";
import Footer from "./Footer";
import { useViewportContext } from "../contexts/ViewportContext";
import { lgViewport } from "@/app/lib/constants";
import { useRefContext } from "../contexts/RefContext";

const SideMenu = dynamic(() => import("./SideMenu"));

interface BodyProps {
  children: ReactNode;
}

export default function Body({ children }: BodyProps) {
  const { w } = useViewportContext();
  const { bodyRef } = useRefContext();

  return (
    <body
      ref={bodyRef}
      className={classNames(
        `${inter.className} antialiased text-app-white bg-app-black m-0 h-vh overflow-x-hidden`
      )}
    >
      <Header />
      {children}
      <Footer />
      {w !== undefined && w < lgViewport && <SideMenu />}
    </body>
  );
}
