"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ViewportContextState {
  w: number;
  h: number;
}

const ViewportContext = createContext<ViewportContextState | null>(null);

interface ViewportContextProviderProps {
  children: ReactNode;
}

export default function ViewportContextProvider({
  children,
}: ViewportContextProviderProps) {
  const [dimensions, setDimensions] = useState<ViewportContextState>({
    w: 0,
    h: 0,
  });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions({
          w: entry.contentRect.width,
          h: entry.contentRect.height,
        });
      });
    });

    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, []);

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
