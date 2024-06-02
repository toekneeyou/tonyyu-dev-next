import { PROJECTS } from "@/app/lib/id";
import { classNames } from "@/app/lib/utils";
import { josefin } from "../fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "../components/Link";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import H2 from "../components/H2";
import AbbyVideos from "./AbbyVideos";

export default function Projects() {
  return (
    <section id={PROJECTS} className="py-12 space-y-12">
      <h1
        className={classNames(
          josefin.className,
          "font-bold text-2xl text-center"
        )}
      >
        PROJECTS
      </h1>

      <div className="centered">
        <H2>spotlight: ABBY</H2>
      </div>
      <p className="mx-4 leading-6 font-medium">
        When Mint sunsetted, I decided to build my own app to monitor my
        finances. Users can monitor their balances and manage their transactions
        to better understand their financial health.
      </p>
      <AbbyVideos />
      <div className="space-x-4 centered px-4">
        <Link href="https://github.com/toekneeyou" target="_blank">
          <span className="font-bold mr-2">Mockup</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
        <Link href="https://github.com/toekneeyou" target="_blank">
          <span className="font-bold mr-2">Frontend</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
        <Link href="https://github.com/toekneeyou" target="_blank">
          <span className="font-bold mr-2">Backend</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </div>
      {/* <div className="centered">
        <H2>more projects</H2>
      </div> */}
    </section>
  );
}
