import { HTMLAttributes, ReactNode } from "react";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export default function Link({ children, ...linkAttributes }: LinkProps) {
  return (
    <div className="inline-block relative space-y-2">
      <a {...linkAttributes} className="px-2">{children}</a>
      <div className="h-[2px] w-full bg-turquoise" />
    </div>
  );
}
