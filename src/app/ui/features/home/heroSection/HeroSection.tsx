"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { classNames } from "@/app/lib/utils";
import { contacts, lgViewport } from "@/app/lib/constants";
import { HERO } from "@/app/lib/id";
import { useViewportContext } from "@contexts/ViewportContext";
import HeroTextPartOne from "./HeroTextPartOne";
import tonyIceland from "@public/images/tony-iceland-1080x1350.jpg";
import IconButton from "@/app/ui/components/IconButton";
import { useRefContext } from "@/app/ui/contexts/RefContext";
import { useLoadingContextAPI } from "@/app/ui/contexts/LoadingContext";
import HeroTextPartTwo from "./HeroTextPartTwo";

const HeroImage = dynamic(() => import("./HeroImage"));

const HeroTextPartThree = dynamic(() => import("./HeroTextPartThree"));

type HeroSubSection =
  | "HeroTextPartOne"
  | "HeroTextPartTwo"
  | "HeroTextPartThree";

export default function HeroSection() {
  const [subSection, setSubSection] =
    useState<HeroSubSection>("HeroTextPartOne");
  const { w, h } = useViewportContext();
  const { heroRef } = useRefContext();
  const { finishLoadingState } = useLoadingContextAPI();

  const handleLoading = () => {
    finishLoadingState("/");
  };

  const isMobile = w !== undefined && w < lgViewport;
  const isNotMobile = w !== undefined && w >= lgViewport;
  const isPortrait = w !== undefined && h !== undefined && h > w;

  useEffect(() => {
    const hero = heroRef.current!;

    if (isNotMobile) {
      const handleScroll = () => {
        let ps = window.scrollY / hero.clientHeight;
        ps = Math.min(1, ps);
        if (ps <= 0.1) {
          setSubSection("HeroTextPartOne");
        } else if (ps <= 0.4) {
          setSubSection("HeroTextPartTwo");
        } else if (ps <= 1) {
          setSubSection("HeroTextPartThree");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isNotMobile, heroRef]);

  return (
    <section
      ref={heroRef}
      id={HERO}
      className={classNames(
        "pt-32 pb-24 bg-app-black",
        "lg:py-0 lg:grid lg:grid-cols-2 lg:h-[300vh]",
        "lg:portrait:grid-cols-1"
      )}
    >
      <div
        id="hero-left"
        className={classNames(
          [
            "lg:h-[inherit] lg:sticky lg:top-0 lg:z-10 lg:bg-app-black lg:w-full",
            "lg:transition-[width] lg:duration-300 lg:ease-in-out ",
          ],
          { "lg:w-[200%]": subSection === "HeroTextPartThree" && !isPortrait }
        )}
      >
        <div className="lg:h-screen lg:sticky lg:top-0 lg:grid lg:grid-cols-1 lg:grid-rows-1">
          <HeroTextPartOne hide={subSection !== "HeroTextPartOne"} />
          {(isMobile || isPortrait) && (
            <div
              className={classNames(
                "mb-10 w-full centered aspect-square rounded-full overflow-hidden translate-x-[-20%]",
                "md:translate-x-0 md:w-[444px] md:mx-auto",
                "lg:portrait:row-start-1 lg:portrait:row-end-2 lg:portrait:col-start-1 lg:portrait:col-end-2 lg:portrait:self-center lg:portrait:translate-x-32"
              )}
            >
              <Image
                priority
                src={tonyIceland}
                alt="Tony wearing a red jacket standing in front of a snow-capped mountain."
                onLoad={handleLoading}
              />
            </div>
          )}
          <HeroTextPartTwo show={subSection === "HeroTextPartTwo"} />
          {isMobile && (
            <ul
              className={classNames(
                "flex justify-end space-x-4 px-8",
                "md:w-[444px] md:mx-auto"
              )}
            >
              {contacts.map((c) => {
                return (
                  <li key={c.label}>
                    <IconButton
                      aria-label={c.label}
                      icon={c.icon}
                      onClick={c.handleClick}
                      title={c.label}
                    />
                  </li>
                );
              })}
            </ul>
          )}
          {!isMobile && (
            <HeroTextPartThree show={subSection === "HeroTextPartThree"} />
          )}
        </div>
      </div>

      {isNotMobile && !isPortrait && (
        <HeroImage handleLoading={handleLoading} />
      )}
    </section>
  );
}
