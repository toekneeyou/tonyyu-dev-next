"use client";

import { classNames } from "@/app/lib/utils";
import { josefin } from "../fonts";
import H2 from "../components/H2";
import { contacts } from "@/app/lib/constants";
import IconButton from "../components/IconButton";
import { HERO } from "@/app/lib/id";

export default function Hero() {
  return (
    <header id={HERO} className="h-svh pt-16 px-8 centered flex-col">
      <h1
        className={classNames(
          josefin.className,
          "text-8xl font-bold self-start mb-8"
        )}
      >
        TONY
      </h1>
      <h1
        className={classNames(
          josefin.className,
          "text-8xl font-bold self-start mb-8"
        )}
      >
        YU
      </h1>
      <div className="h2 self-end mb-16">
        <H2>frontend developer</H2>
      </div>
      <ul className="flex space-x-4 self-end">
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
    </header>
  );
}
