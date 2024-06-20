import { contacts } from "@/app/lib/constants";
import { classNames } from "@/app/lib/utils";
import H2 from "@/app/ui/components/H2";
import IconButton from "@/app/ui/components/IconButton";
import { josefin } from "@/app/ui/fonts";

const transitionClass =
  "md:transition-transform md:will-change-transform md:duration-300";

interface HeroTextPartOneProps {
  isHalfway: boolean;
}

export default function HeroTextPartOne({ isHalfway }: HeroTextPartOneProps) {
  return (
    <div
      className={classNames(
        "centered",
        "md:h-screen md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2 md:z-20"
      )}
    >
      <div className="md:w-[444px]">
        <div className="overflow-hidden mb-8">
          <h1
            className={classNames(
              `${josefin.className} text-8xl font-bold leading-none`,
              `md:text-[8rem] ${transitionClass}`,
              { "md:translate-y-[110%]": isHalfway }
            )}
          >
            TONY
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1
            className={classNames(
              `${josefin.className} text-8xl font-bold leading-none`,
              `md:text-[8rem] ${transitionClass}`,
              { "md:translate-y-[110%]": isHalfway }
            )}
          >
            YU
          </h1>
        </div>
        <div className="overflow-hidden mb-16 flex justify-end">
          <div
            className={classNames(transitionClass, {
              "md:translate-y-[110%]": isHalfway,
            })}
          >
            <H2>Hi, I&apos;m a software engineer</H2>
          </div>
        </div>
        <ul
          className={classNames(
            "hidden",
            "md:flex md:justify-end md:space-x-4"
          )}
        >
          {contacts.map((c) => {
            return (
              <li key={c.label}>
                <IconButton
                  aria-label={c.label}
                  icon={c.icon}
                  onClick={c.handleClick}
                  title={c.label}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
