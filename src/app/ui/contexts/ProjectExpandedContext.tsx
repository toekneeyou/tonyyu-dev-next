import { ABBY_PROJECT, TONYYU_PROJECT } from "@/app/lib/id";
import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

interface ProjectExpandedValue {
  [projectId: string]: boolean;
}

interface ProjectExpandedAPI {
  expandProject: (id: string) => void;
  collapseProject: (id: string) => void;
}

const ProjectExpandedContext = createContext<ProjectExpandedValue | null>(null);
const ProjectExpandedContextAPI = createContext<ProjectExpandedAPI | null>(
  null
);

interface ProjectsContextProviderProps {
  children: ReactNode;
}

type ProjectExpandedActions =
  | { type: "EXPAND"; payload: string }
  | { type: "COLLAPSE"; payload: string };

const reducer = (
  state: ProjectExpandedValue,
  action: ProjectExpandedActions
): ProjectExpandedValue => {
  switch (action.type) {
    case "EXPAND":
      return { ...state, [action.payload]: true };
    case "COLLAPSE":
      return { ...state, [action.payload]: false };
  }
};

export default function ProjectExpandedContextProvider({
  children,
}: ProjectsContextProviderProps) {
  const [projectExpandedState, dispatch] = useReducer(reducer, {
    [ABBY_PROJECT]: false,
    [TONYYU_PROJECT]: false,
  });

  const projectExpandedApi: ProjectExpandedAPI = useMemo(
    () => ({
      expandProject: (id: string) => dispatch({ type: "EXPAND", payload: id }),
      collapseProject: (id: string) =>
        dispatch({ type: "COLLAPSE", payload: id }),
    }),
    []
  );

  return (
    <ProjectExpandedContext.Provider value={projectExpandedState}>
      <ProjectExpandedContextAPI.Provider value={projectExpandedApi}>
        {children}
      </ProjectExpandedContextAPI.Provider>
    </ProjectExpandedContext.Provider>
  );
}

export function useProjectExpandedContext() {
  const projectExpandedState = useContext(ProjectExpandedContext);
  if (!projectExpandedState) {
    throw new Error("useProjectExpandedContext must be used within a Provider");
  } else {
    return projectExpandedState;
  }
}

export function useProjectExpandedContextAPI() {
  const projectExpandedAPI = useContext(ProjectExpandedContextAPI);
  if (!projectExpandedAPI) {
    throw new Error(
      "useProjectExpandedContextAPI must be used within a Provider"
    );
  } else {
    return projectExpandedAPI;
  }
}
