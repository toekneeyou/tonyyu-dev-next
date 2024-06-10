import { SKILLS } from "@/app/lib/id";
import Link from "../components/StyledLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import SkillsVisual from "./SkillsVisual";
import H1 from "../components/H1";

export default function Skills() {
  return (
    <section id={SKILLS} className="py-12 space-y-12">
      <H1>SKILLS</H1>
      <p className="mx-4 leading-6 font-medium">
        I focus on creating user interfaces with React and the extensive
        JavaScript ecosystem. Though my expertise is mainly in frontend
        development, I&apos;ve been involved in different phases of the
        development cycle and I&apos;m always looking to expand my knowledge.
        Here are some of the recent tools I&apos;ve used.
      </p>
      <div className="centered">
        <Link href="https://github.com/toekneeyou" target="_blank">
          <span className="font-bold mr-2">check out my github</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </div>

      <SkillsVisual />
    </section>
  );
}
