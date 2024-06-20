"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { classNames } from "@/app/lib/utils";
import { contacts, lgViewport } from "@/app/lib/constants";
import { HERO } from "@/app/lib/id";
import { useViewportContext } from "@contexts/ViewportContext";
import HeroTextPartOne from "./HeroTextPartOne";
import tonyIceland from "@public/images/tony-iceland-1080x1350.jpg";
import IconButton from "@/app/ui/components/IconButton";

const HeroTextPartTwo = dynamic(() => import("./HeroTextPartTwo"));
const HeroImage = dynamic(() => import("./HeroImage"));

export default function HeroSection() {
  const [isHalfway, setIsHalfway] = useState(false);
  const { w, h } = useViewportContext();
  const ballContainerRef = useRef<HTMLDivElement>(null);
  const grayBallRef = useRef<HTMLDivElement>(null);
  const turquoiseBallRef = useRef<HTMLDivElement>(null);

  const isMobile = w !== undefined && w < lgViewport;
  const isNotMobile = w !== undefined && w >= lgViewport;
  useEffect(() => {
    if (isNotMobile) {
      const threshold = Array.from({ length: 101 }, (_, i) => i / 100);
      const ballContainer = ballContainerRef.current!;
      const redball = grayBallRef.current!;
      const grayBall = turquoiseBallRef.current!;

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

      observer.observe(ballContainer);
      return () => {
        observer.disconnect();
      };
    }
  }, [isNotMobile]);

  return (
    <section
      id={HERO}
      className={classNames(
        "pt-40 mb-24",
        "lg:pt-0 lg:mb-0 lg:grid lg:grid-cols-2 lg:h-[200vh]"
      )}
    >
      <div id="hero-left" className="lg:h-[200vh] lg:sticky lg:top-0 lg:z-10">
        <div className="lg:h-screen lg:sticky lg:top-0 lg:grid lg:grid-cols-1 lg:grid-rows-1">
          <HeroTextPartOne isHalfway={isHalfway} />
          {isMobile && (
            <div
              className={classNames(
                "mb-10 w-full centered aspect-square rounded-full overflow-hidden translate-x-[-20%]",
                "md:translate-x-0 md:w-[444px] md:mx-auto"
              )}
            >
              <Image
                src={tonyIceland}
                alt="Tony wearing a red jacket standing in front of a snow-capped mountain."
              />
            </div>
          )}
          <HeroTextPartTwo isHalfway={isHalfway} />
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
        </div>
        {/* Ball Transition Effect */}
        <div
          ref={ballContainerRef}
          className={classNames(
            "hidden pointer-events-none z-[-1]",
            "lg:absolute lg:top-[50%] lg:w-full lg:bottom-0 lg:flex lg:justify-center lg:items-start lg:px-8"
          )}
        >
          <div
            ref={grayBallRef}
            className={classNames(
              "lg:portrait:min-w-[200%]",
              "lg:w-full lg:aspect-square lg:bg-app-gray lg:rounded-full lg:overflow-hidden"
            )}
          >
            <div
              ref={turquoiseBallRef}
              className="lg:h-full lg:w-full lg:bg-turquoise lg:opacity-0 lg:transition-opacity lg:will-change-[opacity]"
            />
          </div>
        </div>
      </div>

      {isNotMobile && <HeroImage />}
    </section>
  );
}
