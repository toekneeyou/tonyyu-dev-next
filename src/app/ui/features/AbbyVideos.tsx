'use client'

import { useId, useState } from "react";
import { classNames } from "@/app/lib/utils";
import IconButton from "../components/IconButton";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import VideoPlayer from "../components/VideoPlayer";
import { AbbyVideoType, abbyVideos } from "@/app/lib/constants";

interface AbbyVideosProps {
  className?: string;
}

export default function AbbyVideos({ className = "" }: AbbyVideosProps) {
  const balanceId = useId();
  const transactionId = useId();
  const [selectedVideo, setSelectedVideo] = useState<AbbyVideoType>(
    abbyVideos[0]
  );

  const handleLeftArrow = () => {
    setSelectedVideo((p) => {
      if (p.index == 0) {
        return p;
      } else {
        return abbyVideos[p.index - 1];
      }
    });
  };

  const handleRightArrow = () => {
    setSelectedVideo((p) => {
      if (p.index == abbyVideos.length - 1) {
        return p;
      } else {
        return abbyVideos[p.index + 1];
      }
    });
  };

  return (
    <div className={classNames("centered", { [className]: !!className })}>
      <div>
        <IconButton
          className="translate-y-4"
          aria-label="previous video"
          disabled={selectedVideo.index === 0}
          icon={faChevronLeft}
          onClick={handleLeftArrow}
        />
      </div>
      <div className="w-60 mx-10">
        <div className="w-full flex overflow-hidden mb-2">
          <div
            className={classNames(
              "min-w-[200%] flex transition-transform duration-300",
              {
                "translate-x-[-50%]": selectedVideo.index === 1,
              }
            )}
          >
            {abbyVideos.map((av) => {
              const id =
                av.label === "balances & trends" ? balanceId : transactionId;

              return (
                <div
                  key={av.label}
                  id={id}
                  className={classNames(
                    "w-[50%] centered transition-transform duration-300 font-medium capitalize"
                  )}
                >
                  {av.label}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 grid-rows-1">
          {abbyVideos.map((av) => {
            const isSelected = av.index === selectedVideo.index;
            const ariaLabelledBy =
              av.label === "balances & trends" ? balanceId : transactionId;
            return (
              <AbbyVideoPlayer
                {...av}
                key={av.label}
                ariaLabelledBy={ariaLabelledBy}
                className={classNames(
                  "row-start-1 row-end-2 col-start-1 col-end-2",
                  {
                    "animate-move-to-back": !isSelected,
                    "animate-bring-to-front": isSelected,
                  }
                )}
              />
            );
          })}
        </div>
      </div>
      <div>
        <IconButton
          className="translate-y-4"
          aria-label="next video"
          disabled={selectedVideo.index === abbyVideos.length - 1}
          icon={faChevronRight}
          onClick={handleRightArrow}
        />
      </div>
    </div>
  );
}

interface AbbyVideoPlayerProps extends AbbyVideoType {
  className?: string;
  ariaLabelledBy?: string;
}

function AbbyVideoPlayer({
  poster,
  ariaLabelledBy,
  src,
  className = "",
}: AbbyVideoPlayerProps) {
  return (
    <div
      className={classNames(
        "rounded-3xl overflow-hidden w-full border-8 border-[#222]",
        { [className]: !!className }
      )}
    >
      <VideoPlayer
        poster={poster}
        src={src}
        width={380}
        height={822}
        containerClass="w-full"
        aria-labelledby={ariaLabelledBy}
      />
    </div>
  );
}
