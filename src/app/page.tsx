import { classNames } from "./lib/utils";
import HeroSection from "@features/home/heroSection/HeroSection";
import Projects from "@features/home/projectsSection/ProjectsSection";
import LatestPosts from "@features/home/latestPostsSection/LatestPosts";

export default function Home() {
  return (
    <main className={classNames("mb-16", "md:mb-40")}>
      <HeroSection />
      <Projects />
      <LatestPosts />
    </main>
  );
}
