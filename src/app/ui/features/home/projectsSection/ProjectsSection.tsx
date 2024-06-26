"use client";

import { PROJECTS } from "@/app/lib/id";
import H1 from "../../../components/H1";
import { classNames } from "@/app/lib/utils";
import Abby from "./Abby";
import TonyYuDev from "./TonyYuDev";
import ProjectExpandedContextProvider from "@/app/ui/contexts/ProjectExpandedContext";
import { useRefContext } from "@/app/ui/contexts/RefContext";

export default function Projects() {
  const { projectRef } = useRefContext();

  return (
    <ProjectExpandedContextProvider>
      <section
        ref={projectRef}
        id={PROJECTS}
        className={classNames("pb-24", "lg:pb-0 lg:relative lg:z-10")}
      >
        <div className={classNames("centered py-24", "lg:py-32")}>
          <H1>PROJECTS</H1>
        </div>

        <ul className="lg:py-32 lg:bg-app-black">
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
