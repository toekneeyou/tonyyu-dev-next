"use client";

import { classNames } from "@/app/lib/utils";
import { useSideMenuContext } from "../contexts/SideMenuContext";
import Link from "next/link";
import { pathnames } from "@/app/lib/constants";

interface SideMenuProps {}

export default function SideMenu({}: SideMenuProps) {
  const { isSideMenuOpen } = useSideMenuContext();

  return (
    <aside
      className={classNames(
        "fixed top-16 left-0 right-0 bottom-0 bg-app-black z-50 transition-transform duration-300",
        { "translate-x-0": isSideMenuOpen },
        { "translate-x-full": !isSideMenuOpen }
      )}
    >
      <nav className="h-full w-full centered pb-16">
        <ul className="space-y-4">
          {pathnames.map((pn) => {
            return (
              <li key={pn.name}>
                <Link href={pn.path} className="text-xl font-bold">
                  {pn.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
