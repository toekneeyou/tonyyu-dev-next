"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { classNames } from "@/app/lib/utils";
import { josefin } from "../fonts";
import H2 from "../components/H2";
import { contacts } from "@/app/lib/constants";
import IconButton from "../components/IconButton";
import { HERO } from "@/app/lib/id";
import tonyIceland from "../../../../public/images/tony-iceland-2160x2699.jpg";

export default function Hero() {
  const [isHalfway, setIsHalfway] = useState(false);
  const redBallContainerRef = useRef<HTMLDivElement>(null);
  const redBallRef = useRef<HTMLDivElement>(null);

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
          <HeroPartTwo isHalfway={isHalfway} />
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
      <div
        className={classNames(
          "hidden",
          "md:flex md:sticky md:top-0 md:h-[50%]"
        )}
      >
        <Image
          className="object-cover h-full w-auto"
          src={tonyIceland}
          alt="Author wearing a redjacket standing in front of a snow-capped mountain in Iceland."
        />
      </div>
    </header>
  );
}

interface HeroPartOneProps {
  isHalfway: boolean;
}
const transitionClass =
  "md:transition-transform md:will-change-transform md:duration-300";

function HeroPartOne({ isHalfway }: HeroPartOneProps) {
  return (
    <div
      className={classNames(
        "flex flex-col w-[320px]",
        "md:w-[444px] md:select-none"
      )}
    >
      <div className={classNames("overflow-hidden mb-8")}>
        <h1
          className={classNames(
            `${josefin.className} text-8xl font-bold self-start leading-none`,
            `md:text-[8rem] ${transitionClass}`,
            { "md:translate-y-[110%]": isHalfway }
          )}
        >
          TONY
        </h1>
      </div>

      <div className={classNames("overflow-hidden mb-8")}>
        <h1
          className={classNames(
            `${josefin.className} text-8xl font-bold self-start leading-none`,
            `md:text-[8rem] ${transitionClass}`,
            { "md:translate-y-[110%]": isHalfway }
          )}
        >
          YU
        </h1>
      </div>
      <div className="h2 self-end mb-16 overflow-hidden">
        <div
          className={classNames(transitionClass, {
            "md:translate-y-[110%]": isHalfway,
          })}
        >
          <H2>Hi, I'm a software engineer</H2>
        </div>
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
    </div>
  );
}

function HeroPartTwo({ isHalfway }: HeroPartOneProps) {
  return (
    <div
      className={classNames(
        "hidden",
        "md:z-[-1] md:centered md:absolute md:top-0 md:left-0 md:w-full md:mx-auto md:h-full"
      )}
    >
      <div className="text-xl font-bold md:w-[444px] flex flex-col -translate-y-12">
        <p className="overflow-hidden mb-4">
          <span
            className={classNames("inline-block font-medium", transitionClass, {
              "md:translate-y-[110%]": !isHalfway,
            })}
          >
            I specialize in
          </span>
        </p>
        <p className="overflow-hidden">
          <strong
            className={classNames(
              "inline-block text-[6rem] leading-none",
              transitionClass,
              { "md:translate-y-[110%]": !isHalfway }
            )}
          >
            frontend
          </strong>
        </p>
        <p className="overflow-hidden mb-8">
          <strong
            className={classNames(
              "inline-block text-[4rem] leading-none",
              transitionClass,
              { "md:translate-y-[110%]": !isHalfway }
            )}
          >
            development,
          </strong>
        </p>
        <p className="overflow-hidden mb-4">
          <span
            className={classNames("inline-block font-medium", transitionClass, {
              "md:translate-y-[110%]": !isHalfway,
            })}
          >
            building modern applications that are
          </span>
        </p>
        <p className="overflow-hidden">
          <strong
            className={classNames("inline-block text-[2rem]", transitionClass, {
              "md:translate-y-[110%]": !isHalfway,
            })}
          >
            user-friendly, captivating, and efficient.
          </strong>
        </p>
      </div>
    </div>
  );
}
