"use client";

import {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useMemo,
  useRef,
} from "react";

interface RefContextValue {
  bodyRef: RefObject<HTMLBodyElement>;
  heroRef: RefObject<HTMLElement>;
}

const RefContext = createContext<RefContextValue | null>(null);

interface RefContextProviderProps {
  children: ReactNode;
}

export default function RefContextProvider({
  children,
}: RefContextProviderProps) {
  const bodyRef = useRef<HTMLBodyElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const value = useMemo(() => {
    return {
      bodyRef,
      heroRef,
    };
  }, []);

  return <RefContext.Provider value={value}>{children}</RefContext.Provider>;
}

export function useRefContext() {
  const refContextState = useContext(RefContext);

  if (!refContextState) {
    throw new Error("useRefContext must be used within a Provider");
  } else {
    return refContextState;
  }
}
