"use client";

import { classNames } from "@/app/lib/utils";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputHTMLAttributes, useState } from "react";
import { turquoise } from "../../../../tailwind.config";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconProp;
  containerClass?: string;
}

export default function Input({
  icon,
  containerClass = "",
  ...inputAttributes
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  
  return (
    <div
      className={classNames(
        "h-14 flex items-center rounded-full border-app-gray border-2 px-6 space-x-3",
        { [containerClass]: !!containerClass },
        { "border-app-white": isFocused }
      )}
    >
      {!!icon && <FontAwesomeIcon icon={icon} size="xl" color={turquoise} />}
      <input
        className="appearance-none bg-[transparent] h-full flex-grow focus:outline-none"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...inputAttributes}
      />
    </div>
  );
}
