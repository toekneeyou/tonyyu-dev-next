import Image from "next/image";
import tonyIceland from "@public/images/tony-iceland-2160x2699.jpg";

export default function HeroImage() {
  return (
    <div className="lg:h-screen lg:sticky lg:top-0">
      <Image
        priority={true}
        className="object-cover h-full w-full"
        src={tonyIceland}
        alt="Author wearing a redjacket standing in front of a snow-capped mountain in Iceland."
      />
    </div>
  );
}
