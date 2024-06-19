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
        "flex flex-col w-[320px]",
        "md:w-[444px] md:select-none"
      )}
    >
      <div className={classNames("overflow-hidden mb-8")}>
        <h1
          className={classNames(
            `${josefin.className} text-8xl font-bold self-start leading-none`,
            `md:text-[8rem] ${transitionClass}`,
            { "md:translate-y-[110%]": isHalfway }
          )}
        >
          TONY
        </h1>
      </div>

      <div className={classNames("overflow-hidden mb-8")}>
        <h1
          className={classNames(
            `${josefin.className} text-8xl font-bold self-start leading-none`,
            `md:text-[8rem] ${transitionClass}`,
            { "md:translate-y-[110%]": isHalfway }
          )}
        >
          YU
        </h1>
      </div>
      <div className="h2 self-end mb-16 overflow-hidden">
        <div
          className={classNames(transitionClass, {
            "md:translate-y-[110%]": isHalfway,
          })}
        >
          <H2>Hi, I&apos;m a software engineer</H2>
        </div>
      </div>

      <ul className="flex space-x-4 self-end">
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
  );
}
