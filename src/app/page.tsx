import { classNames } from "./lib/utils";
import LatestPosts from "./ui/features/LatestPosts";
import HeroSection from "./ui/features/home/heroSection/HeroSection";
import Projects from "./ui/features/home/projectsSection/ProjectsSection";

export default function Home() {
  return (
    <main className={classNames("mb-16", "md:mb-40")}>
      <HeroSection />
      <Projects />
      <LatestPosts />
    </main>
  );
}
