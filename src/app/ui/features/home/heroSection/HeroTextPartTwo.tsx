import { classNames } from "@/app/lib/utils";

const transitionClass =
  "md:transition-transform md:will-change-transform md:duration-300";

interface HeroTextPartTwoProps {
  isHalfway: boolean;
}

export default function HeroTextPartTwo({ isHalfway }: HeroTextPartTwoProps) {
  return (
    <div
      className={classNames(
        "hidden",
        "md:z-[-1] md:centered md:absolute md:top-0 md:left-0 md:w-full md:mx-auto md:h-full"
      )}
    >
      <p className="text-xl font-bold md:w-[444px] flex flex-col -translate-y-12">
        <span className="overflow-hidden mb-4">
          <span
            className={classNames("inline-block font-medium", transitionClass, {
              "md:translate-y-[110%]": !isHalfway,
            })}
          >
            I specialize in
          </span>
        </span>
        <span className="overflow-hidden">
          <strong
            className={classNames(
              "inline-block text-[6rem] leading-none",
              transitionClass,
              { "md:translate-y-[110%]": !isHalfway }
            )}
          >
            frontend
          </strong>
        </span>
        <span className="overflow-hidden mb-8">
          <strong
            className={classNames(
              "inline-block text-[4rem] leading-none",
              transitionClass,
              { "md:translate-y-[110%]": !isHalfway }
            )}
          >
            development,
          </strong>
        </span>
        <span className="overflow-hidden mb-4">
          <span
            className={classNames("inline-block font-medium", transitionClass, {
              "md:translate-y-[110%]": !isHalfway,
            })}
          >
            building modern applications that are
          </span>
        </span>
        <span className="overflow-hidden">
          <strong
            className={classNames("inline-block text-[2rem]", transitionClass, {
              "md:translate-y-[110%]": !isHalfway,
            })}
          >
            user-friendly, captivating, and efficient.
          </strong>
        </span>
      </p>
    </div>
  );
}
