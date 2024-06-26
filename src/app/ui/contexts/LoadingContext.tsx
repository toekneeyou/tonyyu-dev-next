"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
  useRef,
} from "react";

interface LoadingContextValue {
  [path: string]: boolean;
}
interface LoadingContextAPI {
  finishLoadingState: (pathname: string) => void;
}

const LoadingContext = createContext<LoadingContextValue | null>(null);
const LoadingContextAPI = createContext<LoadingContextAPI | null>(null);

type LoadingContextActions = { type: "SUCCESS"; payload: string };

const reducer = (state: LoadingContextValue, action: LoadingContextActions) => {
  switch (action.type) {
    case "SUCCESS":
      return { ...state, [action.payload]: false };
  }
};

const initialState: LoadingContextValue = {
  "/": true,
  "/blog": true,
};

interface LoadingContextProviderProps {
  children: ReactNode;
}

export default function LoadingContextProvider({
  children,
}: LoadingContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const timeRef = useRef(new Date().getMilliseconds());

  const loadingContextAPI = useMemo(
    () => ({
      finishLoadingState: (pathname: string) => {
        const currTime = new Date().getMilliseconds();
        const timeDef = currTime - timeRef.current;

        if (timeDef < 2000) {
          // show Loading screen for at least 2 seconds
          const delay = 2000 - timeDef;

          setTimeout(() => {
            dispatch({ type: "SUCCESS", payload: pathname });
          }, delay);
        } else {
          dispatch({ type: "SUCCESS", payload: pathname });
        }
      },
    }),
    []
  );

  return (
    <LoadingContextAPI.Provider value={loadingContextAPI}>
      <LoadingContext.Provider value={state}>
        {children}
      </LoadingContext.Provider>
    </LoadingContextAPI.Provider>
  );
}

export function useLoadingContext() {
  const loadingContext = useContext(LoadingContext);
  if (!loadingContext) {
    throw new Error("useLoadingContext must be used inside a Provider.");
  }
  return loadingContext;
}

export function useLoadingContextAPI() {
  const loadingContextAPI = useContext(LoadingContextAPI);
  if (!loadingContextAPI) {
    throw new Error("useLoadingContext must be used inside a Provider.");
  }
  return loadingContextAPI;
}
