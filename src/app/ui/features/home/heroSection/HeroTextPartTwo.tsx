import { classNames } from "@/app/lib/utils";

const transitionClass =
  "lg:transition-transform lg:will-change-transform lg:duration-300";

interface HeroTextPartTwoProps {
  isHalfway: boolean;
}

export default function HeroTextPartTwo({ isHalfway }: HeroTextPartTwoProps) {
  return (
    <div
      className={classNames(
        "centered px-8",
        "lg:px-0 lg:h-screen lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2 lg:z-10"
      )}
    >
      <p
        className={classNames(
          "flex flex-col font-bold",
          "md:w-[444px]",
          "lg:text-xl"
        )}
      >
        <span className="inline-block overflow-hidden mb-4">
          <span
            className={classNames("inline-block font-medium", transitionClass, {
              "lg:translate-y-[110%]": !isHalfway,
            })}
          >
            I specialize in
          </span>
        </span>
        <span className="inline-block overflow-hidden">
          <strong
            className={classNames(
              "inline-block text-6xl leading-none",
              `lg:text-[6rem] ${transitionClass}`,
              { "lg:translate-y-[110%]": !isHalfway }
            )}
          >
            frontend
          </strong>
        </span>
        <span className="inline-block overflow-hidden mb-8">
          <strong
            className={classNames(
              "inline-block text-4xl leading-none",
              `lg:text-[4rem] ${transitionClass}`,
              { "lg:translate-y-[110%]": !isHalfway }
            )}
          >
            development,
          </strong>
        </span>
        <span className="inline-block overflow-hidden mb-4">
          <span
            className={classNames("inline-block font-medium", transitionClass, {
              "lg:translate-y-[110%]": !isHalfway,
            })}
          >
            building modern applications that are
          </span>
        </span>
        <span className="inline-block overflow-hidden mb-16">
          <strong
            className={classNames(
              "inline-block text-[2rem] leading-normal",
              transitionClass,
              {
                "lg:translate-y-[110%]": !isHalfway,
              }
            )}
          >
            user-friendly, captivating, and efficient.
          </strong>
        </span>
      </p>
    </div>
  );
}
