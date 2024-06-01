import { classNames } from "@/app/lib/utils";
import Image, { StaticImageData } from "next/image";

interface AboutMeVisualItemProps {
  company: string;
  title: string;
  dates: string;
  img: string | StaticImageData;
  className: string;
}

export default function AboutMeVisualItem({
  img,
  company,
  title,
  dates,
  className,
}: AboutMeVisualItemProps) {
  return (
    <li
      className={classNames("h-28 rounded-3xl flex space-x-4 px-2", {
        [className]: !!className,
      })}
    >
      <div className="centered">
        <Image
          src={img}
          alt={`${company} logo`}
          className="h-24 w-24 object-contain"
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="font-bold">{title}</p>
        <p className="font-medium">{company}</p>
        <p className="font-medium">{dates}</p>
      </div>
    </li>
  );
}
