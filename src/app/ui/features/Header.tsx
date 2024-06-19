"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { classNames } from "@/app/lib/utils";
import { josefin } from "../fonts";
import IconButton from "../components/IconButton";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

import { useSideMenuAPI, useSideMenuState } from "../contexts/SideMenuContext";
import { useViewportContext } from "../contexts/ViewportContext";
import { mdViewport } from "@/app/lib/constants";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { isSideMenuOpen } = useSideMenuState();
  const { toggleSideMenu } = useSideMenuAPI();
  const { w } = useViewportContext();
  const pathname = usePathname();

  return (
    <header
      className={classNames(
        "z-50 fixed top-0 left-0 right-0 h-16 p-4 flex justify-between items-center bg-app-black transition-transform duration-300"
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
      {w !== undefined && w >= mdViewport && (
        <ul>
          <li>
            <Link href="/blog" className="font-bold">
              Blog
            </Link>
          </li>
        </ul>
      )}
      {w !== undefined && w < mdViewport && (
        <div>
          <IconButton
            aria-label="Open Menu"
            icon={isSideMenuOpen ? faClose : faBars}
            onClick={toggleSideMenu}
          />
        </div>
      )}
    </header>
  );
}
