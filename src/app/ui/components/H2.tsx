import { classNames } from "@/app/lib/utils";
import { ReactNode } from "react";

interface H2Props {
  children: ReactNode;
}

export default function H2({ children }: H2Props) {
  return (
    <div
      className={classNames(
        "relative inline-block",
        "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-4 after:z-0 after:bg-app-gray"
      )}
    >
      <h2
        className={classNames(
          "font-bold z-10 relative mx-1 text-xl text-app-white",
          "md:text-2xl"
        )}
      >
        {children}
      </h2>
    </div>
  );
}
