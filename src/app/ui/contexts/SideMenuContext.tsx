"use client";

import { mdViewport } from "@/app/lib/constants";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { useRefContext } from "./RefContext";

interface SideMenuValue {
  isSideMenuOpen: boolean;
}
interface SideMenuAPI {
  toggleSideMenu: () => void;
  setIsSideMenuOpen: (arg: boolean) => void;
}

const SideMenuContext = createContext<SideMenuValue | null>(null);
const SideMenuContextAPI = createContext<SideMenuAPI | null>(null);

const TOGGLE_SIDE_MENU = "toggleSideMenu";
const SET_IS_SIDE_MENU_OPEN = "setIsSideMenuOpen";
type SideMenuActions =
  | { type: typeof TOGGLE_SIDE_MENU }
  | { type: typeof SET_IS_SIDE_MENU_OPEN; payload: boolean };

const reducer = (
  state: SideMenuValue,
  action: SideMenuActions
): SideMenuValue => {
  switch (action.type) {
    case "toggleSideMenu":
      return { isSideMenuOpen: !state.isSideMenuOpen };
    case "setIsSideMenuOpen":
      return { isSideMenuOpen: action.payload };
  }
};

interface SideMenuContextProviderProps {
  children: ReactNode;
}

export default function SideMenuContextProvider({
  children,
}: SideMenuContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, {
    isSideMenuOpen: false,
  });
  const { bodyRef } = useRefContext();

  const sideMenuAPI: SideMenuAPI = useMemo(() => {
    return {
      toggleSideMenu: () => dispatch({ type: TOGGLE_SIDE_MENU }),
      setIsSideMenuOpen: (arg: boolean) =>
        dispatch({ type: SET_IS_SIDE_MENU_OPEN, payload: arg }),
    };
  }, []);

  useEffect(() => {
    const body = bodyRef.current;

    if (body) {
      // whenever viewport is too big, close sidemenu and disconnect resize observer
      const handleResize = (entries: ResizeObserverEntry[]) => {
        entries.forEach((e) => {
          if (
            e.target.getBoundingClientRect().width >= mdViewport &&
            state.isSideMenuOpen
          ) {
            sideMenuAPI.setIsSideMenuOpen(false);
            resizeObserver.disconnect();
          }
        });
      };

      // handle body scroll here instead of using state in page.tsx to prevent unnecessary rerenders
      const handleBodyScroll = () => {
        if (state.isSideMenuOpen) {
          body.classList.remove("overflow-y-scroll");
          body.classList.add("overflow-y-hidden");
        } else {
          body.classList.remove("overflow-y-hidden");
          body.classList.add("overflow-y-scroll");
        }
      };

      handleBodyScroll();
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(body);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [state.isSideMenuOpen, sideMenuAPI]);

  return (
    <SideMenuContext.Provider value={state}>
      <SideMenuContextAPI.Provider value={sideMenuAPI}>
        {children}
      </SideMenuContextAPI.Provider>
    </SideMenuContext.Provider>
  );
}

export function useSideMenuContext() {
  const sideMenuState = useContext(SideMenuContext);
  if (!sideMenuState) {
    throw new Error("useSideMenuContext must be used within a Provider");
  } else {
    return sideMenuState;
  }
}

export function useSideMenuContextAPI() {
  const sideMenuActions = useContext(SideMenuContextAPI);
  if (!sideMenuActions) {
    throw new Error("useSideMenuContextAPI must be used within a Provider");
  } else {
    return sideMenuActions;
  }
}
