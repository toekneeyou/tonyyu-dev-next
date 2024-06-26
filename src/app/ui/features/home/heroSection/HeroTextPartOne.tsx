import { contacts } from "@/app/lib/constants";
import { classNames } from "@/app/lib/utils";
import H2 from "@/app/ui/components/H2";
import IconButton from "@/app/ui/components/IconButton";
import { josefin } from "@/app/ui/fonts";

const transitionClass = "lg:transition-transform lg:duration-300";

interface HeroTextPartOneProps {
  hide: boolean;
}

export default function HeroTextPartOne({ hide }: HeroTextPartOneProps) {
  return (
    <div
      className={classNames(
        "centered px-8",
        "lg:px-0 lg:h-screen lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2 lg:z-20",
        "lg:portrait:-translate-x-32"
      )}
    >
      <div className="w-full md:w-[444px]">
        <div className="overflow-hidden mb-8">
          <h1
            className={classNames(
              `${josefin.className} text-8xl font-bold leading-none`,
              `lg:text-[8rem] ${transitionClass}`,
              { "lg:translate-y-[110%]": hide }
            )}
          >
            TONY
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1
            className={classNames(
              `${josefin.className} text-8xl font-bold leading-none`,
              `lg:text-[8rem] ${transitionClass}`,
              { "lg:translate-y-[110%]": hide }
            )}
          >
            YU
          </h1>
        </div>
        <div className="overflow-hidden mb-16 flex justify-end">
          <div
            className={classNames(transitionClass, {
              "lg:translate-y-[110%]": hide,
            })}
          >
            <H2>Hi, I&apos;m a software engineer</H2>
          </div>
        </div>
        <ul
          className={classNames(
            "hidden",
            "lg:flex lg:justify-end lg:space-x-4"
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
