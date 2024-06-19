import { ABBY_PROJECT } from "@/app/lib/id";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ProjectsState {
  expandedProjectId: string | null;
  setExpandedProjectId: Dispatch<SetStateAction<string | null>>;
}

const ProjectsContext = createContext<ProjectsState | null>(null);

interface ProjectsContextProviderProps {
  children: ReactNode;
}

export default function ProjectsContextProvider({
  children,
}: ProjectsContextProviderProps) {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    null
  );

  return (
    <ProjectsContext.Provider
      value={{ expandedProjectId, setExpandedProjectId }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjectsState() {
  const projectsState = useContext(ProjectsContext);
  if (!projectsState) {
    throw new Error("useProjectsState must be used within a Provider");
  } else {
    return projectsState;
  }
}
