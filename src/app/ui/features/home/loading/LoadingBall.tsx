import { classNames } from "@/app/lib/utils";

interface LoadingBallProps {
  animationDelay?: string;
  transitionDelay?: string;
  isLoading: boolean;
}

export default function LoadingBall({
  animationDelay = "0ms",
  isLoading = true,
  transitionDelay = "0ms",
}: LoadingBallProps) {
  return (
    <div
      className={classNames("animate-pulse h-4 w-4 bg-turquoise rounded-full", {
        "scale-[0] opacity-0": !isLoading,
      })}
      style={{ animationDelay, transitionDelay, transitionDuration: "1s" }}
    />
  );
}
