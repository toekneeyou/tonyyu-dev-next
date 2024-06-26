"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

import { classNames } from "@/app/lib/utils";
import { josefin } from "../../fonts";
import IconButton from "../../components/IconButton";
import {
  useSideMenuAPIContext,
  useSideMenuContext,
} from "../../contexts/SideMenuContext";
import { useViewportContext } from "../../contexts/ViewportContext";
import { lgViewport } from "@/app/lib/constants";
import { useRefContext } from "../../contexts/RefContext";

const HeaderNav = dynamic(() => import("./HeaderNav"));

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { isSideMenuOpen } = useSideMenuContext();
  const { toggleSideMenu } = useSideMenuAPIContext();
  const { w } = useViewportContext();
  const { headerRef, projectRef } = useRefContext();
  const pathname = usePathname();

  const isMobile = w !== undefined && w < lgViewport;
  const isNotMobile = w !== undefined && w >= lgViewport;

  useEffect(() => {
    const isHome = pathname === "/";
    const project = projectRef.current;

    if (isHome && project) {
      const header = headerRef.current!;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.boundingClientRect.top <= 0) {
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

      observer.observe(project);

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
          "z-50 fixed top-0 left-0 right-0 h-16 p-4 flex justify-between items-center bg-app-black translate-y-[-100%]",
          "transition-transform duration-300",
        ],
        "lg:px-8"
      )}
    >
      <div
        className={classNames(
          `${josefin.className} text-2xl font-bold leading-none translate-y-[2px]`
        )}
      >
        <Link href="/">TONY YU</Link>
      </div>
      {isNotMobile && <HeaderNav />}
      {isMobile && (
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
