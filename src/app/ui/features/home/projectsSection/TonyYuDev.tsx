import { josefin } from "@/app/ui/fonts";
import { TONYYU_PROJECT } from "@/app/lib/id";
import ProjectDisplay from "./ProjectDisplay";

interface TonyYuDevProps {}

export default function TonyYuDev({}: TonyYuDevProps) {
  return (
    <ProjectDisplay
      id={TONYYU_PROJECT}
      backgroundImage="bg-tonyyu bg-right"
      backgroundColor="bg-app-black"
      logo={
        <h3 className={`${josefin.className} font-bold text-6xl`}>
          TONY YU<span className="text-turquoise text-3xl">.DEV</span>
        </h3>
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
