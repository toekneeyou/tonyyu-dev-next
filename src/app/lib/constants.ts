import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import abbyBalanceScreen from "../../../public/images/abby-balance-screen.jpg";
import abbyTransactionScreen from "../../../public/images/abby-transaction-screen.jpg";

// CSS variables
export { turquoise, black, gray, white, fog } from "../../../tailwind.config";

// Viewport Sizes
export const smViewport = 640;
export const mdViewport = 768;
export const lgViewport = 1024;
export const xlViewport = 1280;
export const xxlViewport = 1536;

// Contacts
export interface Contact {
  label: string;
  icon: IconProp;
  handleClick: () => void;
}

export const contacts: Contact[] = [
  {
    label: "Resume",
    icon: faFileLines,
    handleClick: () => window.open(process.env.NEXT_PUBLIC_RESUME_URL),
  },
  {
    label: "LinkedIn",
    icon: faLinkedin,
    handleClick: () => window.open("https://linkedin.com/in/tonyyu1129/"),
  },
  {
    label: "Github",
    icon: faGithub,
    handleClick: () => window.open("https://github.com/toekneeyou"),
  },
  {
    label: "Email",
    icon: faEnvelope,
    handleClick: () => window.open("mailto:tonyyudev@gmail.com"),
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
