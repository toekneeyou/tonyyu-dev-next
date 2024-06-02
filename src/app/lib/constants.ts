import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ABOUT_ME, HERO } from "./id";

export { turquoise } from "../../../tailwind.config";

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

export type Section = "hero" | "about me" | "skills" | "projects";
export interface SectionDetail {
  section: Section;
  id: string;
}
export const sections: SectionDetail[] = [
  { section: "hero", id: HERO },
  { section: "about me", id: ABOUT_ME },
];

export const smvp = 640;
export const mdvp = 768;
export const lgvp = 1024;
export const xlvp = 1280;
export const xxlvp = 1536;
