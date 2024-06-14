"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { classNames } from "@/app/lib/utils";
import { josefin } from "../fonts";
import IconButton from "../components/IconButton";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useSectionContext } from "../contexts/SectionContext";
import { useSideMenuAPI, useSideMenuState } from "../contexts/SideMenuContext";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { currentSection } = useSectionContext();
  const { isSideMenuOpen } = useSideMenuState();
  const { toggleSideMenu } = useSideMenuAPI();
  const pathname = usePathname();

  return (
    <header
      className={classNames(
        "z-50 fixed top-0 left-0 right-0 h-16 p-4 flex justify-between items-center bg-app-black transition-transform duration-300",
        {
          "translate-y-[-100%]":
            currentSection.section === "hero" && !pathname.match(/blog/),
        }
      )}
    >
      <h2
        className={classNames(
          josefin.className,
          "text-2xl font-bold leading-none translate-y-[2px]"
        )}
      >
        <Link href="/">TONY YU</Link>
      </h2>
      <div>
        <IconButton
          aria-label="Open Menu"
          icon={isSideMenuOpen ? faClose : faBars}
          onClick={toggleSideMenu}
        />
      </div>
    </header>
  );
}
