import { ABBY_PROJECT, TONYYU_PROJECT } from "@/app/lib/id";
import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

interface ProjectExpandedState {
  [projectId: string]: boolean;
}

interface ProjectExpandedAPI {
  expandProject: (id: string) => void;
  collapseProject: (id: string) => void;
}

const ProjectExpandedStateContext = createContext<ProjectExpandedState | null>(
  null
);
const ProjectExpandedAPIContext = createContext<ProjectExpandedAPI | null>(
  null
);

interface ProjectsContextProviderProps {
  children: ReactNode;
}

type ProjectExpandedActions =
  | { type: "EXPAND"; payload: string }
  | { type: "COLLAPSE"; payload: string };

const reducer = (
  state: ProjectExpandedState,
  action: ProjectExpandedActions
): ProjectExpandedState => {
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
    <ProjectExpandedStateContext.Provider value={projectExpandedState}>
      <ProjectExpandedAPIContext.Provider value={projectExpandedApi}>
        {children}
      </ProjectExpandedAPIContext.Provider>
    </ProjectExpandedStateContext.Provider>
  );
}

export function useProjectExpandedState() {
  const projectExpandedState = useContext(ProjectExpandedStateContext);
  if (!projectExpandedState) {
    throw new Error("useProjectExpandedState must be used within a Provider");
  } else {
    return projectExpandedState;
  }
}

export function useProjectExpandedAPI() {
  const projectExpandedAPI = useContext(ProjectExpandedAPIContext);
  if (!projectExpandedAPI) {
    throw new Error("useProjectExpandedState must be used within a Provider");
  } else {
    return projectExpandedAPI;
  }
}
