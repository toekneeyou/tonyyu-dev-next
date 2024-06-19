import Image from "next/image";
import AbbyVideos from "../../AbbyVideos";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import abbyLogo from "@public/logos/abby-logo-large.svg";
import StyledLink from "@/app/ui/components/StyledLink";
import ProjectDisplay from "./ProjectDisplay";
import { ABBY_PROJECT } from "@/app/lib/id";
import H2 from "@/app/ui/components/H2";

interface AbbyProps {}
export default function Abby({}: AbbyProps) {
  return (
    <ProjectDisplay
      textPlacement="right"
      id={ABBY_PROJECT}
      backgroundImage="bg-abby bg-left"
      backgroundColor="bg-abby-gradient"
      logo={<Image src={abbyLogo} className="w-60" alt="Abby Logo" />}
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
