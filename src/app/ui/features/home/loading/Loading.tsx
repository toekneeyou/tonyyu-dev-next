"use client";

import { classNames } from "@/app/lib/utils";
import { useLoadingContext } from "@/app/ui/contexts/LoadingContext";
import { josefin } from "@/app/ui/fonts";
import { usePathname } from "next/navigation";
import LoadingBall from "./LoadingBall";

export default function Loading() {
  const pathname = usePathname();
  const loadingState = useLoadingContext();
  const isLoading = loadingState[pathname];

  return (
    <div
      className={classNames(
        [
          "fixed bg-app-black z-50 top-0 left-0 w-full h-full centered flex-col space-y-4",
          "transition-opacity delay-200 duration-300",
        ],
        { "opacity-0 pointer-events-none": !isLoading }
      )}
    >
      <div
        className={classNames(
          [`${josefin.className} text-xl font-bold`, "transition-transform"],
          {
            "scale-0": !isLoading,
          }
        )}
      >
        TONY YU
      </div>

      <div
        className={classNames(["centered space-x-2", "transition-transform"], {
          "scale-0": !isLoading,
        })}
      >
        <LoadingBall isLoading={isLoading} />
        <LoadingBall animationDelay="1s" isLoading={isLoading} />
        <LoadingBall isLoading={isLoading} />
        <LoadingBall animationDelay="1s" isLoading={isLoading} />
      </div>
    </div>
  );
}
