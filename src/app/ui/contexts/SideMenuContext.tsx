"use client";

import { mdvp } from "@/app/lib/constants";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

interface SideMenuState {
  isSideMenuOpen: boolean;
}
interface SideMenuAPI {
  toggleSideMenu: () => void;
  setIsSideMenuOpen: (arg: boolean) => void;
}

const SideMenuStateContext = createContext<SideMenuState | null>(null);
const SideMenuAPIContext = createContext<SideMenuAPI | null>(null);

const TOGGLE_SIDE_MENU = "toggleSideMenu";
const SET_IS_SIDE_MENU_OPEN = "setIsSideMenuOpen";
type SideMenuActions =
  | { type: typeof TOGGLE_SIDE_MENU }
  | { type: typeof SET_IS_SIDE_MENU_OPEN; payload: boolean };

const reducer = (
  state: SideMenuState,
  action: SideMenuActions
): SideMenuState => {
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

  const sideMenuAPI: SideMenuAPI = useMemo(() => {
    return {
      toggleSideMenu: () => dispatch({ type: TOGGLE_SIDE_MENU }),
      setIsSideMenuOpen: (arg: boolean) =>
        dispatch({ type: SET_IS_SIDE_MENU_OPEN, payload: arg }),
    };
  }, []);

  useEffect(() => {
    // whenever viewport is too big, close sidemenu and disconnect resize observer
    const handleResize = (entries: ResizeObserverEntry[]) => {
      entries.forEach((e) => {
        if (
          e.target.getBoundingClientRect().width >= mdvp &&
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
        document.body.classList.remove("overflow-y-scroll");
        document.body.classList.add("overflow-y-hidden");
      } else {
        document.body.classList.remove("overflow-y-hidden");
        document.body.classList.add("overflow-y-scroll");
      }
    };

    handleBodyScroll();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.querySelector("body")!);

    return () => {
      resizeObserver.disconnect();
    };
  }, [state.isSideMenuOpen, sideMenuAPI]);

  return (
    <SideMenuStateContext.Provider value={state}>
      <SideMenuAPIContext.Provider value={sideMenuAPI}>
        {children}
      </SideMenuAPIContext.Provider>
    </SideMenuStateContext.Provider>
  );
}

export function useSideMenuState() {
  const sideMenuState = useContext(SideMenuStateContext);
  if (!sideMenuState) {
    throw new Error("useSideMenuState must be used within a Provider");
  } else {
    return sideMenuState;
  }
}

export function useSideMenuAPI() {
  const sideMenuActions = useContext(SideMenuAPIContext);
  if (!sideMenuActions) {
    throw new Error("useSideMenuAPI must be used within a Provider");
  } else {
    return sideMenuActions;
  }
}
