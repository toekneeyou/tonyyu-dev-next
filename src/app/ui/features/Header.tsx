"use client";

import { classNames } from "@/app/lib/utils";
import { josefin } from "../fonts";
import IconButton from "../components/IconButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSectionContext } from "../contexts/SectionContext";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { currentSection } = useSectionContext();

  const handleMenu = () => {
    console.log("menu");
  };

  return (
    <header
      className={classNames(
        "z-50 fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-app-black transition-transform duration-300",
        { "translate-y-[-100%]": currentSection.section === "hero" }
      )}
    >
      <h2
        className={classNames(
          josefin.className,
          "text-xl font-bold leading-none translate-y-[2px]"
        )}
      >
        <a href="">TONY YU</a>
      </h2>
      <div>
        <IconButton icon={faBars} onClick={handleMenu} />
      </div>
    </header>
  );
}
