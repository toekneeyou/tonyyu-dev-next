"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

import { classNames } from "@/app/lib/utils";
import { josefin } from "../fonts";
import IconButton from "../components/IconButton";
import { useSideMenuAPI, useSideMenuState } from "../contexts/SideMenuContext";
import { useViewportContext } from "../contexts/ViewportContext";
import { mdViewport, pathnames } from "@/app/lib/constants";
import { HERO } from "@/app/lib/id";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { isSideMenuOpen } = useSideMenuState();
  const { toggleSideMenu } = useSideMenuAPI();
  const { w } = useViewportContext();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const isHome = pathname === "/";

    if (isHome) {
      const header = headerRef.current!;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio < 0.5) {
              header.classList.remove("translate-y-[-100%]");
              header.classList.add("translate-y-0");
            } else {
              header.classList.remove("translate-y-0");
              header.classList.add("translate-y-[-100%]");
            }
          });
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] }
      );

      observer.observe(document.getElementById(HERO)!);
      return () => {
        observer.disconnect();
      };
    }
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className={classNames(
        [
          "z-50 fixed top-0 left-0 right-0 h-16 p-4 flex justify-between items-center bg-app-black",
          "transition-transform duration-300",
        ],
        "md:px-8"
      )}
    >
      <h2
        className={classNames(
          `${josefin.className} text-2xl font-bold leading-none translate-y-[2px]`
        )}
      >
        <Link href="/">TONY YU</Link>
      </h2>
      {w !== undefined && w >= mdViewport && (
        <nav>
          <ul className="flex space-x-4">
            {pathnames.map((pn) => {
              return (
                <li key={pn.name}>
                  <Link
                    className="text-xl font-bold hover:text-turquoise transition-colors"
                    href={pn.path}
                  >
                    {pn.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
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
