import { classNames } from "./lib/utils";
import HeroSection from "@features/home/heroSection/HeroSection";
import Projects from "@features/home/projectsSection/ProjectsSection";
import LatestPosts from "@features/home/latestPostsSection/LatestPosts";
import Stars from "./ui/features/Stars";
import Loading from "./ui/features/home/loading/Loading";

export default function Home() {
  return (
    <main className={classNames("")}>
      <Loading />
      <HeroSection />
      <Projects />
      <LatestPosts />
      <Stars />
    </main>
  );
}
