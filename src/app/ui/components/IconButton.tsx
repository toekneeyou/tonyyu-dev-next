import { HTMLAttributes } from "react";
import { turquoise } from "@/app/lib/constants";
import { classNames } from "@/app/lib/utils";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: IconProp;
}

export default function IconButton({
  icon,
  ...buttonAttributes
}: IconButtonProps) {
  return (
    <button
      className={classNames("appearance-none centered")}
      {...buttonAttributes}
    >
      <FontAwesomeIcon icon={icon} color={turquoise} size={"2x"} />
    </button>
  );
}
