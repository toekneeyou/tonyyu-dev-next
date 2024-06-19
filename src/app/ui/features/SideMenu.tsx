"use client";

import { classNames } from "@/app/lib/utils";
import { useSideMenuState } from "../contexts/SideMenuContext";
import Link from "next/link";

export default function SideMenu() {
  const { isSideMenuOpen } = useSideMenuState();

  return (
    <aside
      className={classNames(
        "fixed top-16 left-0 right-0 bottom-0 bg-app-black z-50 transition-transform duration-300",
        { "translate-x-0": isSideMenuOpen },
        { "translate-x-full": !isSideMenuOpen }
      )}
    >
      <nav>
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
