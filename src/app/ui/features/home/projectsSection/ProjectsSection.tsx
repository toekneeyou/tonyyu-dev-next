"use client";

import { PROJECTS } from "@/app/lib/id";
import H1 from "../../../components/H1";
import { classNames } from "@/app/lib/utils";
import Abby from "./Abby";
import TonyYuDev from "./TonyYuDev";
import ProjectExpandedContextProvider from "@/app/ui/contexts/ProjectExpandedContext";

export default function Projects() {
  return (
    <ProjectExpandedContextProvider>
      <section
        id={PROJECTS}
        className={classNames(
          "py-12",
          "md:pt-40 md:pb-0 md:relative md:z-10 md:bg-app-black"
        )}
      >
        <div className="mb-32">
          <H1>PROJECTS</H1>
        </div>

        <ul>
          <li>
            <Abby />
          </li>
          <li>
            <TonyYuDev />
          </li>
        </ul>
      </section>
    </ProjectExpandedContextProvider>
  );
}
