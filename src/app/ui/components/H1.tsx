import { classNames } from "@/app/lib/utils";
import { josefin } from "../fonts";
import { ReactNode } from "react";

interface H1Props {
  children: ReactNode;
}
export default function H1({ children }: H1Props) {
  return (
    <div
      className={classNames(
        "relative inline-block",
        "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-6 after:md:h-16 after:z-0 after:bg-app-gray"
      )}
    >
      <h1
        className={classNames(
          `${josefin.className} font-bold z-10 relative mx-1 text-4xl md:text-8xl text-app-white`
        )}
      >
        {children}
      </h1>
    </div>
  );
}
