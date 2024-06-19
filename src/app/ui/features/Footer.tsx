"use client";

import { contacts } from "@/app/lib/constants";
import { classNames } from "@/app/lib/utils";
import IconButton from "../components/IconButton";

interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer
      className={classNames(
        "py-20 px-4 centered flex-col border-t-4 border-app-gray bg-app-black"
      )}
    >
      <ul className="flex space-x-4 mb-8">
        {contacts.map((c) => {
          return (
            <li key={c.label}>
              <IconButton
                aria-label={c.label}
                icon={c.icon}
                onClick={c.handleClick}
              />
            </li>
          );
        })}
      </ul>
      <p className="text-app-fog">&copy; 2024 Tony Yu. All rights reserved.</p>
    </footer>
  );
}
