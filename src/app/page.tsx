import { classNames } from "./lib/utils";
import AboutMe from "./ui/features/AboutMe";
import BlogSection from "./ui/features/BlogSection";
import Hero from "./ui/features/Hero";
import Projects from "./ui/features/Projects";
import Skills from "./ui/features/Skills";

export default function Home() {
  return (
    <main className={classNames("mb-16")}>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <BlogSection />
    </main>
  );
}
