import { classNames } from "@/app/lib/utils";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface StyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  isNextLink?: boolean;
  nextLinkProps?: LinkProps;
}

export default function StyledLink({
  children,
  isNextLink,
  nextLinkProps = {} as LinkProps,
  ...linkAttributes
}: StyledLinkProps) {
  const className = classNames(
    "transition-colors group-hover/link:text-app-black",
    {
      [linkAttributes.className ?? ""]: !!linkAttributes.className,
    }
  );

  return (
    <div className="inline-block relative space-y-2 group/link">
      {isNextLink ? (
        <Link {...nextLinkProps} className={className}>
          {children}
        </Link>
      ) : (
        <a {...linkAttributes} className={className}>
          {children}
        </a>
      )}

      <div className="z-[-1] absolute -bottom-2 left-0 h-[2px] w-full bg-turquoise group-hover/link:h-[32px] transition-[height]" />
    </div>
  );
}
