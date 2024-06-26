import { classNames } from "@/app/lib/utils";

const transitionClass = "lg:transition-transform lg:duration-300";

interface HeroTextPartThreeProps {
  show: boolean;
}
export default function HeroTextPartThree({ show }: HeroTextPartThreeProps) {
  return (
    <div
      className={classNames(
        "hidden",
        "lg:centered lg:h-screen lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2 lg:z-20 lg:pointer-events-none",
        "lg:portrait:-translate-x-32"
      )}
    >
      <p
        className={classNames(
          "flex flex-col font-bold",
          "md:w-[444px]",
          "lg:text-xl"
        )}
      >
        <span className="inline-block overflow-hidden">
          <strong
            className={classNames(
              "inline-block text-6xl leading-none",
              `lg:text-[6rem] ${transitionClass}`,
              { "lg:translate-y-[110%]": !show }
            )}
          >
            Check these links out
          </strong>
        </span>
        <span className="inline-block overflow-hidden mt-4 mb-8">
          <span
            className={classNames(
              "inline-block leading-none font-medium",
              `${transitionClass}`,
              { "lg:translate-y-[110%]": !show }
            )}
          >
            and keep scrolling for more
          </span>
        </span>
      </p>
    </div>
  );
}
