import { classNames } from "@/app/lib/utils";
import { josefin } from "../fonts";
import { ReactNode } from "react";

interface H1Props {
  children: ReactNode;
}
export default function H1({ children }: H1Props) {
  return (
    <h1
      className={classNames(
        `${josefin.className} font-bold text-2xl text-center`,
        "md:text-8xl"
      )}
    >
      {children}
    </h1>
  );
}
