"use client";

import { VideoHTMLAttributes, useId, useRef, useState } from "react";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton";
import { classNames } from "@/app/lib/utils";

interface VideoPlayerProps extends VideoHTMLAttributes<HTMLVideoElement> {
  containerClass?: string;
  videoClass?: string;
}

export default function VideoPlayer({
  containerClass = "",
  videoClass = "",
  ...videoPlayerAttributes
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoId = useId();

  const handlePlay = () => {
    const video = videoRef.current!;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  return (
    <div
      className={classNames("relative", {
        [containerClass]: !!containerClass,
      })}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div
        className={classNames(
          "overlay centered z-10 transition-opacity duration-300 opacity-0 bg-[rgba(0,0,0,0.5)]",
          {
            "opacity-100": isHovered || !isPlaying,
          }
        )}
      >
        <IconButton
          aria-label="video controls"
          aria-controls={videoId}
          onClick={handlePlay}
          icon={isPlaying ? faPause : faPlay}
        />
      </div>
      <video
        id={videoId}
        className={classNames({ [videoClass]: !!videoClass })}
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
        {...videoPlayerAttributes}
      />
    </div>
  );
}
