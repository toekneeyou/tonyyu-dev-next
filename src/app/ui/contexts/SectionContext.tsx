"use client";

import { SectionDetail, sections } from "@/app/lib/constants";
import { ABOUT_ME, HERO } from "@/app/lib/id";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface SectionContextState {
  currentSection: SectionDetail;
}

const SectionContext = createContext<SectionContextState | null>(null);

interface SectionContextProviderProps {
  children: ReactNode;
}

export default function SectionContextProvider({
  children,
}: SectionContextProviderProps) {
  const [currentSection, setCurrentSection] = useState<SectionDetail>(
    sections[0]
  );

  const contextValue: SectionContextState = {
    currentSection,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setCurrentSection((p) => {
            let newSection = p;
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                newSection = sections.find((s) => s.id === entry.target.id)!;
              }
            });
            return newSection;
          });
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.getElementById(HERO)!);
    observer.observe(document.getElementById(ABOUT_ME)!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <SectionContext.Provider value={contextValue}>
      {children}
    </SectionContext.Provider>
  );
}

export const useSectionContext = () => {
  const sectionContextState = useContext(SectionContext);
  if (!sectionContextState) {
    throw new Error("useSectionContext must be used within a Provider");
  }
  return sectionContextState;
};
