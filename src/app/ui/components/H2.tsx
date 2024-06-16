import { ReactNode } from "react";

interface H2Props {
  children: ReactNode;
}

export default function H2({ children }: H2Props) {
  return (
    <div className="relative inline-block after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-4 after:z-0 after:bg-app-gray">
      <h2 className="font-bold z-10 relative mx-1 md:text-2xl text-app-white">
        {children}
      </h2>
    </div>
  );
}
