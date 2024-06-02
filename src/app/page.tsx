import { classNames } from "./lib/utils";
import AboutMe from "./ui/features/AboutMe";
import Hero from "./ui/features/Hero";
import Skills from "./ui/features/Skills";

export default function Home() {
  return (
    <main className={classNames("")}>
      <Hero />
      <AboutMe />
      <Skills />
    </main>
  );
}
