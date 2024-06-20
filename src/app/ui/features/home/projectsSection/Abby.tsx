import Image from "next/image";
import abbyLogo from "@public/logos/abby-logo-large.svg";
import ProjectDisplay from "./ProjectDisplay";
import { ABBY_PROJECT } from "@/app/lib/id";

interface AbbyProps {}
export default function Abby({}: AbbyProps) {
  return (
    <ProjectDisplay
      textPlacement="right"
      id={ABBY_PROJECT}
      backgroundImage="md:bg-abby md:bg-left"
      backgroundColor="bg-abby-gradient"
      logo={
        <div className="centered flex-col">
          <Image src={abbyLogo} className="w-40 md:w-60 mb-4" alt="Abby Logo" />
          <p className="font-medium text-lg md:text-2xl text-app-fog">Financial Dashboard</p>
        </div>
      }
      projectName="ABBY"
      projectType="Financial Dashboard"
      projectDescription="with one goal in mind: to make it easy for users to manage and understand their financial health."
      tools={["React Native", "Express.js", "Postman", "Figma"]}
      links={[
        {
          name: "Figma Mockup",
          href: "https://www.figma.com/file/NJuPGZIs74vcuwP5Ty3VLD/Abby-Design-System?type=design&node-id=2-96&mode=design",
        },
        {
          name: "Frontend Repository",
          href: "https://github.com/toekneeyou/abby-ui",
        },
        {
          name: "Backend Repository",
          href: "https://github.com/toekneeyou/abby-backend",
        },
      ]}
    />
  );
}
