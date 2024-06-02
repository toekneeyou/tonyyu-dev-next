"use client";

import { ABOUT_ME } from "@/app/lib/id";
import { classNames } from "@/app/lib/utils";
import Image from "next/image";
import { josefin } from "../fonts";
import Link from "../components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import AboutMeVisualItem from "./AboutMeVisual";
import nielsenLogo from "../../../../public/logos/nielsen-logo.svg";
import tiltLogo from "../../../../public/logos/tilt-logo.svg";
import lewagonLogo from "../../../../public/logos/lewagon-logo.jpg";
import uclaLogo from "../../../../public/logos/ucla-logo.webp";
import tony1080 from "../../../../public/images/tony-iceland-1080x1350.jpg";
import tony2160 from "../../../../public/images/tony-iceland-2160x2699.jpg";
import { mdvp } from "@/app/lib/constants";

export default function AboutMe() {
  const downloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(process.env.NEXT_PUBLIC_RESUME_URL);
  };

  return (
    <section id={ABOUT_ME} className="py-12 space-y-12">
      <h1
        className={classNames(
          josefin.className,
          "font-bold text-2xl text-center"
        )}
      >
        ABOUT ME
      </h1>
      <div className="px-4">
        <img
          className="rounded-3xl"
          srcSet={`
        ${tony1080.src} 1080w,
        ${tony2160.src} 2160w
        `}
          sizes={`(min-width: ${mdvp}px) 2160px, 100vw`}
          src={tony2160.src}
          alt="Author wearing a redjacket standing in front of a snow-capped mountain in Iceland."
        />
      </div>

      <p className="mx-4 leading-6 font-medium">
        Hello! I'm Tony, a frontend developer based in Los Angeles, CA. I've
        been in this field for over 4 years, and I love building engaging,
        intuitive, and beautiful user interfaces.
      </p>
      <div className="centered">
        <Link onClick={downloadResume}>
          <span className="font-bold mr-1">download resume</span>
          <FontAwesomeIcon icon={faDownload} />
        </Link>
      </div>
      <ul className="px-4 space-y-4">
        <AboutMeVisualItem
          className="bg-gradient-to-br from-[#5030aa] via-[#304e69] to-[#1f2c66]"
          company="Nielsen"
          title="Senior Software Engineer"
          dates="2020 - Present"
          img={nielsenLogo}
        />
        <AboutMeVisualItem
          className="bg-app-white text-app-black"
          company="Tilt Access"
          title="Software Engineer"
          dates="2020 - 2021"
          img={tiltLogo}
        />
        <AboutMeVisualItem
          className="bg-[#e71005]"
          company="Le Wagon"
          title="Web Development Program"
          dates="2019"
          img={lewagonLogo}
        />
        <AboutMeVisualItem
          className="bg-[#0f7bb6]"
          company="UCLA Health"
          title="Ophthalmic Technician II"
          dates="2016 - 2019"
          img={uclaLogo}
        />
      </ul>
    </section>
  );
}
