import { turquoise } from "@/app/lib/constants";
import { classNames } from "@/app/lib/utils";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconButtonProps {
  icon: IconProp;
}

export default function IconButton({ icon }: IconButtonProps) {
  return (
    <button className={classNames("appearance-none centered")}>
      <FontAwesomeIcon icon={icon} width={28} height={28} color={turquoise} />
    </button>
  );
}
