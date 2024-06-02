import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ABOUT_ME, HERO } from "./id";
import htmlLogo from "../../../public/logos/html-logo.svg";
import cssLogo from "../../../public/logos/css-logo.svg";
import jsLogo from "../../../public/logos/js-logo.svg";
import tsLogo from "../../../public/logos/ts-logo.svg";
import reactLogo from "../../../public/logos/react-logo.svg";
import figmaLogo from "../../../public/logos/figma-logo.svg";
import nodeLogo from "../../../public/logos/node-logo.svg";
import expressLogo from "../../../public/logos/express-logo.svg";
import illustratorLogo from "../../../public/logos/illustrator-logo.svg";
import awsLogo from "../../../public/logos/aws-logo.svg";
import sassLogo from "../../../public/logos/sass-logo.svg";
import dockerLogo from "../../../public/logos/docker-logo.svg";
import lightroomLogo from "../../../public/logos/lightroom-logo.svg";
import photoshopLogo from "../../../public/logos/photoshop-logo.svg";
import reduxLogo from "../../../public/logos/redux-logo.svg";
import postmanLogo from "../../../public/logos/postman-logo.svg";
import tailwindLogo from "../../../public/logos/tailwind-logo.svg";
import nextLogo from "../../../public/logos/next-logo.svg";
import abbyBalanceScreen from "../../../public/images/abby-balance-screen.jpg";
import abbyTransactionScreen from "../../../public/images/abby-transaction-screen.jpg";

// CSS variables
export { turquoise } from "../../../tailwind.config";

// Viewport Sizes
export const smvp = 640;
export const mdvp = 768;
export const lgvp = 1024;
export const xlvp = 1280;
export const xxlvp = 1536;

// Contacts
export interface Contact {
  label: string;
  icon: IconProp;
  handleClick: () => void;
}

export const contacts: Contact[] = [
  {
    label: "LinkedIn",
    icon: faLinkedin,
    handleClick: () => window.open("https://linkedin.com/in/tonyyu1129"),
  },
  {
    label: "Github",
    icon: faGithub,
    handleClick: () => window.open("https://github.com/toekneeyou"),
  },
  {
    label: "Email",
    icon: faEnvelope,
    handleClick: () => window.open("mailto:tonyyu1129@gmail.com"),
  },
];

// Section
export type Section = "hero" | "about me" | "skills" | "projects";
export interface SectionDetail {
  section: Section;
  id: string;
}
export const sections: SectionDetail[] = [
  { section: "hero", id: HERO },
  { section: "about me", id: ABOUT_ME },
];

// Skills
export type Skill = "design" | "frontend" | "backend";
export type Tool = { name: string; icon: any };
export type SkillDetail = { name: Skill; tools: Tool[] };
export const skills: SkillDetail[] = [
  {
    name: "design",
    tools: [
      { name: "Figma", icon: figmaLogo },
      { name: "Illustrator", icon: illustratorLogo },
      { name: "Lightroom", icon: lightroomLogo },
      { name: "Photoshop", icon: photoshopLogo },
    ],
  },
  {
    name: "frontend",
    tools: [
      { name: "React", icon: reactLogo },
      { name: "Redux", icon: reduxLogo },
      { name: "TypeScript", icon: tsLogo },
      { name: "JavaScript", icon: jsLogo },
      { name: "Tailwind", icon: tailwindLogo },
      { name: "Sass", icon: sassLogo },
      { name: "HTML", icon: htmlLogo },
      { name: "CSS", icon: cssLogo },
      { name: "Next.js", icon: nextLogo },
    ],
  },
  {
    name: "backend",
    tools: [
      { name: "Node.js", icon: nodeLogo },
      { name: "Express.js", icon: expressLogo },
      { name: "Postman", icon: postmanLogo },
      { name: "AWS", icon: awsLogo },
      { name: "Docker", icon: dockerLogo },
    ],
  },
];

// ABBY Videos
export interface AbbyVideoType {
  label: "balances & trends" | "transactions";
  src: string;
  poster: string;
  index: number;
}
export const abbyVideos: AbbyVideoType[] = [
  {
    label: "balances & trends",
    src: "https://tony-is-looking-for-a-job.s3.us-east.cloud-object-storage.appdomain.cloud/abby-balance-video.mp4",
    poster: abbyBalanceScreen.src,
  },
  {
    label: "transactions",
    src: "https://tony-is-looking-for-a-job.s3.us-east.cloud-object-storage.appdomain.cloud/abby-transaction-video.mp4",
    poster: abbyTransactionScreen.src,
  },
].map((v, i) => ({ ...v, index: i } as AbbyVideoType));
