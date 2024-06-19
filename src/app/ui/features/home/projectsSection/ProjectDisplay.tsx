import { classNames } from "@/app/lib/utils";
import IconButton from "@/app/ui/components/IconButton";
import StyledLink from "@/app/ui/components/StyledLink";
import {
  useProjectExpandedAPI,
  useProjectExpandedState,
} from "@/app/ui/contexts/ProjectExpandedContext";
import {
  faArrowUpRightFromSquare,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface ProjectDisplayProps {
  logo: ReactNode;
  backgroundImage: string;
  backgroundColor?: string;
  id: string;
  projectName: string;
  projectType: string;
  projectDescription: string;
  tools: string[];
  links: { name: string; href: string }[];
  textPlacement: "left" | "right";
}

export default function ProjectDisplay({
  id,
  logo,
  backgroundImage,
  backgroundColor = "",
  projectName,
  projectDescription,
  projectType,
  tools = [],
  links = [],
  textPlacement = "left",
}: ProjectDisplayProps) {
  const projectExpandedState = useProjectExpandedState();
  const { expandProject, collapseProject } = useProjectExpandedAPI();
  const isExpanded = projectExpandedState[id];

  const handleExpandProject = () => {
    if (!isExpanded) {
      expandProject(id);
    }
  };

  const handleCollapseProject = () => {
    collapseProject(id);
  };

  return (
    <div
      onClick={handleExpandProject}
      id={id}
      className={classNames(
        "relative grid grid-cols-1 grid-rows-1 overflow-hidden",
        "transition-[height] duration-300 ease-out group",
        "before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:pointer-events-none before:transition-[backdrop-filter] before:duration-300 before:ease-out",
        { [backgroundColor]: !!backgroundColor },
        {
          [`h-[260px] cursor-pointer`]: !isExpanded,
          // ["before:hover:backdrop-blur-md "]: !isExpanded,
          // ["before:backdrop-blur-md"]: isExpanded,
          [`delay-300 h-[700px]`]: isExpanded,
        }
      )}
    >
      <IconButton
        className={classNames(
          "absolute top-8 right-8 z-20 transition-opacity will-change-[opacity] duration-300 ease-out",
          {
            "opacity-0 pointer-events-none": !isExpanded,
            "opacity-100 delay-300": isExpanded,
          }
        )}
        icon={faMinus}
        onClick={handleCollapseProject}
      />
      <div
        className={classNames(
          "h-[260px] centered w-full col-start-1 col-end-2 row-start-1 row-end-2"
        )}
      >
        <div
          className={classNames("overflow-hidden", {
            "group-hover:scale-[1.25] duration-300 transition-transform ease-out":
              !isExpanded,
          })}
        >
          <div
            className={classNames(
              "transition-transform will-change-transform duration-300",

              { "translate-y-[-110%]": isExpanded }
            )}
          >
            {logo}
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "flex w-full col-start-1 col-end-2 row-start-1 row-end-1",
          "transition-opacity will-change-[opacity] duration-300 ease-out",
          "grid grid-cols-2",
          {
            [backgroundImage]: !!backgroundImage,
          },
          {
            "delay-300": isExpanded,
            "opacity-0 pointer-events-none": !isExpanded,
          }
        )}
      >
        <div
          className={classNames("w-full h-full centered", {
            "col-start-2 col-end-3": textPlacement === "right",
          })}
        >
          <div className="space-y-8">
            <div className="relative inline-block after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-4 after:z-0 after:bg-app-gray">
              <h2 className="font-bold z-10 relative mx-1 md:text-3xl text-app-white">
                {projectName}
              </h2>
            </div>
            <p className="leading-6 font-medium md:w-[400px]">
              <span className="inline-block font-medium text-3xl mb-2">
                {projectType}
              </span>
              <span className="inline-block font-medium">
                {projectDescription}
              </span>
            </p>

            <div className="bg-app-gray h-[1px]" />

            <figure>
              <figcaption className="font-bold text-xl mb-2">Tools:</figcaption>
              <ul className="flex space-x-1">
                {tools.map((t, i) => {
                  const isLast = i === tools.length - 1;
                  return (
                    <li
                      key={t}
                      className={classNames({
                        "after:content-[','] font-medium": !isLast,
                      })}
                    >
                      {t}
                    </li>
                  );
                })}
              </ul>
            </figure>
            <figure>
              <figcaption className="font-bold text-xl mb-2">Links:</figcaption>
              <ul className="flex flex-col space-y-4">
                {links.map((l) => {
                  return (
                    <li className={l.name} key={l.name}>
                      <StyledLink href={l.href} target="_blank">
                        <span className="font-bold mr-2">{l.name}</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </StyledLink>
                    </li>
                  );
                })}
              </ul>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
