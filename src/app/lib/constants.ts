import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
