import { ButtonHTMLAttributes } from "react";
import { turquoise } from "@/app/lib/constants";
import { classNames } from "@/app/lib/utils";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconProp;
  size?: FontAwesomeIconProps["size"];
  className?: string;
}

export default function IconButton({
  icon,
  size = "2x",
  className = "",

  ...buttonAttributes
}: IconButtonProps) {
  return (
    <button
      className={classNames("appearance-none centered disabled:opacity-25", {
        [className]: !!className,
      })}
      {...buttonAttributes}
    >
      <FontAwesomeIcon icon={icon} color={turquoise} size={size} />
    </button>
  );
}
