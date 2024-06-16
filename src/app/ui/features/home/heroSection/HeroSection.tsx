"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { classNames } from "@/app/lib/utils";
import { mdvp } from "@/app/lib/constants";
import { HERO } from "@/app/lib/id";
import { useViewportContext } from "../../../contexts/ViewportContext";
import { HeroPartOne } from "./HeroPartOne";

const HeroPartTwo = dynamic(() => import("./HeroPartTwo"));
const HeroImage = dynamic(() => import("./HeroImage"));

export default function HeroSection() {
  const [isHalfway, setIsHalfway] = useState(false);
  const redBallContainerRef = useRef<HTMLDivElement>(null);
  const redBallRef = useRef<HTMLDivElement>(null);
  const viewportSize = useViewportContext();

  useEffect(() => {
    const threshold = Array.from({ length: 101 }, (_, i) => i / 100);
    const redballContainer = redBallContainerRef.current!;
    const redball = redBallRef.current!;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { bottom, top, height } = entry.boundingClientRect;
          setIsHalfway(entry.isIntersecting);

          if (bottom >= 0) {
            let scale = 1;
            if (top >= 0) {
              scale = entry.intersectionRatio;
            } else {
              scale = 1 + Math.min(height, Math.abs(top)) / height;
            }

            redball.style.transform = `scale(${scale})`;
          }
        });
      },
      { threshold }
    );

    observer.observe(redballContainer);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      id={HERO}
      className={classNames(
        "h-screen",
        "md:h-[200vh] md:relative md:grid md:grid-cols-2 md:z-[-1]"
      )}
    >
      <div className="relative h-full">
        <div
          className={classNames(
            "centered h-full w-full",
            "md:sticky md:top-0 md:left-0 md:w-full md:mx-auto md:h-[50%]"
          )}
        >
          <HeroPartOne isHalfway={isHalfway} />
          {viewportSize.w >= mdvp && <HeroPartTwo isHalfway={isHalfway} />}
        </div>

        <div
          ref={redBallContainerRef}
          className={classNames(
            "hidden pointer-events-none",
            "md:absolute md:centered md:top-[55%] md:bottom-0 md:w-full md:p-8 md:pb-20 md:-z-10"
          )}
        >
          <div
            ref={redBallRef}
            className="w-full bg-app-red rounded-full aspect-square"
          />
        </div>
      </div>
      {viewportSize.w >= mdvp && <HeroImage />}
    </header>
  );
}
