"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { useRefContext } from "./RefContext";

interface ViewportContextValue {
  w: number | undefined;
  h: number | undefined;
}

const ViewportContext = createContext<ViewportContextValue | null>(null);

interface ViewportContextProviderProps {
  children: ReactNode;
}

export default function ViewportContextProvider({
  children,
}: ViewportContextProviderProps) {
  const [dimensions, setDimensions] = useState<ViewportContextValue>({
    w: undefined,
    h: undefined,
  });
  const { bodyRef } = useRefContext();

  useLayoutEffect(() => {
    const body = bodyRef.current;

    if (body) {
      const observer = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          setDimensions({
            w: window.innerWidth,
            h: window.innerHeight,
          });
        });
      });

      observer.observe(body);

      return () => {
        observer.disconnect();
      };
    }
  }, [bodyRef]);

  return (
    <ViewportContext.Provider value={dimensions}>
      {children}
    </ViewportContext.Provider>
  );
}

export const useViewportContext = () => {
  const viewportContextState = useContext(ViewportContext);
  if (!viewportContextState) {
    throw new Error("useViewportContext must be used within a Provider");
  }
  return viewportContextState;
};
