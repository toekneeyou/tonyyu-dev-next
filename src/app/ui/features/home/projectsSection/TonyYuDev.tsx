import { josefin } from "@/app/ui/fonts";
import { TONYYU_PROJECT } from "@/app/lib/id";
import ProjectDisplay from "./ProjectDisplay";
import { classNames } from "@/app/lib/utils";

interface TonyYuDevProps {}

export default function TonyYuDev({}: TonyYuDevProps) {
  return (
    <ProjectDisplay
      id={TONYYU_PROJECT}
      backgroundImage="lg:bg-tonyyu lg:portrait:bg-center lg:bg-right"
      backgroundColor="bg-app-black"
      logo={
        <div className="centered flex-col">
          <h3
            className={classNames(
              `${josefin.className} font-bold text-3xl mb-2`,
              "lg:text-6xl"
            )}
          >
            TONY YU
            <span className={classNames("text-turquoise")}>.DEV</span>
          </h3>
          <p className="font-medium text-lg lg:text-2xl text-app-fog">
            Portfolio & Blog
          </p>
        </div>
      }
      projectName="tonyyu.dev"
      projectType="Personal Portfolio"
      projectDescription="Showcasing projects and blog posts related to coding."
      tools={["Next.js", "Tailwind", "WordPress", "Playwright"]}
      links={[
        {
          name: "Frontend Repository",
          href: "https://github.com/toekneeyou/tonyyu-dev-next",
        },
      ]}
      textPlacement="left"
    />
  );
}
