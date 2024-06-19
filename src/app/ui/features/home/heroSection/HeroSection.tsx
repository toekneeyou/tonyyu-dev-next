"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { classNames } from "@/app/lib/utils";
import { mdViewport } from "@/app/lib/constants";
import { HERO } from "@/app/lib/id";
import { useViewportContext } from "../../../contexts/ViewportContext";
import HeroTextPartOne from "./HeroTextPartOne";

const HeroTextPartTwo = dynamic(() => import("./HeroTextPartTwo"));
const HeroImage = dynamic(() => import("./HeroImage"));

export default function HeroSection() {
  const [isHalfway, setIsHalfway] = useState(false);
  const ballContainerRef = useRef<HTMLDivElement>(null);
  const grayBallRef = useRef<HTMLDivElement>(null);
  const turquoieBallRef = useRef<HTMLDivElement>(null);
  const { w } = useViewportContext();

  useEffect(() => {
    const threshold = Array.from({ length: 101 }, (_, i) => i / 100);
    const redballContainer = ballContainerRef.current!;
    const redball = grayBallRef.current!;
    const grayBall = turquoieBallRef.current!;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { bottom, top, height } = entry.boundingClientRect;
          setIsHalfway(entry.intersectionRatio > 0.2);

          if (bottom >= 0) {
            let scale = 1;
            if (top >= 0) {
              scale = entry.intersectionRatio;
            } else {
              scale = 1 + (5 * Math.abs(top)) / height;
            }

            redball.style.transform = `scale(${scale})`;
          }

          let opacity = 0;
          if (top <= 0) {
            opacity = Math.max(0, 1 - entry.intersectionRatio);
          }
          grayBall.style.opacity = `${opacity}`;
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
    <section
      id={HERO}
      className={classNames(
        "h-screen",
        "md:h-[200vh] md:w-full md:relative md:grid md:grid-cols-2"
      )}
    >
      <div className="relative h-full z-10">
        {/* Hero Text */}
        <div
          className={classNames(
            "centered h-full w-full",
            "md:sticky md:top-0 md:left-0 md:w-full md:mx-auto md:h-[50%] md:z-10"
          )}
        >
          <HeroTextPartOne isHalfway={isHalfway} />
          {w !== undefined && w >= mdViewport && (
            <HeroTextPartTwo isHalfway={isHalfway} />
          )}
        </div>
        {/* Ball Transition Effect */}
        <div
          ref={ballContainerRef}
          className={classNames("hidden pointer-events-none", [
            "md:absolute md:flex md:justify-center md:items-start md:top-[50%] md:bottom-0 md:w-full md:px-8",
            "md:transition-transform md:will-change-transform",
          ])}
        >
          <div
            ref={grayBallRef}
            className="w-full bg-app-gray rounded-full aspect-square overflow-hidden"
          >
            <div
              ref={turquoieBallRef}
              className="h-full w-full bg-turquoise opacity-0"
            />
          </div>
        </div>
      </div>
      {w !== undefined && w >= mdViewport && <HeroImage />}
    </section>
  );
}
