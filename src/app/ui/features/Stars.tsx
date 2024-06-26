"use client";

import { classNames } from "@/app/lib/utils";
import { useMemo } from "react";
import { useViewportContext } from "../contexts/ViewportContext";
import { lgViewport, mdViewport } from "@/app/lib/constants";

interface StarsProps {
  className?: string;
  numberOfStars?: number;
}

export default function Stars({
  className = "",
  numberOfStars = 168,
}: StarsProps) {
  const { w } = useViewportContext();
  const isLargeViewport = w !== undefined && w >= lgViewport;

  const stars = useMemo(() => {
    if (isLargeViewport) {
      return Array.from({ length: numberOfStars })
        .fill(1)
        .map((_, i) => {
          const x = Math.round(Math.random() * 100);
          const y = Math.round(Math.random() * 100);
          const random = Math.random();
          return (
            <div
              key={`star-${i}-${x}${y}`}
              className={classNames(`bg-turquoise absolute rounded-full`, {
                "animate-floating-one": random >= 0.9,
                "animate-floating-two": random >= 0.8 && random < 0.9,
                "animate-floating-three": random >= 0.7 && random < 0.8,
                "animate-floating-four": random >= 0.6 && random < 0.7,
                "animate-floating-five": random >= 0.5 && random < 0.6,
                "animate-floating-six": random >= 0.4 && random < 0.5,
                "animate-floating-seven": random >= 0.3 && random < 0.4,
                "animate-floating-eight": random >= 0.2 && random < 0.3,
                "animate-floating-nine": random >= 0.1 && random < 0.2,
                "animate-floating-ten": random >= 0 && random < 0.1,
              })}
              style={{
                top: `${y}%`,
                left: `${x}%`,
                height: (x + y) % 2 === 0 ? "4px" : "2px",
                width: (x + y) % 2 === 0 ? "4px" : "2px",
              }}
            />
          );
        });
    } else {
      return [];
    }
  }, [isLargeViewport, numberOfStars]);

  if (w == undefined || w < mdViewport) return null;

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 right-0 bottom-0 z-[-1] select-none",
        { [className]: !!className }
      )}
    >
      {stars}
    </div>
  );
}
