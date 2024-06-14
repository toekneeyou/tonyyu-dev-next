"use client";

import { classNames } from "@/app/lib/utils";
import { useSideMenuState } from "../contexts/SideMenuContext";
import { sections } from "@/app/lib/constants";

export default function SideMenu() {
  const { isSideMenuOpen } = useSideMenuState();

  return (
    <aside
      className={classNames(
        "fixed top-16 left-0 right-0 bottom-0 bg-app-black z-50",
        "transition-transform duration-300 translate-x-full",
        { "translate-x-0": isSideMenuOpen }
      )}
    >
      <nav>
        <ul>
          {sections.map((s) => {
            const handleClick = () => {
              const el = document.getElementById(s.id)!;
              el.scrollIntoView({ behavior: "smooth" });
            };
            return <li onClick={handleClick}>{s.section}</li>;
          })}
        </ul>
      </nav>
    </aside>
  );
}
