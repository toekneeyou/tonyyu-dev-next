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
        "centered px-8",
        "md:px-0 md:h-screen md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2 md:z-10"
      )}
    >
      <p
        className={classNames(
          "flex flex-col font-bold",
          "md:w-[444px] md:text-xl"
        )}
      >
        <span className="inline-block overflow-hidden mb-4">
          <span
            className={classNames("inline-block font-medium", transitionClass, {
              "md:translate-y-[110%]": !isHalfway,
            })}
          >
            I specialize in
          </span>
        </span>
        <span className="inline-block overflow-hidden">
          <strong
            className={classNames(
              "inline-block text-6xl leading-none",
              `md:text-[6rem] ${transitionClass}`,
              { "md:translate-y-[110%]": !isHalfway }
            )}
          >
            frontend
          </strong>
        </span>
        <span className="inline-block overflow-hidden mb-8">
          <strong
            className={classNames(
              "inline-block text-4xl leading-none",
              `md:text-[4rem] ${transitionClass}`,
              { "md:translate-y-[110%]": !isHalfway }
            )}
          >
            development,
          </strong>
        </span>
        <span className="inline-block overflow-hidden mb-4">
          <span
            className={classNames("inline-block font-medium", transitionClass, {
              "md:translate-y-[110%]": !isHalfway,
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
                "md:translate-y-[110%]": !isHalfway,
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
