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
          "lg:pt-40 lg:pb-0 lg:relative lg:z-10 lg:bg-app-black"
        )}
      >
        <div className={classNames("centered mb-24", "lg:mb-32")}>
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
